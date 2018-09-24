import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 50,
  }
})

const LogoutScreen = ({ logout }) => (
  <View style={styles.container}>

    <Text
      style={styles.title}>
      Goodbye
  </Text>

    <Button
      onPress={logout}
      title="Log Out" />

  </View>
);

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: 'Logout' }),
});

export default connect(null, mapDispatchToProps)(LogoutScreen);


