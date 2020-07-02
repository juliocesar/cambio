// Rates store
// ===========

import { observable, decorate } from 'mobx'

const ratesStore = {
  rates: [] as Array<Rate>,

  add(rate: Rate) {
    ratesStore.rates.push(rate)
  },
}

decorate(ratesStore, {
  rates: observable,
})

export default ratesStore
