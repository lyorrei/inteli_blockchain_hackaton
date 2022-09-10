import React from 'react'
import MetamaskProvider from '../contexts/metamask'

function withContexts(Component) {
    return props => (
        <MetamaskProvider>
            <Component {...props} />
        </MetamaskProvider>
    )
}

export default withContexts
