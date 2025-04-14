import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('./assets/icon/LOGO_IBIK.png')} 
          style={styles.logo}
        />
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#800080',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    color: 'white',
    position: 'absolute',
    bottom: 50,
  },
});
