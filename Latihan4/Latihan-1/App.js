import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import HomeScreen from './components/HomeScreen';
import MyFriendsScreen from './components/MyFriendsScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: { backgroundColor: '#000' },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#888',
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'MyFriends') {
              iconName = 'people';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="MyFriends" component={MyFriendsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
