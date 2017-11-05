import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

export default class TasksScreen extends Component {

  static navigationOptions = {
    title: 'Task',
  };

  // This needs to be inherited from Dash and passed at navigation
  state = {
    boardID: 0,
    title: 'Read a book',
    category: 'Reading',
    description: 'For GE',
    completionTime: 100,
    dueDate: 100,
  }

  handleButton(){
    /**
    This would need to handle resolving a task post request to update
    server then re-render the updated dash
    **/
    this.props.navigation.navigate('Dash')
  }

  render() {

    return (
      <View style={styles.container}>
          <Text style={styles.title}>{this.state.title}</Text>

          <Text style={styles.description}>{this.state.completionTime}</Text>
          <Text style={styles.description}>{this.state.dueDate}</Text>
          <Text style={styles.description}>{this.state.category}</Text>
          <Text style={styles.description}>{this.state.description}</Text>

          <Button
              title="Done with this task? Resolve it"
              onPress={() => this.handleButton()}
              color='#000000'
              style={styles.closeButton} />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 20
  },
  closeButton: {
      position: 'absolute',
      top: 30,
      right: 15,
      backgroundColor: 'transparent',
      justifyContent: 'center'
  },
  description: {
    fontSize: 15,
    lineHeight: 20,
    padding: 15
  }
});