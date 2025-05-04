import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';

export default function HomeScreen() {
  const { width, height } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/welcome.jpg')}
        style={{ width, height, position: 'absolute' }}
      />
      <Text style={styles.welcomeText}>Home Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    position: 'absolute',
    top: 400, 
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
});
