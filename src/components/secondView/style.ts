import styled from 'styled-components'

export const PageContainer = styled.div`
    display: grid;
    grid-template-columns: 6fr 4fr;
    height: 100vh;
    justify-content: space-between;
    align-items: flex-end;
    overflow-y: hidden;
    align-items: flex-start;
    overflow-y: hidden;
    justify-content: space-evenly;
`

export const Container = styled.div`
    margin: 7vh;
`

export const LeadboardContainer = styled.div`
    border-radius: 3rem;
    border: 1.4rem solid #fff;
    background-color: #d6e2e2;
    box-shadow: 0 0 2rem rgb(0 0 0 / 80%);
    padding: 30px;
    text-align: center;
    height: 86vh;

    h1 {
        text-align: center;
        font-weight: 400;
        font-size: 32px;
    }

    & > p {
        font-size: 1.4rem;
        margin: 1.5rem;
        border: 1px solid #373737;
        display: inline-block;
        padding: 1rem;
        border-radius: 10px;
    }
`

export const BiggestDonorContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #069be2;
    border-radius: 15px;
    align-items: center;
    width: 80%;
    margin: auto;
    padding: 5px 0px;

    span {
        overflow: visible !important;
    }
`
export const SmallImageContainer = styled.div`
    transform: translateX(-25px);
    border-radius: 50%;
    background-color: #d6e2e2;
    border: 3px solid ${props => props.theme.colors.primary};
    overflow: none;
    padding: .5rem;
`

export const OtherDonors = styled.div`
    overflow-y: scroll;
    height: 50%;

    & > p {
        font-size: 14px;
        margin: 15px;
        border: 1px solid #373737;
        display: inline-block;
        padding: 5px;
        border-radius: 10px;
    }

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: #f4f4f4;
        border-radius: 20px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #069be2;
        border-radius: 20px;
    }
`

export const Donor = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #f4f4f4;
    border-radius: 15px;
    align-items: center;
    width: 80%;
    margin: auto;
    margin-bottom: 15px;
    padding: 1rem 0;

    span {
        overflow: visible !important;
    }
`

export const BiggestDonorInfos = styled.div`
    border-radius: 20px;
    align-items: center;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    grid-gap: 0.5rem;
    color: ${props => props.theme.colors.white};

    h1 {
        font-weight: bold;
        font-size: 1.6rem;
    }

    p {
        font-weight: 300;
        font-size: 1.2rem;
    }
`

export const DonorsInfos = styled.div`
    border-radius: 20px;
    color: ${props => props.theme.colors.greyDark1};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    grid-gap: 0.5rem;

    h1 {
        font-size: 1.6rem;
        font-weight: 600;
    }

    p {
        font-size: 12px;
    }

    img {
        left: -50%;
        overflow: visible;
    }
`

export const ImageContainer = styled.div`
    position: relative;
    bottom: -20%;
    left: -2%;
    transform: scale(1.4);
`
