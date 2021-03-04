import React, {useState} from 'react';
import {View, Text, Flatlist} from 'react-native';

import {main} from './styles';
import {TodoInput, TodoCard} from './components';

const Main = () => {
  const [list, setList] = useState([]);
  function addTodo(text) {
    const element = {
      id: list.length,
      todo: text,
      isDone: false,
    };

    const newArray = [...list, element];
    // newArray.push(element);
    setList(newArray);
  }
  const renderTodo = ({item}) => <TodoCard data={item} />;
  return (
    <View style={main.container}>
      <View style={main.banner}>
        <Text style={main.todoText}>TODO</Text>
        <Text style={main.todoCount}>{list.length} </Text>
      </View>

      <Flatlist data={list} renderItem={renderTodo} />

      <TodoInput onTodoEnter={(todoText) => addTodo(todoText)} />
    </View>
  );
};

export default Main;
