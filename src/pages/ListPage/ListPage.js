import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { index } from '../../database'
import NewList from '../../components/Modal/NewList';

export default function ListPage({ navigation }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  let todayData, importantData, doneData;

  useEffect(() =>{
    const fetchData = async () => {
      try {
        const data = await index('task');
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error)
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // useEffect(() =>{
  //   const fetchData = async () => {
  //     try {
  //       const data = await index('list');
  //       setData(data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error)
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [])

  return (
    <View style={styles.container}>
      { loading ? ( <View/> ) : (
        todayData = data.filter(item => item.list_id === 1),
        importantData = data.filter(item => item.list_id === 3),
        doneData = data.filter(item => item.list_id === 4),
      <View  style={styles.cardContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Tarefas', { title:"Hoje", data:todayData, loading })} style={styles.card}>
        <View style={styles.cardContent}>
          <Icon name="calendar" size={30} color="#fff" />
          <Text style={styles.cardText}>Para hoje</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Tarefas', { title:"Tarefas", data, loading })} style={styles.card}>
          <View style={styles.cardContent}>
            <Icon name="list-ul" size={30} color="#fff" />
            <Text style={styles.cardText}>Tarefas</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Tarefas', { title:"Importantes", data:importantData, loading })} style={styles.card}>
          <View style={styles.cardContent}>
            <Icon name="star" size={30} color="#fff" />
            <Text style={styles.cardText}>Importantes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Tarefas', { title:"Concluídas", data:doneData, loading })} style={styles.card}>
          <View style={styles.cardContent}>
            <Icon name="check-square" size={30} color="#fff" />
            <Text style={styles.cardText}>Concluídas</Text>
          </View>
        </TouchableOpacity>
      </View>  
      )}
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
  },
  card: {
    marginVertical: 10,
    paddingHorizontal: 100,
    backgroundColor: '#333',
    borderRadius: 15,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    padding: 20,
  },
  cardContainer: {
    marginTop:20,
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