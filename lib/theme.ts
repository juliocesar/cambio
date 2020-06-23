// Theme settings
// ==============

interface Scale {
  fontSize: string
  gridUnit: string
  factor: number
}

interface Palette {
  [key: string]: string
}

const scale: Scale = {
  fontSize: '13px',
  gridUnit: '16px',
  factor: 1.25,
}

const palette: Palette = {
  neutrals1: '#000000',
  neutrals2: '#DFDFDF',
  negatives1: '#CA3438',
  positives1: '#34C95C',
}

export { scale, palette }
