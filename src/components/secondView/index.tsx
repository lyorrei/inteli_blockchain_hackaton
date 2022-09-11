import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import {
    PageContainer,
    Container,
    LeadboardContainer,
    ImageContainer,
    BiggestDonorContainer,
    SmallImageContainer,
    OtherDonors,
    Donor,
    BiggestDonorInfos,
    DonorsInfos
} from './style'
import earthImg from '../../assets/images/earthImg.png'
import earthGIF from '../../assets/images/earth.gif'
import smallNft from '../../assets/images/blue/nft.png'
import { ethers } from 'ethers'
import { getBiggestDonor } from '../../ethereum/interactions/functions'
import { getDonors } from '../../ethereum/interactions/functions'

interface Props {}

const SecondView: React.FC<Props> = props => {
    const [biggestDonor, setBiggestDonor] = useState(null)
    const [donors, setDonors] = useState([])

    useEffect(() => {
        const interval = setInterval(() => {
            getDonorsInformation()
        }, 10000)

        return () => clearInterval(interval)
    }, [])

    const getDonorsInformation = async () => {
        const _biggestDonor = await getBiggestDonor()
        const _getAllDonors = await getDonors()

        if (_biggestDonor) {
            setBiggestDonor(_biggestDonor)
        }
        if (_getAllDonors != null) {
            setDonors(_getAllDonors.reverse())
        }
    }

    useEffect(() => {
        getDonorsInformation()
    }, [])

    return (
        <PageContainer>
            <ImageContainer>
                <Image src={earthGIF} layout="fixed" quality={100} />
            </ImageContainer>
            <Container>
                <LeadboardContainer>
                    <h1>Leaderboard</h1>
                    <p>Biggest donor</p>
                    {biggestDonor && (
                        <BiggestDonorContainer>
                            <SmallImageContainer>
                                <Image
                                    src={earthImg}
                                    layout="fixed"
                                    quality={100}
                                    width={62}
                                    height={62}
                                />
                            </SmallImageContainer>
                            <BiggestDonorInfos>
                                <h1>{biggestDonor.name}</h1>

                                <p>{biggestDonor.amount} ETH</p>
                                <span>{biggestDonor.address}</span>
                            </BiggestDonorInfos>
                        </BiggestDonorContainer>
                    )}

                    <p>Latest donors</p>
                    <OtherDonors>
                        {donors.map(donor => (
                            <Donor>
                                <SmallImageContainer>
                                    <Image
                                        src={smallNft}
                                        layout="fixed"
                                        quality={100}
                                        width={30}
                                        height={30}
                                    />
                                </SmallImageContainer>
                                <DonorsInfos>
                                    <h1>{donor.name}</h1>
                                    <p>
                                        {ethers.utils.formatEther(donor.amount)}{' '}
                                        ETH
                                    </p>
                                    <span>{donor.endereco}</span>
                                </DonorsInfos>
                            </Donor>
                        ))}
                    </OtherDonors>
                </LeadboardContainer>
            </Container>
        </PageContainer>
    )
}

export default SecondView
