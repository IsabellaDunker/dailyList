import React from 'react'
import { View, StyleSheet, Text, StatusBar, Pressable} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft'
import Menu from '../Modal/Menu'

import { useNavigation } from '@react-navigation/native';

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ onSelectImage }) {
  const navigation = useNavigation();
  const date = new Date();
  const formattedDate = `${date.getDate()} de ${date.getMonth() + 1}, ${date.getFullYear()}`;

    return (
      <View style={styles.container}>
				<View style={styles.iconsView}>
					<Pressable onPress={() => navigation.navigate('ListPage')} style={styles.iconLeft}>
						<FontAwesomeIcon size={20} style={styles.icon} icon={ faChevronLeft } />
					</Pressable>
          <View style={styles.iconRight}>
            <Menu onSelectImage={onSelectImage} />
          </View>
				</View>
        <Text style={styles.mainText} >Tarefas</Text>
        <Text style={styles.date} >{formattedDate}</Text>
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