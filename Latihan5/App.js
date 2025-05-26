import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./src/SignIn";
import Home from "./src/Home";

const Stack = createNativeStackNavigator();

const Page2 = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s Home</Text>;
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerShown: false, 
        }}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
