import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BiodataClass from './components/BiodataClass';
import BiodataFunction from './components/BiodataFunction';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informasi Data Diri</Text>
      <View style={styles.row}>
        <View style={styles.box}>
          <BiodataClass />
        </View>
        <View style={styles.box}>
          <BiodataFunction />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  title: {
    marginTop: 40,
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
  box: {
    backgroundColor: '#fff',
    width: 300, 
    height: 'auto',
    padding: 16,
    borderRadius: 16,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    marginBottom: 20,
    alignItems: 'center', 
  },
});

export default App;
