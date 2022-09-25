import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    button {
        background: none;
        border-radius: ${props => props.theme.sizes.borderRadius};
        padding: 1.8rem 3.4rem;
        font-size: 2.4rem;
        cursor: pointer;

        display: flex ;
        align-items: center;
        grid-gap: 2rem;


       svg {
        width: 4rem;
        height: 4rem;
       }
    }
`
