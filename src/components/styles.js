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

export {main};

const todo_input = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  container: {
    backgroundColor: '#a7b6bd',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
});

export {todo_input};
