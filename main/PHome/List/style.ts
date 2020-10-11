import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  root: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  notification: {
    flexGrow: 1,
    marginTop: 20,
    alignItems: 'center'
  },
  notificationText: {
    fontWeight: '700',
    fontSize: 30
  },
  paginationBlock: {
    backgroundColor: '#2489D1',
    flexGrow: 1,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: '700'
  }
})

export default style