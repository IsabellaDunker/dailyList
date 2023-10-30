import React, { useState } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons/faCircle'
import { faCircle as faCircleSolid } from '@fortawesome/free-solid-svg-icons/faCircle'
import { faStar } from '@fortawesome/free-regular-svg-icons/faStar'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons/faStar'

export default function Task({ task }) {
  const [iconClikedS, setIconClikedS] = useState(false);
  const [iconClikedC, setIconClikedC] = useState(false);
  const toogleIconStar = () => {
    setIconClikedS(!iconClikedS);
  }
  const taskDone = () => {
    setIconClikedC(!iconClikedC);
    //timeout 0.5 segundo
    //mover task para 'done'
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
        <Text style={styles.maintext} >{task}</Text>
      </View>
      <Pressable onPress={toogleIconStar}>
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
