// Main app screen
// ===============

import React from 'react'
import Main from './screens/Main'
import { Text } from 'react-native'
import { useFonts } from '@use-expo/font'
import { fonts } from './lib/theme'

export default function App() {
  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return <Text>Loading…</Text>
  } else {
    return <Main />
  }
}
