//npm modules
const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3')

// Compiled smart contracts
const compiledCampaignFactory = require('./contracts/compiledContracts/backend/src/contracts/campaignFactory.sol/CampaignFactory.json')

const jsonAddresses = require('./contractsAddresses.json')

// Setup rinkeby account
let web3
const provider = new HDWalletProvider(
    'prefer output citizen artwork major aunt moment hero spot asthma quick report',
    'https://rinkeby.infura.io/v3/ce4c9d4f09204bf58decc5edbffe4d38'
)
web3 = new Web3(provider)

// Setup contracts' deployment
const createOneCampaign = async (campaignName, ipfsLink, donationReceiver, color, expirationDate) => {
    try {

        const factoryAddress = jsonAddresses.addresses.at(-1).CampaignFactory

        const accounts = await web3.eth.getAccounts()

        const factoryInstance = await new web3.eth.Contract(compiledCampaignFactory.abi, factoryAddress)

        await factoryInstance.methods.createCampaign(campaignName, ipfsLink, donationReceiver, color, expirationDate).send({from: accounts[0]})

        const newCampaignAddress = await factoryInstance.methods.activeCampaign().call({from: accounts[0]});

        console.log('Contract deployed to', newCampaignAddress)
    } catch (err) {
        console.log(err)
    }
}

;(async () => {
    const dateStr = '2022-06-22';
    const date = new Date(dateStr);
    const timestampInMs = date.getTime();
    const unixTimestamp = Number(Math.floor(date.getTime() / 1000));

    // Calling the function to create one campaign
    await createOneCampaign("Campanha de Teste", "", "0x17bf6c769096f5E5249Bf2F4B58bF9611f7fec40", "#ffff", unixTimestamp)
})()
