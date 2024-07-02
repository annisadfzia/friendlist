import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FriendsList from './components/FriendsList';
import FriendDetail from './components/FriendDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FriendsList" component={FriendsList} options={{ title: 'Friends List' }} />
        <Stack.Screen name="FriendDetail" component={FriendDetail} options={{ title: 'Friend Detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}