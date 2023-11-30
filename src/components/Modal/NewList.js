import React, { useState, useEffect } from 'react';
import {TextInput, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { postEvent } from '../../database';

export default function NewList(){
  const [list, setList] = React.useState('');

//   const handleSubmitList = async () => {
//     try {
//       const responseData = await postEvent('task', JSON.stringify({ name: task, list_id: list_id }));
//       onListCreated({ "name": task, "list_id": list_id });
//       setList('')
//       console.log('Resposta POST:', responseData);
//     } catch (error) {
//       console.error('Erro ao realizar POST:', error);
//     }
// };

  return (
      <View style={styles.centeredView}>
        <View style={styles.inputView}>
			    <TextInput
						style={styles.input}
						onChangeText={(newList) => setList(newList)}
						value={list}
						placeholder="Nova lista  +"
						placeholderTextColor={'#fff'}/>
          </View>
        </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  inputView: {
    height: 62,
    backgroundColor: '#363636',
    marginStart: 45,
    marginEnd: 45,
    marginBottom: 15,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
	input: {
    height: 60,
		width: 200,
		borderRadius: 6,
    padding: 15,
		fontSize: 24,
    color:'white'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
		color: 'white',
		fontSize: 30,
  },
	icon: {
    color: '#6A32E1',
  },
	textbt: {
    color: '#6A32E1',
    fontSize: 24,
    marginStart: 24,
		marginEnd: 6,
    marginBottom: 3,
  },
});