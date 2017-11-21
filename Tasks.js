import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text
} from 'react-native';

export default class TasksScreen extends Component {

 state = {
     boardID: this.props.task.boardID,
     title: this.props.task.title,
     category: this.props.task.category,
     description: this.props.task.description,
     completionTime: this.props.task.completionTime,
     dueDate: this.props.task.dueDate,
   }

  base_url = this.props.url
  url = this.base_url + ''
  accessToken = this.props.accessToken

  handleButton(){
    this.props.navigation.navigate('FullTask', {task: this.state, url: this.base_url, accessToken: this.accessToken})
  }

  render() {

    return (
      <View style={styles.container}>

          <Button
                        title={this.state.title}
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