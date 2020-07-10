// Latest rate
// ===========

import React from 'react'
import styled from 'styled-components/native'
import Text from '../Text'

interface Props {
  currency: string
  amount: number
  variation?: number
}

const Wrapper = styled.View`
  align-items: center;
`

const LatestRate = ({ currency, amount, variation }: Props) => (
  <Wrapper>
    <Text weight="bold">
      = {currency} {amount}
    </Text>
    {variation && <Text>variation</Text>}
  </Wrapper>
)

export default LatestRate
