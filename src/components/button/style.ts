import styled from 'styled-components'

export const Btn = styled.button`
    border: none;
    outline: none;
    color: ${props => props.theme.colors.white};
    padding: 1.7rem 5rem;
    border-radius: 2rem;
    background-color: #069be2;
    box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.4);
    font-size: 1.6rem;
    cursor: pointer;
    transition: all 0.2s;
    margin: 0 auto;

    &:hover {
        transform: translateY(-0.2rem);
    }
`
