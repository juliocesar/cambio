// Currency form
// =============

import React from 'react'
import styled from 'styled-components/native'
import Text from '../Text'
import Textfield from '../Textfield'
import Spacer from '../Spacer'

const Wrapper = styled.View`
  flex-flow: column;
  align-items: center;
`

const Row = styled.View`
  flex-flow: row;
  align-items: center;
`

const Form = () => (
  <Wrapper>
    <Text>You’re tracking</Text>
    <Spacer units={2} />
    <Row>
      <Textfield placeholder="currency" />
      <Spacer horizontal units={1} />
      <Textfield placeholder="amount" />
    </Row>
    <Spacer units={2} />
    <Row>
      <Text>to</Text>
      <Spacer horizontal units={1} />
      <Textfield placeholder="currency" />
    </Row>
  </Wrapper>
)

export default Form
