import React from 'react'
import { View, StyleSheet, Text, StatusBar, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons/faEllipsis'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft'
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
				<View style={styles.iconsView}>
					<TouchableOpacity style={styles.iconLeft}>
						<FontAwesomeIcon size={20} style={styles.icon} icon={ faChevronLeft } />
					</TouchableOpacity>
					<TouchableOpacity style={styles.iconRight}>
						<FontAwesomeIcon size={25} style={styles.icon} icon={ faEllipsis } />
					</TouchableOpacity>
				</View>
        <Text style={styles.mainText} >Tarefas</Text>
        <Text style={styles.date} >17 de setembro, 2023</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      paddingTop: StatusBarHeight,
    },
		iconsView: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			marginBottom: 10,
		},
		iconRight: {
			alignItems: 'flex-end',
			marginEnd: 15,
		}, 
		iconLeft: {
			marginStart: 15,
		},
    icon: {
      color: '#6A32E1',
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