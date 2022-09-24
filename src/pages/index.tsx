import React from 'react'

import Head from 'next/head'

import { Container, Content, PageContainer } from '@/styles/pages/index/style'

import Navbar from '@/components/navbar'
import Header from '@/components/header'
import SecondView from '@/components/secondView'
import Nft from '@/components/nftContainer'
import TimeLeft from '@/components/timeLeft'

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>Our neighbor</title>
            </Head>

            <PageContainer>
                <Container>
                    <Navbar />
                    <Content>
                        <Header />
                        <Nft />
                        <TimeLeft/>
                    </Content>
                </Container>
            </PageContainer>
            <SecondView>
            </SecondView>
        </>
    )
}

export default Home
