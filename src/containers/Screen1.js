import React from 'react'
import { StyleSheet, Text, View, Image, AsyncStorage } from 'react-native'

export default class Screen1 extends React.Component {

  static navigationOptions = {
    drawerLabel: 'Screen One',
    drawerIcon: () => (
      <Image
        source={{uri: `https://dummyimage.com/60x60/000/fff.jpg&text=1`}}
        style={{width: 30, height: 30, borderRadius: 15}}
      />
    )
  }

  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  componentDidMount() {
        AsyncStorage.getItem("name").then((value) => {
            this.setState({"name": value});
        }).done();
    }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, {this.state.name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
