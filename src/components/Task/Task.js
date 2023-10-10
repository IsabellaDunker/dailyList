import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons/faCircle'
import { faStar } from '@fortawesome/free-regular-svg-icons/faStar'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons/faStar'
import { useFonts } from 'expo-font';

export default function Task({ task }) {
  const [iconCliked, setIconCliked] = useState(false);
  const toogleIcon = () => {
    setIconCliked(!iconCliked);
  }
  const [loaded] = useFonts({
    Montserrat: require('../../../assets/fonts/OpenSans-SemiBold.ttf'),
  });
    
    if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity>
          <FontAwesomeIcon size={27} style={styles.iconC} icon={ faCircle } />
        </TouchableOpacity>
        <Text style={styles.maintext} >{task}</Text>
      </View>
      <TouchableOpacity onPress={toogleIcon}>
        {iconCliked ? (
          <FontAwesomeIcon size={20} style={styles.iconS} icon={ faStarSolid } />
        ) : (
          <FontAwesomeIcon size={20} style={styles.iconS} icon={ faStar } />
        )}
      </TouchableOpacity>
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
  iconC: {
    color: '#fff',
    fontSize: 32,
  },
  iconS: {
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
