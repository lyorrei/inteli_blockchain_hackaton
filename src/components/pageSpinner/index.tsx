import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import { Container } from './style'

interface Props {}

const PageSpinner: React.FC<Props> = props => {
    return (
        <Container>
            <ClipLoader size={150} />
        </Container>
    )
}

export default PageSpinner
