import React, { useState } from 'react'
import { View, StyleSheet, Text, StatusBar, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft'
import Menu from '../Modal/Menu'

import { useNavigation } from '@react-navigation/native';

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ title, onSelectImage }) {
  const navigation = useNavigation();
  const date = new Date();
  const formattedDate = formatDate(date);
  const [tituloColor, setTituloColor] = useState('#6A32E1');

  const onSelectColor = (color) => {
    setTituloColor(color);
  };

    return (
      <View style={styles.container}>
				<View style={styles.iconsView}>
					<Pressable onPress={() => navigation.navigate('ListPage')} style={styles.iconLeft}>
						<FontAwesomeIcon size={20} style={[styles.icon, { color: tituloColor }]} icon={ faChevronLeft } />
					</Pressable>
          <View style={styles.iconRight}>
            <Menu onSelectImage={onSelectImage} onSelectColor={onSelectColor}/>
          </View>
				</View>
        <Text style={[styles.mainText, { color: tituloColor }]} >{title}</Text>
        <Text style={[styles.date, { color: tituloColor }]} >{formattedDate}</Text>
      </View>
    );
  }

  function formatDate(date) {
    const semana = [
      'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira',
      'Quinta-feira', 'Sexta-feira', 'Sábado'
    ]
    const meses = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril',
      'Maio', 'Junho', 'Julho', 'Agosto',
      'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    
    const diaSemana = semana[date.getDay()];
    const dia = date.getDate();
    const mes = meses[date.getMonth()];
    
    return `${diaSemana}, ${dia} de ${mes}`;
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
      fontFamily: 'Opensans',
      marginStart: 24,
      marginBottom: 3,
    },
    date: {
      color: '#6A32E1',
      fontSize: 20,
      fontFamily: 'Opensans',
      marginStart: 24,
    }
  });