import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { addResults } from '../../../redux/Actions'
import axios from 'axios'
import Item from './Item'
import style from './style'

const TITLES = ['Prew', 'Next']

const List = ({ data, value, addResults }) => {

  const [offset, setOffset] = useState(0)
  const [searchMode, setSearchMode] = useState(true)
  const [searchingData, setSearchingData] = useState([])

  useLayoutEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}`)
    .then(res => {
      const data = res.data.results
      addResults(data)
      setSearchingData(data)
    })
  }, [offset])

  useEffect(() => {
    const pokemon: any = data.filter((item: any) => item.name.match(value))
    setSearchingData(pokemon)
  }, [value.length])

  const pagination = (index: number) => {
    switch(index) {
      case 0: {
        if (offset > 0) setOffset(offset - 20)
        break
      }
      case 1: {
        setOffset(offset + 20)
        break
      }
    }
  }

  return (
    <View style={style.root}>
      {searchingData.length ? searchingData.map((el: any, index: number) => {
        return <Item data={el} key={el.name} index={index}/>
      }) : <View style={style.notification}><Text style={style.notificationText}>No Dataname</Text></View>}
      {searchingData. length ? 
        <View style={style.paginationBlock}>
          {TITLES.map((el: any, index: number) => {
            return (
            <TouchableOpacity onPress={() => pagination(index)}>
              <Text style={style.buttonTitle}>{el}</Text>
            </TouchableOpacity>
          )
          })}
        </View> : null}
    </View>
  )
}

const mapStateToProps = (state: any) => {
  return {
    data: state.data,
    value: state.value
  }
}

const mapDispatchToProps = {
  addResults,
}

export default connect(mapStateToProps, mapDispatchToProps)(List)