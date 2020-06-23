// Main app screen
// ===============

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFonts } from '@use-expo/font'
import dirg from './lib/dirg'
import { fonts } from './lib/theme'

dirg.unitless = true

export default function App() {
  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return <Text>Loading…</Text>
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.Text}>
          Open up App.tsx to start working on your app!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontFamily: 'Overpass-Light',
  },
  test: {
    backgroundColor: 'yellow',
    height: dirg.units(4),
    width: dirg.units(4),
  },
})
