import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';

const friends = [
    { id: '1', name: 'Zaki', fullname: 'Zaki Fadhillah', gender: 'M' },
    { id: '2', name: 'Adrian', fullname: 'Adrian Prasetyo', gender: 'M' },
    { id: '3', name: 'Hana', fullname: 'Hana Putri', gender: 'F' },
    { id: '4', name: 'Lukman', fullname: 'Lukman Hakim', gender: 'M' },
    { id: '5', name: 'Cindy', fullname: 'Cindy Marlina', gender: 'F' },
    { id: '6', name: 'Erdiana', fullname: 'Erdiana Sari', gender: 'F' },
    { id: '7', name: 'Fawas', fullname: 'Fawas Ramadhan', gender: 'M' },
    { id: '8', name: 'Zaki', fullname: 'Zaki Fadhillah', gender: 'M' },
    { id: '9', name: 'Adrian', fullname: 'Adrian Prasetyo', gender: 'M' },
    { id: '10', name: 'Hana', fullname: 'Hana Putri', gender: 'F' },
    { id: '11', name: 'Lukman', fullname: 'Lukman Hakim', gender: 'M' },
    { id: '12', name: 'Cindy', fullname: 'Cindy Marlina', gender: 'F' },
    { id: '13', name: 'Erdiana', fullname: 'Erdiana Sari', gender: 'F' }, 
    { id: '14', name: 'Fawas', fullname: 'Fawas Ramadhan', gender: 'M' },
];
  

const UserItem = ({ item }) => {
    const genderIcon = item.gender === 'M'
        ? require('../assets/icons/icon-boy.png')
        : require('../assets/icons/icon-girl.png');

    return (
        <View style={styles.friendItem}>
        <View style={styles.nameContainer}>
            <Image source={genderIcon} style={styles.genderIcon} />
            <View>
            <Text style={styles.friendName}>{item.name}</Text>
            <Text style={styles.friendFullname}>{item.fullname}</Text>
            </View>
        </View>
        <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followText}>Follow</Text>
        </TouchableOpacity>
        </View>
    );
};
  

const MyFriendsScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchBar} placeholder="Search" placeholderTextColor="#ccc" />
      <Text style={styles.sectionTitle}>Recommended Friends</Text>
      <FlatList
        data={friends}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <UserItem item={item} />}
      />
      <Text style={styles.sectionTitle}>Similar Contacts</Text>
      <FlatList
        data={friends}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <UserItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#000', 
        padding: 10 
    },
    searchBar: { 
        backgroundColor: '#333', 
        padding: 10, 
        borderRadius: 5, 
        color: '#fff', 
        marginBottom: 10 
    },
    sectionTitle: { 
        color: '#fff', 
        fontSize: 18, 
        fontWeight: 'bold', 
        marginBottom: 10 
    },
    friendItem: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingVertical: 10 
    },
    nameContainer: { 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    genderIcon: { 
        width: 30, 
        height: 30, 
        marginRight: 8, 
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 50,
    },
    friendName: { 
        color: '#fff', 
        fontSize: 16 
    },
    followButton: { 
        backgroundColor: '#e91e63', 
        paddingVertical: 5, 
        paddingHorizontal: 15, 
        borderRadius: 5 
    },
    followText: { 
        color: '#fff', 
        fontWeight: 'bold' 
    },
    friendFullname: { 
        color: '#aaa', 
        fontSize: 13 
    },
      
});

export default MyFriendsScreen;
