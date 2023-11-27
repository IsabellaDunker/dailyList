import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import background1 from '../../../assets/background1.png'

import Header from '../../components/Header/Header';
import Task from '../../components/Task/Task'
import NewTask from '../../components/Modal/NewTask';

export default function TaskPage({ route }) {
  const { list_id, title, data, loading, taskIsDone } = route.params;
  const [backgroundImage, setBackgroundImage] = useState(background1);

  const selectImage = (imageUri) => {
    setBackgroundImage(imageUri);
  };
  
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}>
				<View>
					<Header title={title} onSelectImage={selectImage}/>
				</View>
				{ loading ? (<Text></Text>) : (
          data.map((task) => (
            <View key={task.id}>
              <Task id={task.id} name={task.name} date={task.date} taskIsDone={taskIsDone}/>
            </View>
          ))
        )}
        <View style={styles.footer}>
          <NewTask list_id={list_id}/>
        </View>
			</ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
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
    fontFamily: 'Opensans',
    marginStart: 24,
		marginEnd: 6,
    marginBottom: 3,
  },
	textDone: {
		color: '#fff',
		fontSize: 16,
    fontFamily: 'Opensans',
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
