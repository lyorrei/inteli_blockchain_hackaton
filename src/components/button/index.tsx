import React from 'react'
import { Btn } from './style'

interface Props {}

const Button: React.FC<Props> = (props) => {
    return <Btn>{props.children}</Btn>
}

export default Button
