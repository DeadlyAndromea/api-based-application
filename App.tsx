import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Layout from './main/Layout'
import Reducer from './redux/Reducer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

export default function App() {

  const store = createStore(Reducer)

  return (
    <Provider store={store}>
      <Layout/>
    </Provider>
  )
}