import React, { createContext, useState, useContext, useEffect } from 'react'

const MetamaskContext = createContext(null)

export default function MetamaskProvider({ children }) {
    const [account, setAccount] = useState(null)
    const [primaryColor, setPrimaryColor] = useState(null)
    const [campaignName, setCampaignName] = useState('')
    const [campaignDescription, setCampaignDescription] = useState('')
    const [nftLink, setNftLink] = useState('')
    const [campaignExpirationDate, setCampaignExpirationDate] = useState('')
    const [donationBalance, setDonationBalance] = useState('')

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', accountsChanged)
            window.ethereum.on('chainChanged', chainChanged)
            connectHandler()
        }
    }, [])

    const connectHandler = async () => {
        if (window.ethereum) {
            try {
                const res = await window.ethereum.request({
                    method: 'eth_requestAccounts'
                })
                await accountsChanged(res[0])
            } catch (err) {
                console.error(err)
            }
        } else {
            alert('Install MetaMask')
        }
    }

    const accountsChanged = async newAccount => {
        setAccount(newAccount)
    }

    const chainChanged = () => {
        setAccount(null)
    }

    return (
        <MetamaskContext.Provider
            value={{
                account,
                setAccount,
                primaryColor,
                setPrimaryColor,
                campaignName,
                setCampaignName,
                campaignDescription,
                setCampaignDescription,
                nftLink,
                setNftLink,
                campaignExpirationDate,
                setCampaignExpirationDate,
                donationBalance,
                setDonationBalance
            }}
        >
            {children}
        </MetamaskContext.Provider>
    )
}

export function useMetamask() {
    const context = useContext(MetamaskContext)
    if (!context)
        throw new Error('useMetamask must be used within a MetamaskProvider')
    const {
        account,
        setAccount,
        primaryColor,
        setPrimaryColor,
        campaignName,
        setCampaignName,
        campaignDescription,
        setCampaignDescription,
        nftLink,
        setNftLink,
        campaignExpirationDate,
        setCampaignExpirationDate,
        donationBalance,
        setDonationBalance
    } = context
    return {
        account,
        setAccount,
        primaryColor,
        setPrimaryColor,
        campaignName,
        setCampaignName,
        campaignDescription,
        setCampaignDescription,
        nftLink,
        setNftLink,
        campaignExpirationDate,
        setCampaignExpirationDate,
        donationBalance,
        setDonationBalance
    }
}
