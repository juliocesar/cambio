// Text
// ====
//
// Cambio-specific text component for controlling sizes.

import React from 'react'
import { Text as ReactText } from 'react-native'
import styled from 'styled-components/native'
import { style as sizes } from './sizes'
import { style as weights } from './weights'

interface Props {
  size?: 'small' | 'regular'
  weight?: 'light' | 'bold'
  children?: React.ReactNode
}

const Wrapper = styled(ReactText)`
  ${props => props.size === 'small' && sizes.TextSizeSmall}
  ${props => props.size === 'regular' && sizes.TextSizeRegular}
  ${props => props.weight === 'bold' && weights.bold}
  ${props => props.weight === 'light' && weights.light}
`

const Text = ({ size = 'regular', weight = 'light', children }: Props) => {
  return (
    <Wrapper size={size} weight={weight}>
      {children}
    </Wrapper>
  )
}

export default Text
