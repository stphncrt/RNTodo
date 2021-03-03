import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.todoText}>TODO</Text>
        <Text style={styles.todoCount}>10</Text>
      </View>
    </View>
  );
};

export default Main;
