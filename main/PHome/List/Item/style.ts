import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  root: {
    flexGrow: 1,
    minWidth: 180,
    padding: 10
  },
  header: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
  },
  text: {
    textAlign: 'center',
    color: '#404040'
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5
  },
  avatar: {
    height: 100,
    width: 100
  }
})
export default style