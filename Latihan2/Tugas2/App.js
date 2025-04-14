import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import HistoryBox from './components/HistoryBox';
import ProfileBox from './components/ProfileBox';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HistoryBox />
        <ProfileBox />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});
