// Dirg JS
// =======

import { scale } from './theme'

const dirg = {
  unitless: false,

  numberFromValue(value: any): number {
    return parseFloat(value)
  },

  sizingUnitFromValue(value: any): string {
    return value.match(/([a-z]+$)/)[0] || ''
  },

  fontScale(x: number): string | number {
    const number = this.numberFromValue(scale.fontSize)
    const sizingUnit = this.sizingUnitFromValue(scale.fontSize)
    const value = Math.ceil(number * Math.pow(scale.factor, x))

    return this.unitless ? value : value + sizingUnit
  },

  units(x: number): string | number {
    const number = this.numberFromValue(scale.gridUnit)
    const sizingUnit = this.sizingUnitFromValue(scale.gridUnit)
    const value = Math.ceil(number * x)

    return this.unitless ? value : value + sizingUnit
  },

  columns(x: number): string | number {
    return this.units(4 * x)
  },

  fontSize(x: number): any {
    let lineHeight = this.numberFromValue(scale.gridUnit)
    const lineHeightUnit = this.sizingUnitFromValue(scale.gridUnit)
    const fontSize = this.fontScale(x)
    const fontSizeNumber = this.numberFromValue(fontSize)

    while (lineHeight < fontSizeNumber) {
      lineHeight += this.numberFromValue(scale.gridUnit)
    }

    return { fontSize: fontSize, gridUnit: lineHeight + lineHeightUnit }
  },

  fontSizeCss(x: number): string {
    const output = this.fontSize(x)

    return [
      'font-size: ' + output.fontSize,
      'line-height: ' + output.gridUnit,
    ].join(';')
  },
}

export default dirg
