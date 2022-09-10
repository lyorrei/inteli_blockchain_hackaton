import { ethers } from 'ethers'
import contractAddresses from '../../backend/src/contractsAddresses.json'
import campaignFactoryJson from '../../backend/src/contracts/compiledContracts/backend/src/contracts/campaignFactory.sol/CampaignFactory.json'

export const campaignFactory = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const contract = new ethers.Contract(
        contractAddresses.addresses.at(-1).CampaignFactory,
        campaignFactoryJson.abi,
        provider
    )
    return contract
}
