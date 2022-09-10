import React from 'react'

import LogoBlue from '../../assets/images/blue/logo.png'
import { Container, LogoContainer, NavItem } from './style'
import Image from 'next/image'
import Link from 'next/link'

interface Props {}

const navbar: React.FC<Props> = props => {
    return (
        <Container>
            <LogoContainer>
                <Image src={LogoBlue} />
            </LogoContainer>

            <NavItem>
                <Link href="/about">About</Link>
            </NavItem>
            <NavItem>
                <Link href="/contact">Contact</Link>
            </NavItem>
        </Container>
    )
}

export default navbar
