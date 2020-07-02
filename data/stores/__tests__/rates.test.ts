// Rates store tests
// =================

import ratesStore from '../rates'
import rate from '../../models/rate'

function mockAPIResponse(from: string, to: string) {
  return { [`${from}_${to}`]: parseFloat(Math.random().toFixed(6)) }
}

describe('the rates store', () => {
  test('adds a rate to the store with add()', () => {
    const totalRates = ratesStore.rates.length
    ratesStore.add(rate(mockAPIResponse('BRL', 'AUD')))

    expect(ratesStore.rates.length).toBe(totalRates + 1)
  })
})
