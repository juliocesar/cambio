// Color helper
// ============
//
// Issues a colour value for a code. Throws an error if the code is not
// found

import { palette } from './theme'

function color(code: string): string {
  if (!palette[code]) {
    throw new Error(`Color code not found: ${code}`)
  }

  return palette[code]
}

export default color
