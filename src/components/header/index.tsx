import React from 'react'

import TitleBlue from '../../assets/images/blue/title.png'
import Button from '@/components/button'
import { Container, ImageContainer } from './style'
import Image from 'next/image'

interface Props {}

const Header: React.FC<Props> = props => {
    return (
        <Container>
            <ImageContainer>
                <Image
                    layout="fixed"
                    width={526}
                    height={86}
                    src={TitleBlue}
                    alt="Water change lifes"
                />
            </ImageContainer>

            <p>
                O Nordeste brasileiro é foco de discussões acerca de
                disponibilidade hídrica, uma vez que 26,7% da população
                nordestina não têm acesso à água tratada. A cerca disso, a Ong
                Sustainable Development & Water for All (SDW) causa um grande
                impacto social levando saneamento básico a quem não tem acesso.
            </p>
            <Button>Faça uma doação</Button>
        </Container>
    )
}

export default Header
