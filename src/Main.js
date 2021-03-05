import React, {useState} from 'react';
import {View, Text, FlatList, KeyboardAvoidingView} from 'react-native';

import {main, todo_card} from './styles';
import {TodoInput, TodoCard} from './components';

const Main = () => {
  const [list, setList] = useState([]);
  function addTodo(text) {
    const element = {
      id: list.length,
      todo: text,
      isDone: false,
    };
    text = '';

    const newArray = [...list, element];
    // newArray.push(element);
    setList(newArray);
    console.log(newArray);
  }

  function delTodo(weId) {
    const newArray = [...list];
    console.log(newArray);
    console.log('TODO ID' + weId);
    const todoIndex = newArray.findIndex((we) => we.id == weId);
    newArray.splice(todoIndex, 1);
    setList(newArray);
  }

  function doneTodo(todoId) {
    const newArray = [...list];
    const todoIndex = newArray.findIndex((item) => item.id === todoId);
    newArray[todoIndex].isDone = !newArray[todoIndex].isDone;

    setList(newArray);
  }
  const renderTodo = ({item}) => (
    <TodoCard
      data={item}
      onDone={() => doneTodo(item.id)}
      onDel={() => delTodo(item.id)}
    />
  );
  return (
    <KeyboardAvoidingView style={main.container}>
      <View style={main.banner}>
        <Text style={main.todoText}>TODO</Text>
        <Text style={main.todoCount}>
          {list.filter((t) => t.isDone === false).length}
        </Text>
      </View>

      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={list}
        renderItem={renderTodo}
        ListEmptyComponent={() => (
          <Text style={{color: 'white', fontSize: 30, alignSelf: 'center'}}>
            Nothing to do..
          </Text>
        )}
      />

      <TodoInput onTodoEnter={(todoText) => addTodo(todoText)} />
    </KeyboardAvoidingView>
  );
};

export default Main;
