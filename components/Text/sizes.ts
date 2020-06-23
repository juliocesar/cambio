// Text sizes
// ==========

import { css } from 'styled-components/native'
import dirg from '../../lib/dirg'

const style = {
  fieldHeightRegular: dirg.units(3),
  TextSizeSmall: css`
    font-size: 12px;
    line-height: ${dirg.units(1)};
  `,
  TextSizeRegular: css`
    font-size: 16px;
    line-height: ${dirg.units(2)};
  `,
}

export { style }
