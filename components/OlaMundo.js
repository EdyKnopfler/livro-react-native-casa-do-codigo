import React from 'react';
import { Text, View } from 'react-native';

import Estilos from '../styles/Styles.js';
import { StyleSheet } from 'react-native';

class OlaMundo extends React.Component {
  render () {
    return (
      <View>
      <Text style={estilos.text}>Olá</Text>
      <Text style={Estilos.text}>{this.props.nome}!</Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  text: {
    color: 'blue',
  }
})

export default OlaMundo;
