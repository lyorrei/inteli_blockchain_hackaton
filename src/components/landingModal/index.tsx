import React from 'react'
import Image from 'next/image'
import { ImageContainer } from './style'
import landing from '../../assets/images/landing.png'

interface Props {
    closeModal()
}

const LadingModal: React.FC<Props> = ({ closeModal }) => {
    return (
        <>
            <ImageContainer>
                <Image
                    src={landing}
                    layout="fixed"
                    quality={100}
                />
            </ImageContainer>
        </>
    )
}

export default LadingModal
