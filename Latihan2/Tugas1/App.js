import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>History of Bicycle</Text>
        <Text style={styles.content}>
          A bicycle, also called a bike or cycle, is a human-powered or
          motor-powered, pedal-driven, single-track vehicle, having two wheels
          attached to a frame.
        </Text>
        <View style={styles.wrapper}>
          <Image 
          source={require('./assets/icon/listrik.jpg')}
            style={styles.image}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',   
    backgroundColor: '#f0f0f0',
  },
  card: {
    width: 300,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
  },
  title: {
    backgroundColor: '#c62828',
    color: 'white',
    fontWeight: 'bold',
    padding: 8,
    borderRadius: 4,
    marginBottom: 10,
  },
  content: {
    textAlign: 'center',
    marginBottom: 20,
  },
  wrapper: {
    borderWidth: 3,
    borderColor: '#90caf9',
    padding: 5,
    borderRadius: 8,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
});

export default App;
