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
import smallNft from '../../assets/images/smallNft.png'
import { getBiggestDonor } from '../../ethereum/interactions/functions'

interface Props {}

const SecondView: React.FC<Props> = props => {
    const [BiggestDonor, setBiggestDonor] = useState(null)

    useEffect(() => {
        getBiggestDonor()
    }, [])

    return (
        <PageContainer>
            <ImageContainer>
                <Image src={earthGIF} layout="fixed" quality={100} />
            </ImageContainer>
            <Container>
                <LeadboardContainer>
                    <h1>Leadboard</h1>
                    <p>Biggest donor</p>
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
                            <h1>Bianca Cassemiro Lima</h1>
                            <div>
                                <p>For the Lorax</p>
                                <span>10 ETH</span>
                            </div>
                        </BiggestDonorInfos>
                    </BiggestDonorContainer>
                    <p>Others donors</p>
                    <OtherDonors>
                        <Donor>
                            <SmallImageContainer>
                                <Image
                                    src={smallNft}
                                    layout="fixed"
                                    quality={100}
                                    width={62}
                                    height={62}
                                />
                            </SmallImageContainer>
                            <DonorsInfos>
                                <h1>Luiz Alencar</h1>
                                <div>
                                    <p>For Simba</p>
                                    <span>0.1 ETH</span>
                                </div>
                            </DonorsInfos>
                        </Donor>
                        <Donor>
                            <SmallImageContainer>
                                <Image
                                    src={smallNft}
                                    layout="fixed"
                                    quality={100}
                                    width={62}
                                    height={62}
                                />
                            </SmallImageContainer>
                            <DonorsInfos>
                                <h1>Lyorrei Shono</h1>
                                <div>
                                    <p>Extinguish the fire</p>
                                    <span>10 ETH</span>
                                </div>
                            </DonorsInfos>
                        </Donor>
                        <Donor>
                            <SmallImageContainer>
                                <Image
                                    src={smallNft}
                                    layout="fixed"
                                    quality={100}
                                    width={62}
                                    height={62}
                                />
                            </SmallImageContainer>
                            <DonorsInfos>
                                <h1>Henrique Lemos</h1>
                                <div>
                                    <p>Thank you my friend</p>
                                    <span>10 ETH</span>
                                </div>
                            </DonorsInfos>
                        </Donor>
                        <Donor>
                            <SmallImageContainer>
                                <Image
                                    src={smallNft}
                                    layout="fixed"
                                    quality={100}
                                    width={62}
                                    height={62}
                                />
                            </SmallImageContainer>
                            <DonorsInfos>
                                <h1>Bianca Cassemiro Lima</h1>
                                <div>
                                    <p>For the Lorax</p>
                                    <span>10 ETH</span>
                                </div>
                            </DonorsInfos>
                        </Donor>
                    </OtherDonors>
                </LeadboardContainer>
            </Container>
        </PageContainer>
    )
}

export default SecondView
