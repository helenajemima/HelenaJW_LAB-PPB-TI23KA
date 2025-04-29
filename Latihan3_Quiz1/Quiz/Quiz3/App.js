import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import ColorBox from './ColorBox';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Color Changer</Text>
      <ColorBox/>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    marginTop: 180,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
