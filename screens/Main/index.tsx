// Main app screen
// ===============

import React from 'react'
import { Text, SafeAreaView, FlatList } from 'react-native'
import Form from '../../components/Form'
import PullToFetch from '../../components/PullToFetch'
import LatestRate from '../../components/LatestRate'
import { useObserver } from 'mobx-react-lite'

interface Props {
  store: any
}

const Main = ({ store }) => {
  const handleSetExchange = (from: string, to: string, amount: number) => {
    store.fetch(from, to, amount)
  }

  return useObserver(() => (
    <SafeAreaView>
      <PullToFetch />
      <Form onSetExchange={handleSetExchange} />
      {store.rates.length > 0 && (
        <>
          <LatestRate
            currency={store.rates[0].to}
            amount={store.rates[0].amount * store.rates[0].exchange}
          />
          <FlatList
            data={store.rates.slice(1)}
            extraData={store.rates.length}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Text>
                {item.from}, {item.to}, {item.amount}
              </Text>
            )}
          />
        </>
      )}
    </SafeAreaView>
  ))
}

export default Main
