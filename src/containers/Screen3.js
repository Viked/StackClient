import React from 'react'
import { StyleSheet, Text, View, Image, AsyncStorage, TouchableHighlight } from 'react-native'
import { NavigationActions } from 'react-navigation'

export default class Screen3 extends React.Component {

  logout = () => {

    AsyncStorage.setItem("name", "");
    // This will reset back to loginStack
    // https://github.com/react-community/react-navigation/issues/1127
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      key: null,  // black magic
      actions: [NavigationActions.navigate({ routeName: 'loginStack' })]
    })
    this.props.navigation.dispatch(actionToDispatch)
  }

  static navigationOptions = {
    drawerLabel: 'Screen Three',
    drawerIcon: () => (
      <Image
        source={{uri: `https://dummyimage.com/60x60/000/fff.jpg&text=3`}}
        style={{width: 30, height: 30, borderRadius: 15}}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>

        <Text
          style={styles.title}>
          Good Bye
        </Text>

        <TouchableHighlight   onPress={this.logout}>
          <Text
            style={styles.logout}>
            Log Out
          </Text>
        </TouchableHighlight>

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
  title: {
    fontSize: 20,
    marginBottom: 50,

  },
  logout: {
    fontWeight: 'bold',
    padding: 15,
    borderRadius: 2,
    borderWidth: 1,
    textAlign: 'center'
  }
})
