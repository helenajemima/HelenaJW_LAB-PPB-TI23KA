import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HistoryBox = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>History of Bicycle</Text>
      <Text style={styles.content}>
        A bicycle, also called a bike or cycle, is a human-powered or
        motor-powered, pedal-driven, single-track vehicle, having two wheels
        attached to a frame.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 5,
  },
  title: {
    backgroundColor: '#c62828',
    color: 'white',
    padding: 8,
    fontWeight: 'bold',
    borderRadius: 4,
    marginBottom: 10,
  },
  content: {
    textAlign: 'center',
  },
});

export default HistoryBox;
