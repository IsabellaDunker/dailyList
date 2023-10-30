import React from 'react';
import { useFonts } from 'expo-font';

import Navigation from './src/pages/Navigation/Navigation'
//import './src/database'

export default function App() {
  useFonts({
    Montserrat: require('./assets/fonts/OpenSans-SemiBold.ttf'),
  });

  return (
    <Navigation/>
  );
}