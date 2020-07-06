// Main app screen
// ===============

import React from 'react'
import { Text, SafeAreaView, FlatList } from 'react-native'
import Form from '../../components/Form'
import PullToFetch from '../../components/PullToFetch'
import { useObserver } from 'mobx-react-lite'

interface Props {
  store: any
}

const Main = ({ store }) => {
  const handleSetExchange = (from: string, to: string) => {
    store.fetch(from, to)
  }

  return useObserver(() => (
    <SafeAreaView>
      <PullToFetch />
      <Form onSetExchange={handleSetExchange} />
      <FlatList
        data={store.rates}
        extraData={store.rates.length}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text>{item.from}</Text>}
      />
    </SafeAreaView>
  ))
}

export default Main
