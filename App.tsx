// Main app screen
// ===============

import React from 'react'
import PullToFetch from './components/PullToFetch'
import { Text, SafeAreaView } from 'react-native'
import { useFonts } from '@use-expo/font'
import { fonts } from './lib/theme'
import Form from './components/Form'

export default function App() {
  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return <Text>Loading…</Text>
  } else {
    return (
      <SafeAreaView>
        <PullToFetch />
        <Form />
      </SafeAreaView>
    )
  }
}
