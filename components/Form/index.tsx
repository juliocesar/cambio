// Currency form
// =============

import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import Text from '../Text'
import Textfield from '../Textfield'
import Spacer from '../Spacer'
import Select from '../Select'
import { useObserver } from 'mobx-react'
import { observable } from 'mobx'

interface Props {
  onSetExchange: (from: string, to: string, amount: number) => any
}

const Wrapper = styled.View`
  flex-flow: column;
  align-items: center;
`

const Row = styled.View`
  flex-flow: row;
  align-items: center;
`

const Form = ({ onSetExchange }: Props) => {
  const store = observable.map({
    from: null,
    to: null,
    amount: null,
  })

  const update = (field: string) => {
    return (value: string) => {
      store.set(field, value)
    }
  }

  return useObserver(() => (
    <Wrapper>
      <Text>You’re tracking</Text>
      <Spacer units={2} />
      <Row>
        <Select
          items={[
            { label: 'Australian Dollar', value: 'AUD' },
            { label: 'American Dollar', value: 'USD' },
            { label: 'Brazilian Real', value: 'BRL' },
          ]}
          onValueChange={update('from')}
        />
        <Spacer horizontal units={1} />
        <Textfield
          placeholder="amount"
          onChange={update('amount')}
          type="numeric"
        />
      </Row>
      <Spacer units={2} />
      <Row>
        <Text>to</Text>
        <Spacer horizontal units={1} />
        <Select
          items={[
            { label: 'Australian Dollar', value: 'AUD' },
            { label: 'American Dollar', value: 'USD' },
            { label: 'Brazilian Real', value: 'BRL' },
          ]}
          onValueChange={update('to')}
        />
      </Row>
      <TouchableOpacity
        onPress={() =>
          onSetExchange(store.get('from'), store.get('to'), store.get('amount'))
        }>
        <View style={style.button}></View>
      </TouchableOpacity>
    </Wrapper>
  ))
}

const style = StyleSheet.create({
  button: {
    backgroundColor: 'yellow',
    height: 20,
    width: 100,
  },
})

export default Form
