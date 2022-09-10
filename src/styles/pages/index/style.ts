import styled from 'styled-components'

export const PageContainer = styled.div`
    background-color: ${props => props.theme.colors.white};
    position: relative;
    min-height: 100vh;
`

export const Container = styled.div`
    border-radius: 3rem;
    border: 1.4rem solid ${props => props.theme.colors.white};
    background-color: #d6e2e2;
    position: absolute;
    top: 7vh;
    bottom: 7vh;
    left: 7vh;
    right: 7vh;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.8);
`

export const Content = styled.div`
    padding: 4rem 14rem;
    display: grid;
    grid-template-columns: 58% 40%;
    grid-gap: 6rem;
`
