import styled from 'styled-components'

interface PageContainerProps {
    image?: string
}

export const PageContainer = styled.div<PageContainerProps>`
    /* background: url(${props => props.image}); */
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
`

export const Container = styled.div`
    padding: 6rem 0;


`
