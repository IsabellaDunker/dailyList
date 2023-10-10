import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';import { useFonts } from 'expo-font';
import background from '../../../assets/background1.png'

import Header from '../../components/Header/Header';
import Task from '../../components/Task/Task'
import NewTask from '../../components/Modal/NewTask';

const url = "https://s92jwwbki8.execute-api.us-east-2.amazonaws.com/task/task"

export default function TaskPage() {

  let [res, setRes] = useState();
  const [loading, setLoading] = useState(true)

  useFonts({
    Montserrat: require('../../../assets/fonts/OpenSans-SemiBold.ttf'),
  });

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then((result) => setRes(result))
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
  }, []);

  console.log(res);
  
  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode="cover" style={styles.image}>
				<View>
					<Header/>
				</View>
				{ loading ? (<Text>Loading...</Text>) : (
          res.map((post) => (
            <View>
              <Task task={post.name}/>
            </View>
          ))
        )}
        <View style={styles.footer}>
          <NewTask/>
        </View>
			</ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
	 image: {
    flex: 1,
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bt: {
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
  textbt: {
    color: '#6A32E1',
    fontSize: 24,
    fontFamily: 'Montserrat',
    marginStart: 24,
		marginEnd: 6,
    marginBottom: 3,
  },
	textDone: {
		color: '#fff',
		fontSize: 16,
    fontFamily: 'Montserrat',
    marginStart: 24,
		marginEnd: 6,
    marginBottom: 3,
	},
  icon: {
    color: '#6A32E1',
  },
	iconDone: {
		color: '#fff',
	},
	done: {
		flexDirection: 'row',
		backgroundColor: '#363636',
		height: 30,
		marginTop: 10,
		marginStart: 10,
		width: 150,
		borderRadius: 6,
		alignItems: 'center',
		justifyContent: 'center'
	}

  
});
