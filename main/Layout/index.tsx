import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import TopBar from './TopBar'
import Main from './Main'

export default function Layout() {
  return (
    <ScrollView style={style.root}>
      <TopBar/>
      <Main/>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  root: {
    flex: 1
  }
})