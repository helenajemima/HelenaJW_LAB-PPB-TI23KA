import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ColorBox = () => {
  const [warna, setWarna] = useState('blue');

  const changeColor = () => {
    if (warna === 'blue') {
      setWarna('red');
    } else if (warna === 'red') {
      setWarna('green');
    } else if (warna === 'green') {
      setWarna('orange');
    } else if (warna === 'orange') {
      setWarna('purple');
    } else if (warna === 'purple') {
      setWarna('cyan');
    } else if (warna === 'cyan') {
      setWarna('gold');
    } else if (warna === 'gold') {
      setWarna('pink');
    } else if (warna === 'pink') {
      setWarna('blue'); 
    }
  };

  return (
    <View style={styles.colorContainer}>
      <TouchableOpacity style={styles.button} onPress={changeColor}>
        <Text style={styles.buttonText}>Change Color 🎨</Text>
      </TouchableOpacity>
      <View style={[styles.box, { backgroundColor: warna }]} />
    </View>
  );
};

export default ColorBox;

const styles = StyleSheet.create({
  colorContainer: {
    alignItems: 'center',
    marginVertical: 30,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  button: {
    backgroundColor: '#6200ea',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    shadowColor: '#6200ea',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  box: {
    width: 120,
    height: 120,
    marginTop: 25,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#333',
  },
});
