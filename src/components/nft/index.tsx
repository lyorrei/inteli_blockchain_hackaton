import { useMetamask } from '@/context/metamask'
import Image from 'next/image'
import React, { useEffect } from 'react'

import NftImage from '../../assets/images/blue/nft.png'
import ProgressBar from '../progressBar'
import { Container, ImageContainer, MoneyDonatedNumber } from './style'
import AnimatedNumber from 'animated-number-react'
import { getDonationsBalance } from 'src/ethereum/interactions/functions'

interface Props {}

const Nft: React.FC<Props> = props => {
    const { donationBalance, setDonationBalance } = useMetamask()

    useEffect(() => {
        const interval = setInterval(() => {
            getDonationsBalance().then(balance => {
                setDonationBalance(balance)
            })
        }, 5000)

        return () => clearInterval(interval)
    }, [])

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

            <MoneyDonatedNumber>
                <AnimatedNumber
                    value={donationBalance}
                    formatValue={value => value.toFixed(5)}
                />{' '}
                ETH
            </MoneyDonatedNumber>
            {/* <ProgressBar /> */}
        </Container>
    )
}

export default Nft
