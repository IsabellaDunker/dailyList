import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons/faCircle'
import { faStar } from '@fortawesome/free-regular-svg-icons/faStar'
import { useFonts } from 'expo-font';

export default function Task() {
    const [loaded] = useFonts({
      Montserrat: require('../../../assets/fonts/OpenSans-SemiBold.ttf'),
    });
    
      if (!loaded) {
      return null;
    }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <FontAwesomeIcon size={27} style={styles.icon} icon={ faCircle } />
        <Text style={styles.maintext} >Regar as plantas</Text>
      </View>
      <FontAwesomeIcon size={20} style={styles.icon} icon={ faStar } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#363636',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: 15,
    marginStart: 10,
    marginEnd: 10,
    height: 62,
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    color: '#fff',
    fontSize: 32,
  },
  maintext: {
    color: '#fff',
    marginLeft: 22,
    fontSize: 20,
    fontFamily: 'Montserrat'
  }
});
