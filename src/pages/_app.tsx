import React, { useEffect, useState } from 'react'

import GlobalStyle from '../styles/global'
import { lightTheme } from '../styles/theme'

import { ThemeProvider } from 'styled-components'
import withContexts from 'src/HOC/withContexts'

import { campaignFactory } from 'src/ethereum/campaignFactory'
import { campaign } from 'src/ethereum/campaign'
import {
    getCampaignColor,
    getCampaignName,
    getDonationsBalance,
    getExpirationDate,
    getnftLink,
    getCampaignDescription
} from 'src/ethereum/interactions/functions'
import { useMetamask } from '@/context/metamask'
import PageSpinner from '@/components/pageSpinner'

const MyApp = ({ Component, pageProps }) => {
    const [loading, setLoading] = useState(true)
    const [theme, setTheme] = useState(lightTheme)
    const {
        primaryColor,
        setPrimaryColor,
        setCampaignName,
        setCampaignDescription,
        setNftLink,
        setCampaignExpirationDate,
        setDonationBalance
    } = useMetamask()

    useEffect(() => {
        setTheme({
            ...theme,
            colors: {
                ...theme.colors,
                primary: primaryColor
            }
        })
    }, [primaryColor])

    useEffect(() => {
        getCampaignInfo()
    }, [])

    const getCampaignInfo = async () => {
        // const campaignFactoryContract = await campaignFactory()
        // const addrs = await campaignFactoryContract.activeCampaign()
        // const campaignContract = await campaign(addrs)
        // const color = await campaignContract.color()

        const color = await getCampaignColor()
        console.log(color)
        setPrimaryColor(color)
        const name = await getCampaignName()
        console.log(name)
        setCampaignName(name)
        const expirationDate = await getExpirationDate()
        console.log(expirationDate)
        setCampaignExpirationDate(expirationDate)
        const campaignBalance = await getDonationsBalance()
        console.log(campaignBalance)
        setDonationBalance(campaignBalance)
        const nftLink = await getnftLink()
        console.log(nftLink)
        setNftLink(nftLink)
        const description = await getCampaignDescription()
        setCampaignDescription(description)

        setLoading(false)
    }

    return (
        <ThemeProvider theme={theme}>
            {loading ? <PageSpinner /> : <Component {...pageProps} />}

            <GlobalStyle />
        </ThemeProvider>
    )
}

export default withContexts(MyApp)
