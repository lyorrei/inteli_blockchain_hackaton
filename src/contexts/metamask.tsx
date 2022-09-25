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
    const [loading, setLoading] = useState(true)

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
                setDonationBalance,
                loading,
                setLoading
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
        setDonationBalance,
        loading,
        setLoading
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
        setDonationBalance,
        loading,
        setLoading
    }
}
