import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 2rem;
    font-size: 1.6rem;
    /* background-color: ${props => props.theme.colors.greyLight4}; */
    border-radius: 2rem;
    text-align: center;

    p {
        color: ${props => props.theme.colors.primary};
        font-weight: 600;
    }
`
