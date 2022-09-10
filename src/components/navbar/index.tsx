import React from 'react'

import LogoBlue from '../../assets/images/blue/logo.png'
import { Container, LogoContainer } from './style'
import Image from 'next/image'

interface Props {}

const navbar: React.FC<Props> = props => {
    return (
        <Container>
            <LogoContainer>
                <Image src={LogoBlue} />
            </LogoContainer>
        </Container>
    )
}

export default navbar
