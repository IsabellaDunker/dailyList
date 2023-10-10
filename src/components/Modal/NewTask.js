import React, { useState, useEffect } from 'react';
import {TextInput, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useFonts } from 'expo-font';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'

export default function NewTask(){
	
  const [modalVisible, setModalVisible] = useState(false);
	const [task, onChangeTask] = React.useState('');

	const [loaded] = useFonts({
    Montserrat: require('../../../assets/fonts/OpenSans-SemiBold.ttf'),
  });
    
    if (!loaded) {
    return null;
  }

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
						<TextInput
						style={styles.input}
						onChangeText={onChangeTask}
						value={task}
						placeholder="Adicionar tarefa"
						placeholderTextColor={'white'}/>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Concluído</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
			<View>
				<Pressable 
				style={styles.buttonOpen}
				onPress={() => setModalVisible(true)}>
					<Text style={styles.textbt}>Nova tarefa</Text>
					<FontAwesomeIcon size={20} style={styles.icon} icon={ faPlus } />
				</Pressable>
			</View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#363636',
    borderRadius: 20,
    padding: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
	input: {
    height: 40,
		width: 200,
    margin: 12,
		borderRadius: 6,
    padding: 15,
		borderBottomColor: '#999999',
    borderBottomWidth: 0.4,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    height: 62,
    backgroundColor: '#363636',
    marginStart: 45,
    marginEnd: 45,
    marginBottom: 15,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonClose: {
    backgroundColor: '#6A32E1',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
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
