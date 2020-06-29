// Base styles for all fields
// ==========================

import dirg from '../../lib/dirg'
import color from '../../lib/color'
import { css } from 'styled-components/native'

const style = css`
  height: ${dirg.units(3)};
  padding-left: ${dirg.units(1)};
  padding-right: ${dirg.units(1)};
  background-color: ${color('neutrals2')};
`

export { style }
