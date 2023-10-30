import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserName from '../../components/Header/Username';
import ListPage from '../ListPage/ListPage';
import TaskPage from '../TaskPage/TaskPage';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
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
          name="Home"
          component={ListPage}
          options={{
            headerTitle: props => <UserName {...props} />,
            headerLeft: () => (
              <Icon
                name="user"
                size={30}
                color="#fff"
                style={styles.icon}
                onPress={() => {
                  // Adicione o manipulador onPress do seu ícone aqui
                }}
              />
            ),
            headerStyle: styles.header,
          }}
        />
        <Stack.Screen
          name="Tarefas"
          component={TaskPage}
          options={{
            headerTransparent: true, // Deixa o cabeçalho transparente
            headerTintColor: '#6A32E1', // Altera a cor dos botões do cabeçalho para branco
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
