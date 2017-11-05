import { StackNavigator } from 'react-navigation';
import TasksScreen from './Tasks';
import DashScreen from './Dash';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import AddTaskScreen from './AddTaskScreen';

const App = StackNavigator({
  SignIn: {screen: SignInScreen},
  SignUp: {screen: SignUpScreen},
  Dash: { screen: DashScreen },
  Tasks: { screen: TasksScreen },
  AddTask: {screen: AddTaskScreen},
});

export default App;