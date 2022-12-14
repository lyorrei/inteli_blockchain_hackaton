//npm modules
require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3')
const fs = require('fs')

// Compiled smart contracts
const compiledCampaignFactory = require('./contracts/compiledContracts/backend/src/contracts/campaignFactory.sol/CampaignFactory.json')

// Setup rinkeby account
let web3
const provider = new HDWalletProvider(
    process.env.SECRET,
    'https://eth-goerli.g.alchemy.com/v2/f6iyXVjPgHyStzGOBmpxAk2H4XQkeXi6'
)
web3 = new Web3(provider)
// Array with contracts' name and address
let contractsAdresses = {}

// Setup contracts' deployment
const deployContract = async (contractName, compiledContract) => {
    try {
        const accounts = await web3.eth.getAccounts()

        const result = await new web3.eth.Contract(compiledContract.abi)
            .deploy({ data: compiledContract.bytecode })
            .send({ from: accounts[0] })

        console.log('Contract deployed to', result.options.address)
        provider.engine.stop()

        contractsAdresses[contractName] = result.options.address

        return result.options.address
    } catch (err) {
        console.log(err)
    }
}

;(async () => {
        // Calling the function to deploy each contract
    await deployContract('CampaignFactory', compiledCampaignFactory)
    fs.readFile(
        __dirname + '/contractsAddresses.json',
        'utf8',
        function readFileCallback(err, data) {
            if (err) {
                console.log(err)
                return
            }

            const newJson = JSON.parse(data) //now it an object
            newJson.addresses.push(contractsAdresses) //add some data

            // Create Json with Addresses
            const jsonAddressObject = JSON.stringify(newJson)

            fs.writeFile(
                __dirname + '/contractsAddresses.json',
                jsonAddressObject,
                'utf8',
                err => {
                    if (err) {
                        console.log(err)
                        return
                    }

                    console.log('Arquivo com endere??o de contratos criados')
                    return
                }
            )
        }
    )
})()
