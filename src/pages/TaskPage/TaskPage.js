import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'
import { useFonts } from 'expo-font';
import background from '../../../assets/background1.png'

import Header from '../../components/Header/Header';
import Task from '../../components/Task/Task'
import TaskDone from '../../components/Task/TaskDone';

export default function TaskPage() {
    const [loaded] = useFonts({
        Montserrat: require('../../../assets/fonts/OpenSans-SemiBold.ttf'),
      });
      
        if (!loaded) {
        return null;
      }
  
  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode="cover" style={styles.image}>
				<View>
					<Header/>
				</View>
				<View>
					<Task/>
					<Task/>
					<Task/>
					<Task/>
				</View>
				<View style={styles.footer}>
					<TouchableOpacity style={styles.bt}>
							<Text style={styles.textbt}>Nova tarefa</Text>
							<FontAwesomeIcon size={20} style={styles.icon} icon={ faPlus } />
					</TouchableOpacity>
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
