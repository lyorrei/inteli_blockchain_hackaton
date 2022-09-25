import React, { useEffect } from 'react'

import Head from 'next/head'

import {
    Container,
    Content,
    PageContainer
} from '@/styles/pages/campaign/style'

import Navbar from '@/components/navbar'
import Header from '@/components/header'
import SecondView from '@/components/secondView'
import Nft from '@/components/nftContainer'
import TimeLeft from '@/components/timeLeft'
import { useMetamask } from '@/context/metamask'
import PageSpinner from '@/components/pageSpinner'
import {
    getCampaignColor,
    getCampaignDescription,
    getCampaignName,
    getDonationsBalance,
    getExpirationDate,
    getnftLink
} from 'src/ethereum/interactions/functions'
import { useRouter } from 'next/router'

const Campaign: React.FC = () => {
    const router = useRouter()
    const {
        setPrimaryColor,
        setCampaignName,
        setCampaignDescription,
        setNftLink,
        setCampaignExpirationDate,
        setDonationBalance,
        loading,
        setLoading,
        setAccount,
        account
    } = useMetamask()

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', newAccount => {
                setAccount(newAccount)
            })
            window.ethereum.on('chainChanged', getCampaignInfo)
            getCampaignInfo()
        } else {
            router.replace('/')
        }
    }, [])

    const getCampaignInfo = async () => {
        if (window.ethereum.chainId !== '0x4') {
            setLoading(true)
            alert('Change Network to Rinkeby!')
        } else {
            try {
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
            } catch (err) {
                setLoading(false)
                alert('Something went wrong, please refresh the page!')
            }
        }
    }

    let page = <PageSpinner />

    if (!loading) {
        page = (
            <>
                <PageContainer>
                    <Container>
                        <Navbar />
                        <Content>
                            <Header />
                            <Nft />
                            <TimeLeft />
                        </Content>
                    </Container>
                </PageContainer>
                <SecondView />
            </>
        )
    }

    return (
        <>
            <Head>
                <title>Our neighbors</title>
            </Head>
            {page}
        </>
    )
}

export default Campaign
