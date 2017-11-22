import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import TasksScreen from './Tasks';
import BoardDashScreen from './BoardDash';
import DashScreen from './Dash';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import AddTaskScreen from './AddTaskScreen';
import FullTaskScreen from './FullTaskScreen';
import BoardOptionsScreen from './BoardOptions'

const App = StackNavigator({
  SignIn: {screen: SignInScreen},
  SignUp: {screen: SignUpScreen},
  Dash: { screen: DashScreen },
  BoardDash: {screen: BoardDashScreen},
  BoardOptions: {screen: BoardOptionsScreen},
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