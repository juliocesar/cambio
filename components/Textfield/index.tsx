// Textfield component
// ===================

import React from 'react'
import { TextInput } from 'react-native'
import styled from 'styled-components'
import dirg from '../../lib/dirg'
import { style as sizes } from '../Text/sizes'
import { style as weights } from '../Text/weights'
import { style as baseStyle } from '../Field'

interface Props {
  value?: string
  placeholder?: string
  type?: string | undefined
  onChange?: (value: string) => void
}

const Wrapper = styled(TextInput)`
  ${baseStyle};
  ${sizes.TextSizeRegular};
  line-height: ${dirg.units(1.5)};
  ${weights.light};
`

const Textfield = ({ value, placeholder, onChange, type }: Props) => (
  <Wrapper
    value={value}
    placeholder={placeholder}
    onChangeText={onChange}
    keyboardType={type}
  />
)

export default Textfield
