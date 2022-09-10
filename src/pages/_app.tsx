import React, { useEffect, useState } from 'react'

import GlobalStyle from '../styles/global'
import { lightTheme } from '../styles/theme'

import { ThemeProvider } from 'styled-components'
import withContexts from 'src/HOC/withContexts'

import NonSsrWrapper from '@/components/nonSsrWrapper'
import SetupStyles from '@/components/setupStyles'

const MyApp = ({ Component, pageProps }) => {
    const [primaryColor, setPrimaryColor] = useState(null)
    const [theme, setTheme] = useState(lightTheme)

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
        <NonSsrWrapper>
            <ThemeProvider theme={theme}>
                <SetupStyles setPrimaryColor={setPrimaryColor}>
                    <Component {...pageProps} />
                    <GlobalStyle />
                </SetupStyles>
            </ThemeProvider>
        </NonSsrWrapper>
    )
}

export default withContexts(MyApp)
