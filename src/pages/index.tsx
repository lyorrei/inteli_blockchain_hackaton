import React from 'react'

import Head from 'next/head'

import { PageContainer } from '@/styles/pages/index/style'
import MetamaskButton from '@/components/metamaskButton'

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>Our neighbors</title>
            </Head>

            <PageContainer>
                <MetamaskButton />
            </PageContainer>
        </>
    )
}

export default Home
