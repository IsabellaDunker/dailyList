import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import TaskPage from './src/pages/TaskPage/TaskPage'
//import './src/database'

export default function App() {
  useFonts({
    Montserrat: require('./assets/fonts/OpenSans-SemiBold.ttf'),
  });

  return (
    <TaskPage/>
  );
}