import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import withContexts from 'src/HOC/withContexts'
import { campaignFactory } from 'src/ethereum/campaignFactory'
import { ethers } from 'ethers'
import { campaign } from 'src/ethereum/campaign'
import jwt from 'jsonwebtoken'
// import { getETHPrice } from './getETHprice';

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
        const res = await fetch('/api/donation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, number })
        })
        const { hashedName, hashedNumber } = await res.json()
        await campaignContract.addDonation(
            hashedName,
            hashedNumber,
            accounts[0],
            {
                value: ethers.utils.parseEther(ETHammount)
            }
        )
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
    const finalETHBalance = ethers.utils.formatEther(balance)
    // const ETHPrice = await getETHPrice();
    // const finalUSDBalance = Number(finalETHBalance * ETHPrice).toFixed(2);
    return finalETHBalance
}

export const getDonors = async () => {
    const campaignFactoryContract = await campaignFactory()
    const addrs = await campaignFactoryContract.activeCampaign()
    const campaignContract = await campaign(addrs)
    const donors = await campaignContract.getDonors()
    const donorsArray = []
    for (let i = 0; i < donors.length; i++) {
        const res = await fetch('/api/donors', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ hashedName: donors[i].name })
        })
        const { name } = await res.json()
        const donor = {
            ...donors[i],
            name
        }
        donorsArray.push(donor)
    }

    return donorsArray
}

export const getExpirationDate = async () => {
    const campaignFactoryContract = await campaignFactory()
    const addrs = await campaignFactoryContract.activeCampaign()
    const campaignContract = await campaign(addrs)
    const unixExpirationDate = await campaignContract.expirationDate()
    // const date = new Date(unixExpirationDate * 1000)
    // const finalDate = `${date.toLocaleDateString(
    //     'en-GB'
    // )} ${date.toLocaleTimeString('it-IT')}`
    return unixExpirationDate
}

export const getBiggestDonor = async () => {
    const campaignFactoryContract = await campaignFactory()
    const addrs = await campaignFactoryContract.activeCampaign()
    const campaignContract = await campaign(addrs)
    const biggestDonor = await campaignContract.biggestDonation()

    if (biggestDonor[0]) {
        const res = await fetch('/api/donors', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ hashedName: biggestDonor.name })
        })
        const { name } = await res.json()
        const biggestDonorFinal = {
            name: name,
            address: biggestDonor[1],
            amount: ethers.utils.formatEther(biggestDonor[2])
        }
        return biggestDonorFinal
    }

    return null
}

export const getnftLink = async id => {
    try {
        const campaignFactoryContract = await campaignFactory()
        const addrs = await campaignFactoryContract.activeCampaign()
        const campaignContract = await campaign(addrs)
        const nftLink = await campaignContract.uri(1)
        const formatedLink = nftLink.replace('{id}', id)

        if (nftLink != '') {
            const formatedIpfsLink =
                'https://ipfs.io/ipfs/' + formatedLink.slice(7)
            const response = await fetch(formatedIpfsLink)
            const metadata = await response.json()
            const formatedImageLink =
                'https://ipfs.io/ipfs/' + metadata.image.slice(7)
            return formatedImageLink
        }
    } catch (err) {
        return null
    }
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
