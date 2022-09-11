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
        setPrimaryColor(color)
        const name = await getCampaignName()
        setCampaignName(name)
        const expirationDate = await getExpirationDate()
        setCampaignExpirationDate(expirationDate.toNumber())
        const campaignBalance = await getDonationsBalance()
        setDonationBalance(campaignBalance)
        const nftLink = await getnftLink(1)
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
