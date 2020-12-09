import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import style from './style'

export default function Modal({ trigger, name, data }) {

  const abilities = data.abilities
  const types = data.types

  return (
    <TouchableOpacity style={style.root} onPress={()=> trigger(false)}>
      <Text style={style.name}>{name.charAt(0).toUpperCase() + name.substr(1)}</Text>
      <View style={style.wrapper}>
        <View>
          <Text>Abilities:</Text>
          {abilities && abilities.map(el => {
            return <Text style={style.ability}>{el.ability.name}</Text>
          })}
        </View>
        <View>
          <Text>Types:</Text>
          {types && types.map(el => {
            return <Text style={style.type}>{el.type.name}</Text>
          })}
        </View>
      </View>
    </TouchableOpacity>
  )
}