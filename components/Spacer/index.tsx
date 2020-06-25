// Spacer component
// ================
//
// Creates either vertical or horizontal space

import styled from 'styled-components/native'
import dirg from '../../lib/dirg'

interface Props {
  horizontal?: boolean
  units: number
}

const Spacer = styled.View<Props>`
  ${props =>
    props.horizontal ? `width: ${dirg.units(props.units || 0)};` : ''}
  ${props =>
    !props.horizontal ? `height: ${dirg.units(props.units || 0)};` : ''}
`

export default Spacer
