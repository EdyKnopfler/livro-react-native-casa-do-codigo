import React from 'react';
import { View } from 'react-native';

class DimensoesFixas extends React.Component {
  render() {
    return (
      <View style={{width: '100%', height: '100%', flexDirection: 'column',
                    justifyContent: 'center', alignItems: 'stretch'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

export default DimensoesFixas;
