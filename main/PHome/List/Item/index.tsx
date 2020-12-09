import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Modal from '../../../../components/Modal'
import { connect } from 'react-redux'
import style from './style'
import axios from 'axios'

const Item = (props: { index: number, data: any }) => {

  const [data, setData] = useState({})
  const [modal, setModal] = useState()

  const { name, url } = props.data

  useEffect(() => {
    axios.get(url)
    .then(data => {
      setData(data.data)
    })
  }, [])
  
  return (
    <View style={style.root}>
      <TouchableOpacity onPress={() => setModal(!modal)}>
        <View style={style.header}>
          <Text style={style.text}>{name.charAt(0).toUpperCase() + name.substr(1)}</Text>
        </View>
        <View style={style.body}>
          <Image style={style.avatar} source={{ uri: data.sprites && data.sprites.front_default }}/>
        </View>
      </TouchableOpacity>
      {modal ? <Modal trigger={(value) => setModal(value)} name={name} data={data}/> : null}
    </View>
  )
}

export default connect (null, null)(Item)