import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import TaskPage from './src/pages/TaskPage/TaskPage'
import EditTask from './src/components/Task/EditTask';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import './src/database'

const Stack = createStackNavigator();

export default function App() {
  useFonts({
    Montserrat: require('./assets/fonts/OpenSans-SemiBold.ttf'),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TaskPage">
      <Stack.Screen
          name="TaskPage"
          component={TaskPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditTask"
          component={EditTask}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}