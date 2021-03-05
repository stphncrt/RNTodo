import React from 'react';
import {Text, View, TouchableOpacity, Alert} from 'react-native';
import {todo_card} from '../styles';

const TodoCard = (props) => {
  return (
    <TouchableOpacity
      style={todo_card.container}
      onLongPress={() => props.onDel()}
      onPress={() => props.onDone()}>
      <Text
        style={[
          todo_card.text,
          {textDecorationLine: props.data.isDone ? 'line-through' : null},
        ]}>
        {props.data.todo}
      </Text>
    </TouchableOpacity>
  );
};

export {TodoCard};
