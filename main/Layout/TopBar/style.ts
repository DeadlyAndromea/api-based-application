import { StyleSheet } from 'react-native'
import style from '../../../components/Modal/style'

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#2489D1',
  },
  wrapper: {
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
    flexDirection: 'row'
  },
  title: {
    color: 'white',
    fontWeight: '300',
    fontSize: 50
  },
  input: {
    height: 35,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 2
  }
})

export default styles