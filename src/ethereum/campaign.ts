import { ethers } from 'ethers'
import web3 from './web3'
import campaignJson from '../../backend/src/contracts/compiledContracts/backend/src/contracts/campaign.sol/Campaign.json'

export const campaign = (address) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const contract = new ethers.Contract(
        address,
        campaignJson.abi,
        provider
    )
    return contract
}

