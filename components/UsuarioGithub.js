import React from 'react';
import { Button, Text, View, TextInput, StyleSheet } from 'react-native';

class UsuarioGithub extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dados: {},
      usuario: 'octocat'
    }
  }

  fetchDados() {
    fetch(`https://api.github.com/users/${this.state.usuario}`)
      .then(response => response.json())
      .then(json => this.setState({dados: json}))
      .catch(err => this.setState({dados: {err}}));
  }

  componentDidMount() {
    this.fetchDados();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(this.state.dados)}</Text>
        <View>
          <TextInput
            onChangeText={(usuario) => {this.setState({usuario})}}
            value={this.state.usuario}
          />
        </View>
        <View>
          <Button
            onPress={() => this.fetchDados()}
            title="Buscar Dados"
            AcessibilityLabel="Busque os dados do usuário no GitHub"
          />
        </View>
      </View>
    );
  }

}

export default UsuarioGithub;

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
}
