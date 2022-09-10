import React, { useEffect } from 'react'

// import { instance as campaignFactory } from '../../ethereum/campaignFactory'
import { ethers } from 'ethers'
import { campaignFactory } from 'src/ethereum/campaignFactory'
import { campaign } from 'src/ethereum/campaign'
// import contractAddresses from '../../../backend/src/contractsAddresses.json'
// import {instance} from '../../ethereum/campaignFactory'
// import campaignFactory from '../../../backend/src/contracts/compiledContracts/backend/src/contracts/campaignFactory.sol/CampaignFactory.json'

interface Props {
    setPrimaryColor(string: string): void
}

const SetupStyles: React.FC<Props> = ({ setPrimaryColor, children }) => {
    useEffect(() => {
        getThemeInfo()
    }, [])

    const getThemeInfo = async () => {
        const campaignFactoryContract = await campaignFactory()
        const addrs = await campaignFactoryContract.activeCampaign()
        const campaignContract = await campaign(addrs)
        const color = await campaignContract.color()
        setPrimaryColor(color)
        console.log(color)
    }

    return children
}

export default SetupStyles
