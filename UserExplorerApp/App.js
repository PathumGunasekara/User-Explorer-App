import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserListScreen from './screens/UserListScreen';
import UserDetailsScreen from './screens/UserDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Users" 
          component={UserListScreen} 
          options={{ title: 'User Explorer' }} 
        />
        <Stack.Screen 
          name="UserDetails" 
          component={UserDetailsScreen} 
          options={{ title: 'User Details' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
