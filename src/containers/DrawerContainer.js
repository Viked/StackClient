import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default class DrawerContainer extends React.Component {

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text
          onPress={() => navigation.navigate('screen1')}
          style={styles.uglyDrawerItem}>
          Home
        </Text>
        <Text
          onPress={() => navigation.navigate('screen2')}
          style={styles.uglyDrawerItem}>
          Stackoverflow
        </Text>
        <Text
          onPress={() => navigation.navigate('screen3')}
          style={styles.uglyDrawerItem}>
          Log Out
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  uglyDrawerItem: {
    fontSize: 18,
    margin: 5
  }
})
