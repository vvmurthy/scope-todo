import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text
} from 'react-native';

export default class FullTaskScreen extends Component {

  static navigationOptions = {
    title: 'Task',
  };

 state = {
     boardID: this.props.navigation.state.params.task.boardID,
     title: this.props.navigation.state.params.task.title,
     category: this.props.navigation.state.params.task.category,
     description: this.props.navigation.state.params.task.description,
     completionTime: this.props.navigation.state.params.task.completionTime,
     dueDate: this.props.navigation.state.params.task.dueDate,
   }

  base_url = this.props.navigation.state.params.url
  url = this.base_url + ''
  accessToken = this.props.navigation.state.params.accessToken

  /**
  TODO: API Call to remove task
  **/
  handleButton(){
    this.props.navigation.navigate('Dash', {url: this.base_url, accessToken: this.accessToken})
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