import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons/faCircle'
import { faCircle as faCircleSolid } from '@fortawesome/free-solid-svg-icons/faCircle'
import { faStar } from '@fortawesome/free-regular-svg-icons/faStar'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons/faStar'
import { faRepeat } from '@fortawesome/free-solid-svg-icons/faRepeat'
import moment from 'moment/moment';
import { putEvent } from '../../database'
import { useNavigation } from '@react-navigation/native';

export default function Task({ id, name, date, taskIsDone }) {
  const navigation = useNavigation();
  const newDate = new Date(date);
  const dataExemploSemHora = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate());
  const hojeSemHora = new Date();
  hojeSemHora.setHours(0, 0, 0, 0);
  const [formattedDate, setDate] = useState(formatDate(newDate))
  const [iconClikedS, setIconClikedS] = useState(false);
  const [iconClikedC, setIconClikedC] = useState(false);
  const iconClickedRef = useRef(false); 
  const [taskStyle, setTaskStyle] = useState(false);
  let [repeat, setRepeat] = useState(false)
  let isDateLate = dataExemploSemHora.getTime() < hojeSemHora.getTime();

  const taskFavorite = () => {
    setIconClikedS(!iconClikedS);
    // mover task para 'favorites'
    // update no db type = 'favorites'
  }
  const updateData = async () => {
    if(repeat){
      let dateNew = new Date(newDate);
      dateNew = moment(dateNew).add(1, 'day').format('YYYY-MM-DDThh:mm:ss');
      try {
        const responseData = await putEvent('task', JSON.stringify({ id: id, campo: "date", novoValor: dateNew }));
        console.log('Resposta PUT:', responseData);
      } catch (error) {
        console.error('Erro ao realizar PUT:', error);
      }
      setTimeout(() => {
        setDate(formatDate(new Date(dateNew)))
        setTaskStyle(!taskStyle), 
        setIconClikedC(!iconClikedC)}, 500)
    } else {
      try {
        const responseData = await putEvent('task', JSON.stringify({ id: id, campo: "list_id", novoValor: 4 }));
        console.log('Resposta PUT:', responseData);
      } catch (error) {
        console.error('Erro ao realizar PUT:', error);
      }
    }
  };
  const taskDone = () => {
    setTaskStyle(!taskStyle);
    setIconClikedC(!iconClikedC);
    iconClickedRef.current = true;
  }

  useEffect(() => {
    if (iconClickedRef.current) {
      updateData();
      iconClickedRef.current = false; // Reseta para o próximo clique
    }
  }, [iconClikedC]); 

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
        <View style={styles.taskText}>
          <Pressable onPress={() => navigation.navigate('EditTask', { name, repeat, setRepeat })}>
            <Text style={taskStyle || taskIsDone ? styles.maintextDone : styles.maintext}>{name}</Text>
          </Pressable>
          <View style={styles.rowModal}>
            <Text style={isDateLate ? styles.bottomDateLate : styles.bottomDate}>{formattedDate}</Text>
            { repeat && (
              <FontAwesomeIcon size={15} style={{color: 'white'}} icon={ faRepeat } />
            )}
          </View>
        </View>
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

function formatDate(date) {
  const semana = [
    'Domingo', 'Segunda', 'Terça', 'Quarta',
    'Quinta', 'Sexta', 'Sábado'
  ]
  const meses = [
    'Jan.', 'Fev.', 'Março', 'Abril',
    'Maio', 'Junho', 'Julho', 'Agosto',
    'Set.', 'Out.', 'Nov.', 'Dez.'
  ];

  const hoje = new Date();
  const diaSemana = semana[date.getDay()];
  const dia = date.getDate();
  const mes = meses[date.getMonth()];

  if (
    date.getDate() === hoje.getDate() &&
    date.getMonth() === hoje.getMonth() &&
    date.getFullYear() === hoje.getFullYear()
  ) {
    return `Hoje`;
  } 
  return `${diaSemana}, ${dia} de ${mes}`;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#363636',
    alignItems: 'center',
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
    marginTop: 10,
  },
  iconS: {
    color: '#6A32E1',
  },
  maintext: {
    color: '#fff',
    marginLeft: 22,
    fontSize: 20,
    fontFamily: 'Opensans',
  },
  maintextDone: {
    color: '#DEDEDE',
    marginLeft: 22,
    fontSize: 20,
    fontFamily: 'Opensans',
    textDecorationLine: 'line-through',
  },
  bottomDate: {
    fontFamily: 'Opensans',
    color: '#D3CFCF',
    marginLeft: 22,
    fontSize: 13,
    marginRight: 10
  },
  rowModal: {
    flexDirection: 'row',
  },
  bottomDateLate: {
    fontFamily: 'Opensans',
    color: 'red',
    marginLeft: 22,
    fontSize: 13,
    marginRight: 10
  },
  taskText: {
    flexDirection: 'column',
  }
});
