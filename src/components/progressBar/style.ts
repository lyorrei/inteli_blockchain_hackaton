import styled from 'styled-components';

export const Container = styled.div`
    position: relative;

    span {
        margin-top: 2rem;
        display: block;
        border-radius: 3px;
        width: 100%;

        position: relative;

        height: 3px;
        background-color:  #0070A6;

        &:before {
            content: "";
            position: absolute;
            top:0;
            left: 0;
            width: 30px;
            height: 30px;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            background-color: #0070A6;
        }

        &:after {
            content: "";
            position: absolute;
            top:0;
            right: 0;
            width: 30px;
            height: 30px;
            transform: translate(50%, -50%);
            border-radius: 50%;
            background-color: #0070A6;
        }
    }
`;
