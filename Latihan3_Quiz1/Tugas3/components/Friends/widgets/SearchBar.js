import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

const SearchBar = () => {
    return (
        <View style={styles.search_box}>
            <FontAwesome5 name={"search"} size={25} color="grey" />
            <TextInput style={styles.search_input} placeholder='Search' />
        </View>
    );
}

export default SearchBar;

const styles = StyleSheet.create({
    search_box: {
        padding: 10,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 10,
        backgroundColor: "#f0f0f0",
    },
    search_input: {
        fontSize: 18,
        width: "90%",
        color: "white",
        marginLeft: 10
    },
});