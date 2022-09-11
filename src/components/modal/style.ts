import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ModalContainer = styled(motion.div)`
    position: fixed;
    top: 50%;
    left: 50%;
    opacity: 1;
    /* transform: translate(-50%, -50%); */
    min-width: 30%;

    box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.2);
    padding: 2rem;
    background-color: ${props => props.theme.colors.white};
    border-radius: 3px;
    z-index: 150;
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h5 {
        font-size: 4rem;
        font-weight: 300;
        color: ${props => props.theme.colors.greyDark1};
        margin-right: 4rem;
    }

    svg {
        width: 2rem;
        height: 2rem;
        fill: ${props => props.theme.colors.greyDark2};
        cursor: pointer;

        &:hover {
            transform: scale(1.1);
        }
    }
`

export const ModalBody = styled.div`
    padding-top: 3rem;
`
