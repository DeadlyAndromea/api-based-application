import React from 'react'
import { connect } from 'react-redux'
import { addSearch } from '../../../redux/Actions'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import styles from './style'

const TopBar = ({ addSearch }) => {

  const onChange = (text: string) => {
    const formatedText = text.trim().toLocaleLowerCase()
    addSearch(formatedText)
  }

  return (
    <View style={styles.root}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Pokedex</Text>
        <TextInput style={styles.input} placeholder='Enter name' onChangeText={text => onChange(text)}/>
      </View>
    </View>
  )
}

const mapDispatchToProps = {
  addSearch
}

export default connect(null, mapDispatchToProps)(TopBar)