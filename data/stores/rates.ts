// Rates store
// ===========

import { observable, decorate } from 'mobx'
import Constants from 'expo-constants'
import rate from '../models/rate'

const ratesStore = {
  rates: [] as Array<Rate>,

  add(rate: Rate) {
    ratesStore.rates.push(rate)
  },

  async fetch(from: string, to: string): Promise<any> {
    const API_KEY = Constants.manifest.extra.currConvApiKey

    const response = await fetch(
      // eslint-disable-next-line
      `https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=${API_KEY}`,
    )

    if (response.ok) {
      const parsedResponse = await response.json()
      this.add(rate(parsedResponse))
    }
  },
}

decorate(ratesStore, {
  rates: observable,
})

export default ratesStore
