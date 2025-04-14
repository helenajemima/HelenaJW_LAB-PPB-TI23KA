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
    educations: [
      { id: 1, school: 'SD Pelangi Kasih' },
      { id: 2, school: 'SMP Tunas Harapan Bogor' },
      { id: 3, school: 'SMA Regina Pacis Bogor' },
    ],
    mobile_phone: '087777102819',
    email: '232310042@student.ibik.ac.id',
    gender: 'F',
    tall_body: 162,
    weight_body: 50,
  });

  const { identity, educations, mobile_phone, email, gender, tall_body, weight_body } = MyBio;

  return (
    <View>
      <Text style={styles.header}>Data Diri (RFC)</Text>
      <Text><Text style={styles.label}>NPM:</Text> {identity.npm}</Text>
      <Text><Text style={styles.label}>Nama:</Text> {identity.firstname} {identity.middlename} {identity.lastname}</Text>
      <Text><Text style={styles.label}>Nomor HP:</Text> {mobile_phone}</Text>
      <Text><Text style={styles.label}>Email:</Text> {email}</Text>
      <Text><Text style={styles.label}>Jenis Kelamin:</Text> {gender}</Text>
      <Text><Text style={styles.label}>Tinggi Badan:</Text> {tall_body} cm</Text>
      <Text><Text style={styles.label}>Berat Badan:</Text> {weight_body} kg</Text>
      <Text style={styles.subheader}>Pendidikan:</Text>
      {educations.map((edu) => (
        <Text key={edu.id}>• {edu.school}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subheader: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  label: {
    fontWeight: 'bold',
  },
});

export default BiodataFunction;
