import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import withContexts from 'src/HOC/withContexts'
import { campaignFactory } from 'src/ethereum/campaignFactory'
import { ethers } from 'ethers'
import { campaign } from 'src/ethereum/campaign'

const getProvider = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    return provider
}
export const getCampaignColor = async () => {
    const campaignFactoryContract = await campaignFactory()
    const addrs = await campaignFactoryContract.activeCampaign()
    const campaignContract = await campaign(addrs)
    const color = await campaignContract.color()
    return color
}

export const getCampaignName = async () => {
    const campaignFactoryContract = await campaignFactory()
    const addrs = await campaignFactoryContract.activeCampaign()
    const campaignContract = await campaign(addrs)
    const name = await campaignContract.campaignName()
    return name
}

export const sendDonation = async (ETHammount, name, number) => {
    try {
        const campaignFactoryContract = await campaignFactory()
        const addrs = await campaignFactoryContract.activeCampaign()
        const campaignContract = await campaign(addrs)
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts'
        })
        await campaignContract.addDonation(name, number, accounts[0], {
            value: ethers.utils.parseEther(ETHammount)
        })
    } catch (err) {
        console.log(err)
    }
}

export const getDonationsBalance = async () => {
    const campaignFactoryContract = await campaignFactory()
    const addrs = await campaignFactoryContract.activeCampaign()
    // const campaignContract = await campaign(addrs)
    // const donationsBalance = await campaignContract.getBalance()
    const provider = await getProvider()
    const balance = await provider.getBalance(addrs)
    const finalBalance = ethers.utils.formatEther(balance)
    // const finalBalance = balance.toNumber()
    return finalBalance
}

export const getDonors = async () => {
    const campaignFactoryContract = await campaignFactory()
    const addrs = await campaignFactoryContract.activeCampaign()
    const campaignContract = await campaign(addrs)
    const donors = await campaignContract.getDonors()
    return donors
}

export const getExpirationDate = async () => {
    const campaignFactoryContract = await campaignFactory()
    const addrs = await campaignFactoryContract.activeCampaign()
    const campaignContract = await campaign(addrs)
    const unixExpirationDate = await campaignContract.expirationDate()
    const date = new Date(unixExpirationDate * 1000)
    const finalDate = `${date.toLocaleDateString(
        'en-GB'
    )} ${date.toLocaleTimeString('it-IT')}`
    return finalDate
}

export const getBiggestDonor = async () => {
    const campaignFactoryContract = await campaignFactory()
    const addrs = await campaignFactoryContract.activeCampaign()
    const campaignContract = await campaign(addrs)
    const biggestDonor = await campaignContract.biggestDonation()
    return biggestDonor
}

export const getnftLink = async () => {
    const campaignFactoryContract = await campaignFactory()
    const addrs = await campaignFactoryContract.activeCampaign()
    const campaignContract = await campaign(addrs)
    const nftLink = await campaignContract.uri(1)

    if (nftLink != "") {
        const formatedIpfsLink = 'https://ipfs.io/ipfs/' + nftLink.slice(7)
        const response = await fetch(formatedIpfsLink)
        const metadata = await response.json()
        const formatedImageLink = 'https://ipfs.io/ipfs/' + metadata.image.slice(7)
        return formatedImageLink
    }

    return null

}

export const getCampaignDescription = async () => {
    const campaignFactoryContract = await campaignFactory()
    const addrs = await campaignFactoryContract.activeCampaign()
    const campaignContract = await campaign(addrs)
    const description = await campaignContract.description()
    return description
}

export const endCampaign = async () => {
    try {
        const campaignFactoryContract = await campaignFactory()
        const addrs = await campaignFactoryContract.activeCampaign()
        const campaignContract = await campaign(addrs)
        await campaignContract.endCampaign()
    } catch (err) {
        console.log(err)
    }
}
