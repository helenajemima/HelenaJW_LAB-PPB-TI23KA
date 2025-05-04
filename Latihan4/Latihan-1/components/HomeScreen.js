import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const stories = [
  { id: '1', name: 'Zaki', gender: 'M' },
  { id: '2', name: 'Adrian', gender: 'M' },
  { id: '3', name: 'Hana', gender: 'F' },
  { id: '4', name: 'Lukman', gender: 'M' },
  { id: '5', name: 'Cindy', gender: 'F' },
  { id: '6', name: 'Erdiana', gender: 'F' },
  { id: '7', name: 'Fawas', gender: 'M' },
  { id: '8', name: 'Zaki', gender: 'M' },
  { id: '9', name: 'Adrian', gender: 'M' },
  { id: '10', name: 'Hana', gender: 'F' },
  { id: '11', name: 'Lukman', gender: 'M' },
  { id: '12', name: 'Cindy', gender: 'F' },
  { id: '13', name: 'Erdiana', gender: 'F' }, 
  { id: '14', name: 'Fawas', gender: 'M' },
];

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/icons/Instagram-logo.png')} style={styles.logo} />
        <View style={styles.headerIcons}>
          <Image source={require('../assets/icons/heart.png')} style={styles.icon} />
          <Image source={require('../assets/icons/arrow.png')} style={[styles.icon, { marginLeft: 12 }]} />
        </View>
      </View>

      <View style={styles.storiesWrapper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.storiesScroll}>
          {stories.map((item) => {
            const genderIcon = item.gender === 'M'
              ? require('../assets/icons/icon-boy.png')
              : require('../assets/icons/icon-girl.png');

            return (
              <View key={item.id} style={styles.story}>
                <Image source={genderIcon} style={styles.storyImage} />
                <View style={styles.nameRow}>
                  <Text style={styles.storyName}>{item.name}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>

        <View style={styles.postContainer}>
            <View style={styles.usernameRow}>
                <Image source={require('../assets/icons/icon-girl.png')} style={styles.genderIcon} />
                <Text style={styles.username}>Shepilla</Text>
            </View>
            <Image source={require('../assets/icons/post.png')} style={styles.postImage} />
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#000' 
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    logo: { 
        width: 100, 
        height: 30, 
        resizeMode: 'contain' 
    },
    headerIcons: { 
        flexDirection: 'row'    
    },
    icon: { 
        width: 20, 
        height: 20, 
        tintColor: '#fff' 
    },
    storiesWrapper: {
        width: '100%',
        backgroundColor: '#000',
        paddingVertical: 10,
    },
    storiesScroll: {
        paddingHorizontal: 10,
    },
    story: {
        alignItems: 'center',
        marginRight: 30,
    },
    storyImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: '#fff',
    },
    nameRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    genderIcon: {
        width: 16,
        height: 16,
        marginRight: 4,
    },
    storyName: {
        color: '#fff',
        fontSize: 13,
    },
    postContainer: {
        alignItems: 'center',
        marginVertical: 15,
    },
    usernameRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 500,
        marginLeft: 360,
        maxWidth: '100%',
        paddingHorizontal: 10,
        marginBottom: 5,
        alignSelf: 'flex-start',
    },
    username: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    postImage: {
        width: 500,
        maxWidth: '100%',
        height: 500,
        resizeMode: 'cover',
        borderWidth: 2,
        borderColor: '#fff',
    },
    genderIcon: {
        width: 20,
        height: 20,
        marginRight: 6,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#fff',
    },  
});

export default HomeScreen;
