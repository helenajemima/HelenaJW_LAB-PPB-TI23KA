import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ProfileBox = () => {
  return (
    <View style={styles.wrapper}>
      <Image
        source={require('../assets/icon/listrik.jpg')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default ProfileBox;
