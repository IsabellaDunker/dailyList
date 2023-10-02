import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from '../../components/Header/Header';
import Task from '../../components/Task/Task'

export default function TaskPage() {
  return (
    <View style={styles.container}>
      <View>
        <Header/>
      </View>
      <View>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  
});
