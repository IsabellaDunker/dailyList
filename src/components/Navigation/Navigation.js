import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserName from '../Header/Username';
import ListPage from '../../pages/ListPage/ListPage';
import TaskPage from '../../pages/TaskPage/TaskPage';
import EditTask from '../Task/EditTask';
import { StyleSheet } from 'react-native';
// TodayPage from '../TodayPage/TodayPage';
// CompletedPage from '../CompletedPage/CompletedPage';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  icon: {
    marginLeft: 15,
    marginTop: 11
  },
  header: {
    backgroundColor: '#000',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ListPage"
          component={ListPage}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Tarefas"
          component={TaskPage}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="EditTask"
          component={EditTask}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;