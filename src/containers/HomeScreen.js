import React from 'react'
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const HomeScreen = ({ userName }) => (
  <View style={styles.container}>
    <Text>Hello, {userName}</Text>
  </View>
);

const mapStateToProps = state => ({
  userName: state.auth.userName,
});

export default connect(mapStateToProps)(HomeScreen);
