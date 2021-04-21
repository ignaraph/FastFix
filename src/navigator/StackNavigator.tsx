import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from '../screens/MainScreen';
import { MenuScreen } from '../screens/MenuScreen';
import { ResultsScreen } from '../screens/ResultsScreen';
import { RequestFormScreen } from '../screens/RequestFormScreen';
import React from 'react'
import { FavoritesScreen } from '../screens/FavoritesScreen';

const Stack = createStackNavigator()

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="MenuScreen" component={MenuScreen} />
      <Stack.Screen name="ResultsScreen" component={ResultsScreen} />
      <Stack.Screen name="RequestFormScreen" component={RequestFormScreen} />
      <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
    </Stack.Navigator>
  );
}
