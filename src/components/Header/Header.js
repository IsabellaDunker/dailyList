import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Menu from '../Modal/Menu'; 

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header() {
  const date = new Date();
  const formattedDate = `${date.getDate()} / ${date.getMonth() + 1}, ${date.getFullYear()}`;

  return (
    <View style={styles.container}>
      <View style={styles.iconsView}>
        <Text style={styles.date}>{formattedDate}</Text>
        <View style={styles.iconRight}>
          <Menu />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
  iconsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
  },
  iconRight: {
    marginEnd: 15,
  },
  date: {
    color: '#6A32E1',
    fontSize: 20,
    fontFamily: 'Montserrat',
    marginStart: 24,
  }
});
