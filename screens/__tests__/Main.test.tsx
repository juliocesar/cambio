// Main screen test
// ================

import React from 'react'
import { render } from 'react-native-testing-library'
import Main from '../Main'
import ratesStore from '../../data/stores/rates'

jest.mock('react-native/Libraries/LogBox/LogBox')

describe('The Main screen', () => {
  test('renders without error', async () => {
    render(<Main store={ratesStore} />)
  })
})
