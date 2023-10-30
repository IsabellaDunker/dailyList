import React, { useState } from 'react';
import {TextInput, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons/faEllipsis'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons/faPenToSquare'
import { faPalette} from '@fortawesome/free-solid-svg-icons/faPalette'
import { faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare'
import { faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight'

export default function Menu(){
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
          <Pressable
              style={styles.button}
              onPress={
                () => {
                  setModalVisible(!modalVisible)
                }}>
              <Text style={styles.textStyle}>X</Text>
            </Pressable>
            <Pressable style={styles.menuItens}>
                <FontAwesomeIcon size={20} style={styles.icon} icon={ faPenToSquare } />
                <Text style={styles.modalText}>Editar</Text>
            </Pressable>
            <Pressable style={styles.menuItens}>
                <FontAwesomeIcon size={20} style={styles.icon} icon={ faPalette } />
                <Text style={styles.modalText}>Mudar tema</Text>
                <View style={styles.viewiconR}>
                <FontAwesomeIcon size={18} style={styles.iconRight} icon={ faChevronRight } />
                </View>
            </Pressable>
            <Pressable style={styles.menuItens}>
                <FontAwesomeIcon size={20} style={styles.icon} icon={ faArrowUpRightFromSquare } />
                <Text style={styles.modalText}>Compartilhar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
			<View>
				<Pressable
				onPress={() => setModalVisible(true)}>
					<FontAwesomeIcon size={25} style={styles.iconOpen} icon={ faEllipsis } />
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
    height: 300,
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
  menuItens: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    color: 'white',
    marginRight:25,
  },
  iconOpen: {
    color: '#6A32E1'
  },
  viewiconR: {
    textAlign:'right',
    position:'absolute',
    right:5,
  },
  iconRight: {
    marginTop: 4,
    color:'#6A6A6A',
  },
  button: {
    borderRadius: 20,
    elevation: 2,
    marginTop: 2,
    marginBottom: 20,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'right',
    fontSize: 17,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'left',
	color: 'white',
	fontFamily: 'Montserrat',
	fontSize: 18,
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
