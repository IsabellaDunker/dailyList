import React, { useState, useEffect } from 'react';
import {Image, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons/faEllipsis'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons/faPenToSquare'
import { faPalette} from '@fortawesome/free-solid-svg-icons/faPalette'
import { faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare'
import { faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft'
import background1 from '../../../assets/background1.png'
import background2 from '../../../assets/background2.jpg'
import background3 from '../../../assets/background3.jpg'
import background4 from '../../../assets/background4.jpg'

export default function Menu({ onSelectImage }){
  const [modalVisible, setModalVisible] = useState(false);
  const [modalThemeVisible, setModalThemeVisible] = useState(false);
  const [modalColorVisible, setModalColorVisible] = useState(false);

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
            <Pressable 
            style={styles.menuItens}
            onPress={() => {setModalThemeVisible(true),
              setModalVisible(false)}}>
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

      <Modal
       animationType="slide"
       transparent={true}
       visible={modalThemeVisible}
       onRequestClose={() => {
         setModalThemeVisible(!modalThemeVisible);
       }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.titleContainer}>
              <Pressable onPress={() => {
                setModalThemeVisible(false), 
                setModalColorVisible(false),
                setModalVisible(true)}}>
                  <FontAwesomeIcon style={styles.iconBack} size={20} icon={faChevronLeft}/>
              </Pressable>
              <Text style={styles.title}>Mudar o tema de fundo</Text>
            </View>
            <View style={styles.imageButtons}>
              <Pressable onPress={() => {
                setModalThemeVisible(true), 
                setModalVisible(false),
                setModalColorVisible(false)}} 
                style={styles.themes}><Text>Fundo</Text>
              </Pressable>
              <Pressable onPress={() => {
                setModalColorVisible(true),
                setModalThemeVisible(false), 
                setModalVisible(false)}} 
                style={styles.themes}><Text>Cores</Text>
              </Pressable>
            </View>
            {/* <Pressable>Cor</Pressable> */}
            <View style={styles.imageButtons}>
              <Pressable onPress={() => onSelectImage(background1)}><Image style={styles.image} source={background1} /></Pressable>
              <Pressable onPress={() => onSelectImage(background2)}><Image style={styles.image} source={background2} /></Pressable>
              <Pressable onPress={() => onSelectImage(background3)}><Image style={styles.image} source={background3} /></Pressable>
              <Pressable onPress={() => onSelectImage(background4)}><Image style={styles.image} source={background4} /></Pressable>
              <Pressable><Text style={styles.imagePlus}>+</Text></Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
       animationType="slide"
       transparent={true}
       visible={modalColorVisible}
       onRequestClose={() => {
         setModalColorVisible(!modalColorVisible);
       }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.titleContainer}>
              <Pressable onPress={() => {
                setModalColorVisible(false), 
                setModalThemeVisible(false),
                setModalVisible(true)}}>
                  <FontAwesomeIcon style={styles.iconBack} size={20} icon={faChevronLeft}/>
              </Pressable>
              <Text style={styles.title}>Mudar a cor</Text>
            </View>
            <View style={styles.imageButtons}>
              <Pressable onPress={() => {
                setModalThemeVisible(true), 
                setModalVisible(false),
                setModalColorVisible(false)}} 
                style={styles.themes}><Text>Fundo</Text>
              </Pressable>
              <Pressable onPress={() => {
                setModalColorVisible(true),
                setModalThemeVisible(false), 
                setModalVisible(false)}} 
                style={styles.themes}><Text>Cores</Text>
              </Pressable>
            </View>
            {/* <Pressable>Cor</Pressable> */}
            <View style={styles.imageButtons}>
              <Pressable style={[styles.colors, { backgroundColor: '#6A32E1' }]} onPress={() => {}}></Pressable>
              <Pressable style={[styles.colors, { backgroundColor: '#C532E9' }]} onPress={() => {}}></Pressable>
              <Pressable style={[styles.colors, { backgroundColor: '#E9327F' }]} onPress={() => {}}></Pressable>
              <Pressable style={[styles.colors, { backgroundColor: '#E44D56' }]} onPress={() => {}}></Pressable>
              <Pressable style={[styles.colors, { backgroundColor: '#04B937' }]} onPress={() => {}}></Pressable>
              <Pressable style={[styles.colors, { backgroundColor: '#D3CFCF' }]} onPress={() => {}}></Pressable>
            </View>
          </View>
        </View>
      </Modal>
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
  iconBack: {
    marginTop: 2,
    color:'#6A6A6A',
  },
  themes: {
    backgroundColor:'#6A6A6A',
    padding: 7,
    borderRadius: 20,
    marginBottom: 20,
    marginRight: 15,
    fontSize: 16,
    color: 'white',
    fontFamily: 'Opensans'
  },
  imageButtons: {
    flexDirection: 'row'
  },
  imagePlus: {
    fontSize: 20,
    color: '#fff',
  },
  colors: {
    borderRadius: 50,
    width: 50,
    height: 50,
    marginRight: 20,
  },
  image: {
    borderRadius: 50,
    width: 50,
    height: 50,
    marginRight: 20,
  },
  imagePlus: {
    fontSize: 30,
    color: 'white',
    marginTop: 8,
    marginLeft: 10,
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
    fontFamily: 'Opensans',
    fontSize: 18,
  },
	textbt: {
    color: '#6A32E1',
    fontSize: 24,
    fontFamily: 'Opensans',
    marginStart: 24,
	  marginEnd: 6,
    marginBottom: 3,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  title: {
    color:'white',
    fontFamily: 'Opensans',
    fontSize: 18,
    marginLeft: 20,
    marginBottom: 10,
  },
});
