// Main app screen
// ===============

import React from 'react'
import { SafeAreaView } from 'react-native'
import Form from '../../components/Form'
import PullToFetch from '../../components/PullToFetch'

const Main = () => (
  <SafeAreaView>
    <PullToFetch />
    <Form />
  </SafeAreaView>
)

export default Main
