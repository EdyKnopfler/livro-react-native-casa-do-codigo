import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default (props) =>
  <View style={styles.container}>
    <Text style={styles.text}>O número é {props.numero % 2 == 0 ? 'par' : 'ímpar'}!</Text>
  </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
