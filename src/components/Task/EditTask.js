import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, TextInput, Modal, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { putEvent } from '../../database';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons/faBell'
import { faRepeat } from '@fortawesome/free-solid-svg-icons/faRepeat'
import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar'
import { faImages } from '@fortawesome/free-solid-svg-icons/faImages'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft'
import { Button } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';
import DeleteTask from '../Modal/DeleteTask';

export default function EditTask({ route }) {
  const navigation = useNavigation();
  const { id, name, repeat, setRepeat, onTaskEdit, onDateEdit } = route.params;
  const [iconClikedC, setIconClikedC] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTimeVisible, setModalTimeVisible] = useState(false);
  const [modalRepeatVisible, setModalRepeatVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [task, setTask] = useState(name)
  
  const buttons = [
    { id: 'button1', label: 'Diariamente' },
    { id: 'button2', label: 'Semanalmente' },
    { id: 'button3', label: 'Mensalmente' },
  ];

  const [selectedButton, setSelectedButton] = useState(buttons[0].id);

  const handleButtonPress = (buttonId) => {
    setRepeat(true)
    console.log(repeat)
    setSelectedButton(buttonId);
  };
  const toogleIcon = () => {
    setIconClikedC(!iconClikedC);
  }
  const taskReminder = () => {
    // pega a dateTime do db
    // autoriza notificação no celular
  }

  const taskImage = () => {
    pickImage()
    // adiciona imagem no db
  }
  const taskDelete = () => {
    // apaga
    // volta pro inicio
  }

  const handleTimeChange = () => {
    setSelectedTime(selectedTime)
    setModalVisible(true)
    setModalTimeVisible(false)
  };

  const showTimePicker = () => {
    setShowPicker(true);
  };

  const handleConfirm = () => {
    setSelectedDate(selectedDate);
    handleSubmitDate()
    setModalVisible(false)
  };

  const handleSubmitDate = async () => {
    try {
      const responseData = await putEvent('task', JSON.stringify({ id: id, campo: "date", novoValor: selectedDate }));
      console.log('Resposta PUT:', responseData);
      onDateEdit(selectedDate)
    } catch (error) {
      console.error('Erro ao realizar PUT:', error);
    }
  };

  const handleSubmitTask = async () => {
    try {
      const responseData = await putEvent('task', JSON.stringify({ id: id, campo: "name", novoValor: task }));
      console.log('Resposta PUT:', responseData);
      onTaskEdit(task)
    } catch (error) {
      console.error('Erro ao realizar PUT:', error);
    }
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      console.warn('Acesso à galeria foi negado.');
    } else {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) {
        const selectedAsset = result.assets[0];
        setSelectedImage(selectedAsset.uri);
      }
    }
  };

  const deleteImage = async () => {
    setSelectedImage(null)
  }

  return (
    <View style={styles.editTask}>
      <View style={styles.header}>
      <Pressable onPress={() => {navigation.goBack(repeat)}}><FontAwesomeIcon size={27} style={styles.iconC} icon={ faChevronLeft} /></Pressable>
      </View>

      <View style={styles.centeredContainer}>
      <View style={styles.row}>
        <TextInput
						style={styles.input}
            onChangeText={(text) => {setTask(text)}}
            onSubmitEditing={handleSubmitTask}
						value={task}
						placeholderTextColor={'#fff'}/>
      </View>

      <View>
        <Pressable
          onPress={() => {
            taskReminder()
          }}
          style={styles.buttonEdit}>
            <FontAwesomeIcon size={23} style={styles.icon} icon={ faBell } />
            <Text style={styles.buttonEditT}>Lembrar-me </Text></Pressable>
          <Pressable 
            onPress={() => {
              setModalVisible(!modalVisible)
            }}
            style={styles.buttonEdit}>
              <FontAwesomeIcon size={23} style={styles.icon} icon={ faCalendar } />
              <Text style={styles.buttonEditT}>Data de conclusão</Text></Pressable>
          <Pressable
           onPress={() => {setModalRepeatVisible(true)}}
           style={styles.buttonEdit}>
            <FontAwesomeIcon size={23} style={styles.icon} icon={ faRepeat } />
            <Text style={styles.buttonEditT}>Repetir</Text></Pressable>
          <View style={styles.container}>
            {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}
            {selectedImage && <Pressable onPress={deleteImage}><Text style={styles.delete}>X</Text></Pressable>}
          </View>
            <Pressable
            onPress={taskImage}
            style={styles.buttonEdit}>
              <FontAwesomeIcon size={23} style={styles.icon} icon={ faImages } />
              <Text style={styles.buttonEditT}>Adicionar imagem</Text></Pressable>
          <DeleteTask/>
      </View>
      </View>

      <Modal animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <View style={styles.rowModal}>
          <Pressable
              style={styles.button}
              onPress={
                () => {
                  setModalVisible(!modalVisible)
                }}>
              <Text style={styles.cancelStyle}>X</Text>
            </Pressable>
          <Pressable onPress={handleConfirm}><Text style={styles.textStyle}>Definir</Text></Pressable>
          </View>
          <DateTimePicker
            value={selectedDate || new Date()}
            mode="date"
            onChange={(event, date) => setSelectedDate(date)}
            display="spinner"
          />
          <Pressable onPress={() => {setModalTimeVisible(true),
          setModalVisible(false),
          showTimePicker}}><Text style={styles.cancelStyle}>Escolher um horário</Text></Pressable>
          </View>
        </View>
      </Modal>

      <Modal animationType="slide"
        transparent={true}
        visible={modalTimeVisible}
        onRequestClose={() => {
          setModalTimeVisible(!modalTimeVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Pressable onPress={handleTimeChange}><Text style={styles.textStyle}>Concluído</Text></Pressable>
              <DateTimePicker
                value={selectedTime}
                mode="time"
                is24Hour={true}
                display="spinner"
                onChange={(event, time) => setSelectedTime(time)}
              />
          </View>
        </View>
      </Modal>

      <Modal animationType="slide"
        transparent={true}
        visible={modalRepeatVisible}
        onRequestClose={() => {
          setModalRepeatVisible(!modalRepeatVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <View style={styles.rowModal}>
            <Pressable onPress={() => {setModalRepeatVisible(false)}}><Text style={styles.textRemoveStyle}>Remover</Text></Pressable>
            <Pressable onPress={() => {setModalRepeatVisible(false)}}><Text style={styles.textStyle}>Concluído</Text></Pressable>
          </View>
          {buttons.map((button) => (
            <Button
              style={{backgroundColor: 'rgba(0, 0, 0, 0)',textAlign: 'left'}}
              key={button.id}
              mode="contained"
              onPress={() => handleButtonPress(button.id)}
              labelStyle={{
                fontWeight: 'bold',
                fontSize: 17,
                marginTop: 20,
                color: selectedButton === button.id ? '#fff' : '#434AED',
              }}
            >
              {button.label} 
            </Button>
          ))}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 80,
    height: 80,
    marginLeft: 20,
    marginBottom: 30,
  },
  delete: {
    color:'#6A6A6A',
    fontSize: 18,
    marginRight: 40,
    marginTop: 30,
  },
  editTask: {
    backgroundColor: '#282727',
    height: 1000,
  },
  header: {
    marginTop: 50,
    marginLeft: 20,
  },
  maintext: {
    color: '#fff',
    marginLeft: 22,
    fontSize: 20,
    fontFamily: 'Opensans'
  },
  icon: {
    color:'#6A6A6A',
    marginRight: 15,
    marginTop: 3,
    marginBottom: 10,
  },
  iconC: {
    color: '#fff',
    fontSize: 32,
  },
  input: {
    height: 60,
		width: 200,
		borderRadius: 6,
    padding: 15,
		fontSize: 20,
    color:'white'
  },
  row: {
    flexDirection: 'row',
    marginBottom: 35,
    marginTop: 30,
    marginLeft: 20,
  },
  buttonEdit: {
    flexDirection: 'row',
    marginBottom: 35,
    marginLeft: 20,
    borderBottomWidth : 0.8,
    borderColor: '#3D3D3D',
    marginRight: 20,
  },
  buttonEditT: {
    color:'#6A6A6A',
    fontFamily: 'Opensans',
    fontSize: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    height: 350,
    margin: 20,
    backgroundColor: '#363636',
    borderRadius:10,
    padding: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    elevation: 2,
    marginTop: 2,
    marginBottom: 20,
  },
  rowModal: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textStyle: {
    color: '#434AED',
    fontWeight: 'bold',
    fontSize: 17,
  },
  cancelStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  selectedRepeat: {
    color: '#434AED',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 20,
  },
  textRemoveStyle : {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 17,
  }
});
