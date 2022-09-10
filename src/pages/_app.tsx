import React from 'react'
import { AppProps } from 'next/app'

import GlobalStyle from '../styles/global'
import { lightTheme} from '../styles/theme'

import { ThemeProvider } from 'styled-components'
import withContexts from 'src/HOC/withContexts'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {

    return (
            <ThemeProvider theme={lightTheme}>
                <Component {...pageProps} />
                <GlobalStyle />
            </ThemeProvider>
    )
}

export default withContexts(MyApp)
