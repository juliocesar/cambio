// Textfield component
// ===================

import React from 'react'
import { TextInput } from 'react-native'
import styled from 'styled-components'
import dirg from '../../lib/dirg'
import color from '../../lib/color'
import { style as sizes } from '../Text/sizes'
import { style as weights } from '../Text/weights'

interface Props {
  value?: string
  placeholder?: string
}

const Wrapper = styled(TextInput)`
  height: ${dirg.units(3)};
  padding-left: ${dirg.units(1)};
  padding-right: ${dirg.units(1)};
  background-color: ${color('neutrals2')};

  ${sizes.TextSizeRegular};
  line-height: ${dirg.units(1.5)};
  ${weights.light};
`

const Textfield = ({ value, placeholder }: Props) => (
  <Wrapper value={value} placeholder={placeholder} />
)

export default Textfield
