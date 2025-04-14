import React from "react";
import { View, StyleSheet } from "react-native";
import MyProfile from "./components/MyProfile";

export default function App() {
  return (
    <View style={styles.container}>
      <MyProfile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
