import React, { useCallback, useMemo, useEffect } from 'react'
import { useMetamask } from '@/context/metamask'
import { Container } from './style'
import Countdown from 'react-countdown'
interface Props {}

const TimeLeft: React.FC<Props> = props => {
    const { campaignExpirationDate, setCampaignExpirationDate } = useMetamask()

    useEffect(() => {
        const interval = setInterval(() => {}, 1000)

        return () => clearInterval(interval)
    }, [campaignExpirationDate])

    // Renderer callback with condition
    const renderer = ({ hours, minutes, seconds, completed }) => {
        // Render a countdown
        return (
            <span>
                {hours}:{minutes}:{seconds}
            </span>
        )
    }

    // const formatedExpiration = useMemo(() => {
    //     const now = new Date()
    //     const expiration = new Date(campaignExpirationDate * 1000)

    //     var difference = expiration.getTime() - now.getTime()

    //     var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24)
    //     difference -= daysDifference * 1000 * 60 * 60 * 24

    //     var hoursDifference = Math.floor(difference / 1000 / 60 / 60)
    //     difference -= hoursDifference * 1000 * 60 * 60

    //     var minutesDifference = Math.floor(difference / 1000 / 60)
    //     difference -= minutesDifference * 1000 * 60

    //     var secondsDifference = Math.floor(difference / 1000)

    //     return `${hoursDifference}:${minutesDifference}:${secondsDifference}`
    // }, [campaignExpirationDate])

    return (
        <Container>
            <p>Time left</p>
            <Countdown
                renderer={renderer}
                date={
                    Date.now() +
                    (campaignExpirationDate -
                        Math.floor(new Date().getTime() / 1000)) *
                        1000
                }
            />
        </Container>
    )
}

export default TimeLeft
