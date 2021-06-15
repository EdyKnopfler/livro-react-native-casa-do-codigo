import React, {useReducer} from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

const reducer = (state, action) => {
  switch(action.type) {
    case 'incrementar':
      return {...state, contador: state.contador + action.payload};
    case 'decrementar':
      return {...state, contador: state.contador - action.payload};
    default:
      return state;
  }
}

const ContadorReducer = () => {
  const [state, dispatch] = useReducer(reducer, {contador: 0});
  return (
    <View style={styles.conteudo}>
      <Text>Contagem</Text>
      <Text style={styles.contador}>{state.contador}</Text>
      <Button
        title="Incrementar"
        onPress={() => {
          dispatch({type: 'incrementar', payload: 1});
        }}
      />
      <Button
        title="Decrementar"
        onPress={() => {
          dispatch({type: 'decrementar', payload: 1});
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conteudo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contador: {
    fontSize: 32
  }
});

export default ContadorReducer;
