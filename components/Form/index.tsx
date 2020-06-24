// Currency form
// =============

import React from 'react'
import styled from 'styled-components/native'
import Text from '../Text'
import Textfield from '../Textfield'

const Wrapper = styled.View`
  flex-flow: column;
  align-items: center;
`

const Form = () => (
  <Wrapper>
    <Text>You’re tracking</Text>
    <Textfield placeholder="Enter a currency / amount" />
  </Wrapper>
)

export default Form
