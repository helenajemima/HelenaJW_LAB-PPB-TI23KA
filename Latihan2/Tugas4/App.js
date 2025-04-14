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
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'space-between',
  },
  box: {
    flex: 1,
    minWidth: 150,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 16,
  },
});

export default App;
