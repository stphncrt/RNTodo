import {Dimensions, StyleSheet} from 'react-native';

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
  buttonContainer: {
    backgroundColor: '#4a636a',
    padding: 10,
    margin: 10,
    marginHorizontal: 20,
    width: Dimensions.get('window').width * 0.35,
    alignSelf: 'center',
    borderRadius: 10,
  },
  buttonText: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
const todo_card = StyleSheet.create({
  container: {
    backgroundColor: '#a7b6bd',
    padding: 8,
    margin: 5,
    borderRadius: 7,
  },
  text: {
    fontSize: 18,
  },
});
export {todo_input, todo_card};
