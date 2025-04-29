import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import RegistrationForm from './RegistrationForm';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <RegistrationForm />
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
});
