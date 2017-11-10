import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, Text, View, TextInput, AsyncStorage, Alert } from 'react-native'

export default class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={marginBottom = 50}>Welcome</Text>
        <View style={styles.passwordContainer}>
           <Icon name='user' size={20}/>
          <TextInput
                  style={styles.inputStyle}
                  value={this.state.name}
                  placeholder="Login"
                  onChangeText={(text) => this.onNameEntry(text)}
                  />


        </View>


        <View style={styles.passwordContainer}>
          <Icon name='lock' size={20}/>
              <TextInput
                style={styles.inputStyle}
                autoCorrect={false}
                secureTextEntry
                placeholder="Password"
                value={this.state.password}
                onChangeText={(text) => this.onPasswordEntry(text)}
              />

           </View>

        <Text
          style={styles.linky}
          onPress={() => this.onLogin()} >
          Log in
        </Text>
      </View>
    )
  }

  componentDidMount() {
        AsyncStorage.getItem("name").then((value) => {
            this.setState({"name": value});
        }).done();
    }

  onNameEntry(value) {
        this.setState({"name": value});
    }

    onPasswordEntry(value) {
          this.setState({"password": value});
      }

      onLogin(){
        var name = this.state.name;
        var password = this.state.password;

        if(name != "" && password != "" && password != name){
          AsyncStorage.setItem("name", name);
          this.props.navigation.navigate('drawerStack')
        } else {
          Alert.alert(
            'Error',
            'Login or password is not valid',
            { cancelable: true })
        }
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linky: {
    fontWeight: 'bold',
    color: '#4C3E54',
    paddingTop: 10,
    marginTop: 50
  },
  passwordContainer: {
    flexDirection: 'row',
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
  },
})
