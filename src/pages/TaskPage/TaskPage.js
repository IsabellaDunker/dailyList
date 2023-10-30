import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import background1 from '../../../assets/background1.png'
import { index } from '../../database'

import Header from '../../components/Header/Header';
import Task from '../../components/Task/Task'
import NewTask from '../../components/Modal/NewTask';

export default function TaskPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState(background1);

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
  }, [])

  const selectImage = (imageUri) => {
    setBackgroundImage(imageUri);
  };
  
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}>
				<View>
					<Header onSelectImage={selectImage} />
				</View>
				{ loading ? (<Text></Text>) : (
          data.map((task) => (
            <View key={task.id}>
              <Task task={task.name}/>
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
