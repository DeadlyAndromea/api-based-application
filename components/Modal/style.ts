import { StyleSheet, Dimensions } from 'react-native'

const style = StyleSheet.create({
  root: {
    width: Dimensions.get('window').width < 410 ? 160 : 186,
    height: 130,
    bottom: 1,
    right: 10,
    opacity: 0.9,
    backgroundColor: '#2489D1',
    position: 'absolute',
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderRadius: 5
  },
  name: {
    marginTop: 5,
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: 20
  },
  wrapper: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  ability: {
    fontWeight: '700'
  },
  type: {
    fontWeight: '700'
  }
})

export default style