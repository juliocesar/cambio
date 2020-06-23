// Main app screen
// ===============

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import dirg from './lib/dirg'

dirg.unitless = true

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  test: {
    backgroundColor: 'yellow',
    height: dirg.units(4),
    width: dirg.units(4),
  },
})
