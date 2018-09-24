import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native'

const styles = StyleSheet.create({
  title: {
    marginBottom: 50,
    fontSize: 30
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingBottom: 10,
    paddingTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  inputStyle: {
    marginLeft: 10,
    flex: 1,
    fontSize: 18
  },
})

class LoginScreen extends React.Component {
  state = {
    name: "",
    password: ""
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <View style={styles.passwordContainer}>
          <Icon name='user' size={20} />
          <TextInput
            style={styles.inputStyle}
            value={this.state.name}
            placeholder="Login"
            onChangeText={(text) => this.setState({ "name": text })}
          />
        </View>
        <View style={styles.passwordContainer}
          marginBottom={50}>
          <Icon name='lock' size={20} />
          <TextInput
            style={styles.inputStyle}
            autoCorrect={false}
            secureTextEntry
            placeholder="Password"
            value={this.state.password}
            onChangeText={(text) => this.setState({ "password": text })}
          />
        </View>

        <Button
          onPress={() => this.onLogin()}
          title="Log in" />
      </View >
    )
  }

  onLogin() {
    const name = this.state.name;
    const password = this.state.password;

    if (name != "" && password != "" && password != name) {
      this.props.dispatch({ type: 'Login', userName: name })
    } else {
      Alert.alert(
        'Error',
        'Login or password is not valid',
        [],
        { cancelable: true })
    }
  }
}

export default connect()(LoginScreen);