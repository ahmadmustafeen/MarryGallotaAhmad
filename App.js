
import React from 'react';
import {
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/containers/Home';
import ImageList from './src/containers/ImageList';
import ViewImage from './src/containers/ViewImage';


import { createStackNavigator } from '@react-navigation/stack';

const App = () => {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ImageList" component={ImageList} />
        <Stack.Screen name="ViewImage" component={ViewImage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
