import React, { useState } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons/faCircle'
import { faCircle as faCircleSolid } from '@fortawesome/free-solid-svg-icons/faCircle'
import { faStar } from '@fortawesome/free-regular-svg-icons/faStar'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons/faStar'

import { useNavigation } from '@react-navigation/native';

export default function Task({ task }) {
  const navigation = useNavigation();
  const [iconClikedS, setIconClikedS] = useState(false);
  const [iconClikedC, setIconClikedC] = useState(false);
  const taskFavorite = () => {
    setIconClikedS(!iconClikedS);
    // mover task para 'favorites'
    // update no db type = 'favorites'
  }
  const taskDone = () => {
    setIconClikedC(!iconClikedC);
    //timeout 0.5 segundo
    // checar se tem 'repeat'
    //mover task para 'done'
    // update no db type = 'done'
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Pressable onPress={taskDone}>
        {iconClikedC ? (
          <FontAwesomeIcon size={27} style={styles.iconC} icon={ faCircleSolid } />
        ) : (
          <FontAwesomeIcon size={27} style={styles.iconC} icon={ faCircle } />
        )}
        </Pressable>
        <Pressable onPress={() => navigation.navigate('EditTask', { task })}>
          <Text style={styles.maintext}>{task}</Text>
        </Pressable>
      </View>
      <Pressable onPress={taskFavorite}>
        {iconClikedS ? (
          <FontAwesomeIcon size={23} style={styles.iconS} icon={ faStarSolid } />
        ) : (
          <FontAwesomeIcon size={23} style={styles.iconS} icon={ faStar } />
        )}
      </Pressable>
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
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
  },
  iconC: {
    color: '#fff',
    fontSize: 32,
  },
  iconS: {
    color: '#6A32E1',
    fontSize: 34,
  },
  maintext: {
    color: '#fff',
    marginLeft: 22,
    fontSize: 20,
    fontFamily: 'Montserrat'
  }
});
