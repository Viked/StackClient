import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux';

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

const LogoutScreen = ({ logout }) => (
  <View style={styles.container}>

    <Text
      style={styles.title}>
      Good Bye
  </Text>

    <TouchableHighlight onPress={logout}>
      <Text
        style={styles.logout}>
        Log Out
    </Text>
    </TouchableHighlight>

  </View>
);

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: 'Logout' }),
});

export default connect(null, mapDispatchToProps)(LogoutScreen);


