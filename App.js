import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import TasksScreen from './Tasks';
import DashScreen from './Dash';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import AddTaskScreen from './AddTaskScreen';
import FullTaskScreen from './FullTaskScreen';

const App = StackNavigator({
  SignIn: {screen: SignInScreen},
  SignUp: {screen: SignUpScreen},
  Dash: { screen: DashScreen },
  Tasks: { screen: TasksScreen },
  AddTask: {screen: AddTaskScreen},
  FullTask: {screen: FullTaskScreen},
},
{
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    }
});

export default App;