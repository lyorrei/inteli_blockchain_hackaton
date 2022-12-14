import { useMetamask } from '@/context/metamask'
import Image from 'next/image'
import React, { useEffect } from 'react'

import NftImage from '../../assets/images/blue/nft.png'
import ProgressBar from '../progressBar'
import { Container, ImageContainer, MoneyDonatedNumber } from './style'
import AnimatedNumber from 'animated-number-react'
import {
    getDonationsBalance,
    getnftLink
} from 'src/ethereum/interactions/functions'
import Nft from '../nft'

interface Props {}

const NftContainer: React.FC<Props> = props => {
    const { donationBalance, setDonationBalance, setNftLink, nftLink } =
        useMetamask()

    useEffect(() => {
        const interval = setInterval(() => {
            getDonationsBalance().then(balance => {
                setDonationBalance(balance)
            })
        }, 5000)

        getnftLink(1).then(url => setNftLink(url))

        return () => clearInterval(interval)
    }, [])

    return (
        <Container>
            <ImageContainer>
                {/* <Image
                    src={NftImage} //{nftLink ? nftLink : ''} //NftImage}
                    layout="fixed"
                    width={251}
                    height={390}
                    quality={100}
                /> */}
                <Nft />
            </ImageContainer>

            <MoneyDonatedNumber>
                <AnimatedNumber
                    value={donationBalance}
                    formatValue={value => value.toFixed(5)}
                />{' '}
                ETH
            </MoneyDonatedNumber>
        </Container>
    )
}

export default NftContainer
