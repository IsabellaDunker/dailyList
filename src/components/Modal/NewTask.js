import React, { useState } from 'react';
import {TextInput, StyleSheet, Text, Pressable, View} from 'react-native';
import { postEvent } from '../../database';

export default function NewTask({ list_id, onTaskCreated }){
	const [task, setTask] = useState('');

  const handleSubmitTask = async () => {
      try {
        const responseData = await postEvent('task', JSON.stringify({ name: task, list_id: list_id }));
        onTaskCreated({ "name": task, "list_id": list_id });
        setTask('')
        console.log('Resposta POST:', responseData);
      } catch (error) {
        console.error('Erro ao realizar POST:', error);
      }
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.inputView}>
				<TextInput
					style={styles.input}
					onChangeText={(text) => {setTask(text)}}
          onSubmitEditing={handleSubmitTask}
					value={task}
					placeholder="Nova tarefa  +"
					placeholderTextColor={'#6A32E1'}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontFamily: 'Opensans',
		fontSize: 24,
    color:'white'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
		color: 'white',
		fontFamily: 'Opensans',
		fontSize: 30,
  },
	icon: {
    color: '#6A32E1',
  },
	textbt: {
    color: '#6A32E1',
    fontSize: 24,
    fontFamily: 'Opensans',
    marginStart: 24,
		marginEnd: 6,
    marginBottom: 3,
  },
});
