// Pull to fetch
// =============

import React from 'react'
import styled from 'styled-components/native'
import color from '../../lib/color'
import dirg from '../../lib/dirg'

const Wrapper = styled.View`
  align-items: center;
`

const Button = styled.Text`
  font-family: light;
  font-size: ${dirg.units(2)};
  color: ${color('positives1')};
`

const PullToFetch = () => (
  <Wrapper>
    <Button>^</Button>
  </Wrapper>
)

export default PullToFetch
