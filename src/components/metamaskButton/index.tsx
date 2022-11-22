import React, { useEffect } from 'react'
import { Container } from './style'
import MetamaskLogo from '../../assets/images/metamask_fox.svg'
import { useMetamask } from '@/context/metamask'
import { useRouter } from 'next/router'

interface Props {}

const MetamaskButton: React.FC<Props> = props => {
    const {  setAccount } = useMetamask()
    const router = useRouter()

    const connectToMetamask = async () => {
        if (window.ethereum) {
            try {
                const res = await window.ethereum.request({
                    method: 'eth_requestAccounts'
                })
                await setAccount(res[0])
                const goerliNetwork = '0x5'
                if (window.ethereum.chainId !== goerliNetwork) {
                    await window.ethereum.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: goerliNetwork }]
                    })
                }
                router.replace('/campaign')
            } catch (err) {
                console.error(err)
            }
        } else {
            alert('Install MetaMask')
        }
    }

    return (
        <Container>
            <button onClick={connectToMetamask}>
                <MetamaskLogo /> Connect to Metamask
            </button>
        </Container>
    )
}

export default MetamaskButton
