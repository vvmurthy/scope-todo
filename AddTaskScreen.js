import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Button,
  Keyboard,
  Platform
} from 'react-native';

export default class AddTaskScreen extends Component {

static navigationOptions = {
title: 'Add a Task',
};

state = {
    boardID: '',
    name: '',
    category: '',
    dueDate: 0,
    completionTime: 0,
    description: '',
}

base_url = this.props.navigation.state.params.url
url = this.base_url + '/api/getBoardReport'
accessToken = this.props.navigation.state.params.accessToken

/**
TODO: Add addTask API call here
**/
_addtask(){
  fetch(`${this.url}?accessToken=${this.accessToken}&p=%7B%22BoardId%22%3A%22${this.state.boardID}%22%2C%22Name%22%3A%22${this.state.name}%22%2C%22Category%22%3A%22${this.state.category}%22%2C%22DueDate%22%3A${this.state.dueDate}%2C%22CompletionTime%22%3A${this.state.completionTime}%2C%22Description%22%3A%22${this.state.description}%22%7D`,
  {
    method: 'POST'
  }).then((response) => {console.log(response);})


}


handleButton(){
/**
Check for entered fields (name, category, dueDate, completionTime are required)
Post call / send back to dash
**/

    if(this.state.name == ''){
        Alert.alert(
          'No Name Entered',
          'Please name this task',
          [
            {text: 'OK', onPress: () => console.log('OK pressed')},
          ],
          { cancelable: false }
        )
    }else if(this.state.category == ''){
        Alert.alert(
              'No category Entered',
              'Please give a category for this task',
              [
                {text: 'OK', onPress: () => console.log('OK pressed')},
              ],
              { cancelable: false }
            )
    }else if(this.state.dueDate == 0){
        Alert.alert(
              'No due date Entered',
              'Please give a due date for this task',
              [
                {text: 'OK', onPress: () => console.log('OK pressed')},
              ],
              { cancelable: false }
            )
    }else if(this.state.completionTime == 0){
        Alert.alert(
              'No completion time Entered',
              'Please give a completion time for this task',
              [
                {text: 'OK', onPress: () => console.log('OK pressed')},
              ],
              { cancelable: false }
            )
    }else{
        Keyboard.dismiss()
        this.props.navigation.navigate('Dash')
        this._addtask()
    }
}

 render() {
    return (
      <View style={styles.container}>
            <TextInput
            placeholder="Name of Task"
            style={styles.newTermInput}
            value={this.state.name}
            onChangeText={(text) => {
              this.setState({
                name: text
              });
            }}
          />

          <TextInput
          placeholder="Description of the Task"
          style={styles.newTermInput}
          value={this.state.description}
          onChangeText={(text) => {
            this.setState({
              description: text
            });
          }}
        />

        <TextInput
          placeholder="Category of the Task"
          style={styles.newTermInput}
          value={this.state.category}
          onChangeText={(text) => {
            this.setState({
              category: text
            });
          }}
        />

        <TextInput
          placeholder="Due date"
          style={styles.newTermInput}
          value={this.state.dueDate}
          onChangeText={(text) => {
            this.setState({
              dueDate: parseInt(text)
            });
          }}
        />

        <TextInput
          placeholder="Time to Completion"
          style={styles.newTermInput}
          value={this.state.dueDate}
          onChangeText={(text) => {
            this.setState({
              dueDate: parseInt(text)
            });
          }}
        />

          <Button
            title="Add this task"
            onPress={() => this.handleButton()}
            color='#000000'
            style={styles.closeButton} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  newTermInput: {
    backgroundColor: '#ffffff',
    borderColor: '#F2F2F2',
    borderWidth: 1,
    padding: 15,
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 18
  },
  closeButton: {
    position: 'absolute',
    top: 30,
    right: 15,
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  closeButtonText: {
    textAlign: 'center',
    fontSize: 40
  }
});
