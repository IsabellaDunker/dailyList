import React, { useState } from 'react'
import {Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan'

export default function DeleteTask() {
  const [modalVisible, setModalVisible] = useState(false);

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
            <Text style={styles.mainText}>Tem certeza que deseja deletar essa tarefa? </Text>
            <Pressable><Text style={styles.bt}>Excluir</Text></Pressable>
            <Pressable onPress={() => {setModalVisible(false)}}><Text style={styles.btC}>Cancelar</Text></Pressable>
          </View>
        </View>
      </Modal>
      <View>
      <Pressable
           onPress={()=>{setModalVisible(true)}}
           style={styles.buttonEdit}>
            <FontAwesomeIcon size={23} style={styles.icon} icon={ faTrashCan } />
            <Text style={styles.buttonEditT}>Excluir</Text></Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
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
  mainText: {
    color: '#fff',
    fontFamily: 'Opensans',
    fontSize: 18,
    marginBottom: 10,
  },
  bt: {
    color: 'red',
    fontFamily: 'Opensans',
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center'
  },
  btC: {
    color: '#434AED',
    fontFamily: 'Opensans',
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center'
  },
  icon: {
    color:'#6A6A6A',
    marginRight: 15,
    marginTop: 3,
    marginBottom: 10,
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
})
