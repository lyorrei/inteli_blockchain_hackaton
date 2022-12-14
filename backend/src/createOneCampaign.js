//npm modules
require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3')

// Compiled smart contracts
const compiledCampaignFactory = require('./contracts/compiledContracts/backend/src/contracts/campaignFactory.sol/CampaignFactory.json')
const compiledCampaign = require('./contracts/compiledContracts/backend/src/contracts/campaign.sol/Campaign.json')

const jsonAddresses = require('./contractsAddresses.json')

// Setup rinkeby account
let web3
const provider = new HDWalletProvider(
    process.env.SECRET,
    'https://eth-goerli.g.alchemy.com/v2/f6iyXVjPgHyStzGOBmpxAk2H4XQkeXi6'
)
web3 = new Web3(provider)

// Setup contracts' deployment
const createOneCampaign = async (
    campaignName,
    ipfsLink,
    donationReceiver,
    color,
    expirationDate,
    description
) => {
    try {
        const factoryAddress = jsonAddresses.addresses.at(-1).CampaignFactory

        const accounts = await web3.eth.getAccounts()

        const factoryInstance = await new web3.eth.Contract(
            compiledCampaignFactory.abi,
            factoryAddress
        )

        const activeCampaign = await factoryInstance.methods
            .activeCampaign()
            .call({ from: accounts[0] })

        if (activeCampaign != '0x0000000000000000000000000000000000000000') {
            const campaignInstance = await new web3.eth.Contract(
                compiledCampaign.abi,
                activeCampaign
            )
            await campaignInstance.methods
                .endCampaign()
                .send({ from: accounts[0] })
        }

        await factoryInstance.methods
            .createCampaign(
                campaignName,
                ipfsLink,
                donationReceiver,
                color,
                expirationDate,
                description
            )
            .send({ from: accounts[0] })

        const newCampaignAddress = await factoryInstance.methods
            .activeCampaign()
            .call({ from: accounts[0] })

        console.log('Contract deployed to', newCampaignAddress)
    } catch (err) {
        console.log(err)
    }
}

;(async () => {
    const dateStr = '2023-03-30'
    const date = new Date(dateStr)
    const unixTimestamp = Number(Math.floor(date.getTime() / 1000))

    // Calling the function to create one campaign
    await createOneCampaign(
        'Water save lifes',
        'ipfs://bafybeicfm5w4ld6vb5j7drdw2luibc727mq7r3z2rgxsbubshx4irs54wm/{id}.json',
        '0x17bf6c769096f5E5249Bf2F4B58bF9611f7fec40',
        '#017cb2',
        unixTimestamp,
        'Considering that 26,7% of the Brazilian Northeast do not have access to treated water, it is the focus of discussions about water availability. About that, the NGO Sustainable Development and Water for All (SDW) causes a great social impact by briging basic sanitation to those who do not have access.'
    )
})()
