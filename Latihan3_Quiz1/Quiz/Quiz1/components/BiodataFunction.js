import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BiodataFunction = () => {
  const [MyBio] = useState({
    identity: {
      npm: '232310042',
      firstname: 'HELENA',
      middlename: 'JEMIMA',
      lastname: 'WIDJAJA',
    },
    instansi: 'Institut Bisnis dan Informatika Kesatuan',
    jurusan: 'Teknologi Informasi',
    kelas: 'TI-23-KA',
    mobile_phone: '087777102819',
    email: '232310042@student.ibik.ac.id',
    gender: 'F',

  });

  const { identity, instansi, jurusan, kelas, mobile_phone, email, gender } = MyBio;

  return (
    <View>
      <Text style={styles.header}>Data Diri (RFC)</Text>
      <View style={styles.garis} />
      <Text><Text style={styles.label}>NPM:</Text> {identity.npm}</Text>
      <Text><Text style={styles.label}>Nama:</Text> {identity.firstname} {identity.middlename} {identity.lastname}</Text>
      <Text><Text style={styles.label}>Instansi:</Text> {instansi}</Text>
      <Text><Text style={styles.label}>Jurusan:</Text> {jurusan}</Text>
      <Text><Text style={styles.label}>Kelas:</Text> {kelas}</Text>
      <Text><Text style={styles.label}>Nomor HP:</Text> {mobile_phone}</Text>
      <Text><Text style={styles.label}>Email:</Text> {email}</Text>
      <Text><Text style={styles.label}>Jenis Kelamin:</Text> {gender}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  label: {
    fontWeight: 'bold',
  },
  garis: {
    height: 1,
    backgroundColor: '#ccc',
    alignSelf: 'stretch',
    marginVertical: 8,
  },  
});

export default BiodataFunction;
