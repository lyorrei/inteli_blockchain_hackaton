import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 4rem;
    text-align: center;
    justify-content: center;

    h1 {
        font-size: 4.5rem;
        background-image: linear-gradient(
            to right,
            ${props => props.theme.colors.primary},
            ${props => props.theme.colors.greyDark1}
        );
        -webkit-background-clip: text;
        color: transparent;
        font-weight: 500;
        transition: all 0.2s;

        &:hover {
            transform: scale(1.05);
        }
    }

    p {
        font-size: 2rem;
    }
`

export const ImageContainer = styled.div`
    margin: 0 auto;
    margin-bottom: -1rem;
`
