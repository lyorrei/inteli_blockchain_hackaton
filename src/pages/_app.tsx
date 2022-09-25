import React, { useEffect, useState } from 'react'

import GlobalStyle from '../styles/global'
import { lightTheme } from '../styles/theme'

import { ThemeProvider } from 'styled-components'
import withContexts from 'src/HOC/withContexts'

import { useMetamask } from '@/context/metamask'

const MyApp = ({ Component, pageProps }) => {
    const [loading, setLoading] = useState(true)
    const [theme, setTheme] = useState(lightTheme)
    const { primaryColor } = useMetamask()

    useEffect(() => {
        setTheme({
            ...theme,
            colors: {
                ...theme.colors,
                primary: primaryColor
            }
        })
    }, [primaryColor])

    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            <GlobalStyle />
        </ThemeProvider>
    )
}

export default withContexts(MyApp)
