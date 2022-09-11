import { useMetamask } from '@/context/metamask'
import Image from 'next/image'
import React from 'react'

import NftImage from '../../assets/images/blue/nft.png'
import ProgressBar from '../progressBar'
import { Container, ImageContainer, MoneyDonatedNumber } from './style'

interface Props {}

const Nft: React.FC<Props> = props => {
    const { donationBalance } = useMetamask()

    return (
        <Container>
            <ImageContainer>
                <Image
                    src={NftImage}
                    layout="fixed"
                    width={251}
                    height={390}
                    quality={100}
                />
            </ImageContainer>

            <MoneyDonatedNumber>ETH {donationBalance}</MoneyDonatedNumber>
            {/* <ProgressBar /> */}
        </Container>
    )
}

export default Nft
