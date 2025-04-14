import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const MyProfile = () => {
  return (
    <View style={styles.card}>
      <Image source={require("../assets/icon/foto.jpg")} style={styles.image} />
      <Text style={styles.name}>Helena Jemima Widjaja</Text>
      <Text style={styles.title}>232310042 | TI-23-KA</Text>
      <Text style={styles.university}>IBI Kesatuan Bogor</Text>
      <View style={styles.socialIcons}>
        <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com')}>
          <FontAwesome name="instagram" size={28} color="#E1306C" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://linkedin.com')}>
          <FontAwesome name="linkedin" size={28} color="#0077B5" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com')}>
          <FontAwesome name="twitter" size={28} color="#1DA1F2" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:232310042@student.ibik.ac.id')}>
          <FontAwesome name="envelope" size={28} color="#D44638" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 25,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6,
        margin: 20,
        width: 320,
        height: 420,
        alignSelf: 'center',
        justifyContent: 'space-evenly',
    },
    image: {
        width: '100%',
        height: 180,
        resizeMode: 'cover',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 5,
        color: '#333',
    },
    title: {
        color: '#777',
        fontSize: 16,
        marginVertical: 4,
        fontStyle: 'italic',
    },
    university: {
        fontSize: 14,
        marginBottom: 12,
        color: '#555',
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '80%',
        marginVertical: 10,
    },
    });

    export default MyProfile;