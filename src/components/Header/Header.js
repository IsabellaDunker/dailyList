import React from 'react'
import { View, StyleSheet, Text, StatusBar} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons/faEllipsis'
import { useFonts } from 'expo-font';

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header() {
    const [loaded] = useFonts({
        Montserrat: require('../../../assets/fonts/OpenSans-SemiBold.ttf'),
      });
      
        if (!loaded) {
        return null;
      }
  
    return (
      <View style={styles.container}>
        <FontAwesomeIcon style={styles.icon} icon={ faEllipsis } />
        <Text style={styles.mainText} >Tarefas</Text>
        <Text style={styles.date} >17 de setembro, 2023</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      paddingTop: StatusBarHeight,
    },
    icon: {
      color: '#6A32E1',
      width: 27,
      height: 27,
      right: 1,
    },
    mainText: {
      color: '#6A32E1',
      fontSize: 32,
      fontFamily: 'Montserrat',
      marginStart: 24,
      marginBottom: 3,
    },
    date: {
      color: '#6A32E1',
      fontSize: 20,
      fontFamily: 'Montserrat',
      marginStart: 24,
    }
  });