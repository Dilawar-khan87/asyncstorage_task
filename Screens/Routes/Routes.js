import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home/Home'
import AddItem from '../AddItem/AddItem';

const Routes = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddItem" component={AddItem} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes