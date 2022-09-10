import Image from 'next/image'
import React from 'react'

import NftImage from '../../assets/images/blue/nft.png'
import { Container } from './style'

interface Props {}

const Nft: React.FC<Props> = props => {
    return (
        <Container>
            <Image
                src={NftImage}
                layout="fixed"
                width={251}
                height={408}
                quality={100}
            />
            

        </Container>
    )
}

export default Nft
