import 'react-native-gesture-handler';
import React from 'react'
import { View } from 'react-native';
import { MainScreen } from './src/screens/MainScreen'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}

export default App;
