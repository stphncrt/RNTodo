import {StyleSheet} from 'react-native';

const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303e45',
  },
  banner: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  todoText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ff9b31',
  },
  todoCount: {
    fontSize: 25,
    color: '#ff9b31',
  },
});

export default main;
