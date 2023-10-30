import { useState, useEffect } from 'react';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { index } from '../../database'
import Task from '../../components/Task/Task'
import NewList from '../../components/Modal/NewList';

export default function ListPage({ navigation }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    const fetchData = async () => {
      try {
        const data = await index('list');
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error)
        setLoading(false);
      }
    };

    fetchData();
  }, [])

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Hoje')} style={styles.card}>
        <View style={styles.cardContent}>
          <Icon name="calendar" size={30} color="#fff" />
          <Text style={styles.cardText}>Para hoje</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Tarefas')} style={styles.card}>
        <View style={styles.cardContent}>
          <Icon name="list-ul" size={30} color="#fff" />
          <Text style={styles.cardText}>Tarefas</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Concluídas')} style={styles.card}>
        <View style={styles.cardContent}>
          <Icon name="check-square" size={30} color="#fff" />
          <Text style={styles.cardText}>Concluídas</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.footer}>
        <NewList/>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    marginVertical: 10,
    paddingHorizontal: 100,
    backgroundColor: '#333',
    borderRadius: 15,
    width: '100%',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    padding: 20
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardText: {
    marginLeft: 10,
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
  },
});

