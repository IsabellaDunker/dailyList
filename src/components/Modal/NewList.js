import React, { useState, useEffect } from 'react';
import {TextInput, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const url = "https://s92jwwbki8.execute-api.us-east-2.amazonaws.com/list/list"

export default function NewList(){
  const [modalVisible, setModalVisible] = useState(false);
	const [list, setList] = React.useState('');

  const handleChangeList = (newList) => {
    setList(newList);
  };

  const handleSubmitResultado = () => {
    try {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(list),
      }).then((response) => response.text())
        .then((json) => console.log(json));
    } catch (error) {
      console.error("Error:", error);
    }

    setList('')
    //location.reload();
  }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
    >
      <View style={styles.centeredView}>
          <View style={styles.inputView}>
						<TextInput
						style={styles.input}
						onChangeText={handleChangeList}
						value={list}
						placeholder="Nova lista  +"
						placeholderTextColor={'#fff'}/>
          </View>
        </View>
    </KeyboardAwareScrollView>
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
    fontFamily: 'Montserrat',
		fontSize: 24,
    color:'white'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
		color: 'white',
		fontFamily: 'Montserrat',
		fontSize: 30,
  },
	icon: {
    color: '#6A32E1',
  },
	textbt: {
    color: '#6A32E1',
    fontSize: 24,
    fontFamily: 'Montserrat',
    marginStart: 24,
		marginEnd: 6,
    marginBottom: 3,
  },
});
