// Select component
// ================
//
// Isolating limitations in styling RNPickerSelect to a single module.

import React from 'react'
import RNPickerSelect from 'react-native-picker-select'
import dirg from '../../lib/dirg'
import color from '../../lib/color'

interface Props {
  onValueChange: (value: string) => void
  items: Array<any>
}

const style = {
  inputIOS: {
    maxWidth: parseInt(dirg.units(12) as string, 10),
    backgroundColor: color('neutrals2'),
    color: color('neutrals1'),
    fontFamily: 'light',
    height: parseInt(dirg.units(3) as string, 10),
    paddingLeft: parseInt(dirg.units(1) as string, 10),
    paddingRight: parseInt(dirg.units(1) as string, 10),
  },
}

const Select = ({ onValueChange, items }: Props) => (
  <RNPickerSelect style={style} items={items} onValueChange={onValueChange} />
)

export default Select
