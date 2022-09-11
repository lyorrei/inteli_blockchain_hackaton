import React, { useState } from 'react'

import TitleBlue from '../../assets/images/blue/title.png'
import { Button } from '@/components/button'
import { Container, ImageContainer } from './style'
import Image from 'next/image'
import Modal from '../modal'
import DonationForm from '../donationForm'
import { useMetamask } from '@/context/metamask'

interface Props {}

const Header: React.FC<Props> = props => {
    const { campaignName, campaignDescription } = useMetamask()
    const [showModal, setShowModal] = useState(false)

    const closeModal = () => {
        setShowModal(false)
    }

    const openModal = () => {
        setShowModal(true)
    }

    return (
        <Container>
            {/* <ImageContainer>
                <Image
                    layout="fixed"
                    width={526}
                    height={86}
                    src={TitleBlue}
                    alt="Water change lifes"
                />
            </ImageContainer> */}

            <h1>{campaignName}</h1>

            <p>{campaignDescription}</p>
            <Button onClick={openModal}>Make a donation</Button>
            <Modal
                show={showModal}
                closeModal={closeModal}
                title="Make a donation"
            >
                <DonationForm closeModal={closeModal} />
            </Modal>
        </Container>
    )
}

export default Header
