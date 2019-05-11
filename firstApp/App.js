/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';

const testButton = () => Alert.alert('Título do alert', 'Mensagem do alert');

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }

  contar() {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  zerar() {
    this.setState({ count: 0 });
  }

  render() {
    const { count } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>FirstApp</Text>
        <TouchableOpacity style={styles.btn} onPress={() => testButton()}>
          <Text style={styles.textButton}>Botão teste</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => this.contar()}>
          <Text style={styles.textButton}>Contar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => this.zerar()}>
          <Text style={styles.textButton}>Zerar</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{count}</Text>
      </View>
    );
  }
}
