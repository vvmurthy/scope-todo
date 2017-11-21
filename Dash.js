import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Button
} from 'react-native';

import TasksScreen from './Tasks';

export default class DashScreen extends Component {

  static navigationOptions = {
    title: 'Dashboard',
    headerLeft: null,
  };

  state = {
      load: false,
      name: 'board1',
      admin: 'kevin.surya@gmail.com',
      members: 'Tom@gmail.com',
      tasks: [{
                  boardID: 0,
                  title: "Read a book",
                  category: 'Reading',
                  description: 'For GE',
                  completionTime: 100,
                  dueDate: 100,
                },
                {
                    boardID: 1,
                    title: "Solve Integrals",
                    category: 'Math',
                    description: 'For 126',
                    completionTime: 10,
                    dueDate: 10,
                  }]
  }

  base_url = this.props.navigation.state.params.url
  url = this.base_url + '/api/getBoardReport'
  accessToken = this.props.navigation.state.params.accessToken


  /**
  TODO: in the future, this needs to also pull the task from list
  **/
  handleButton(i){
      this.props.navigation.navigate('Tasks', {url: this.base_url, task: this.state.tasks[i], accessToken: this.accessToken})
  }

  _addTaskButton(){
          this.props.navigation.navigate('AddTask', {url: this.base_url, accessToken: this.accessToken});
  }

  _createBoard(){

  fetch(`${this.url}accessToken={this.state.accessToken}&p=%7B%22Name%22%3A%22Temp+Board%22%2C%22Admin%22%3A%22{this.state.admin}%22%7D`,
                  {
                    method: 'GET'
                  }).then((response) => console.log(response))


  }

  keyExtractor = (item, index) => item.boardID;

  renderTask = ({item}) => {
      return <TasksScreen task={item} url={this.base_url} accessToken={this.accessToken} navigation={this.props.navigation} />
    }



  render() {

    /**
    Fetch all the tasks and render them on the screen
    **/
    var funcs = []
    if(this.state.load == false){
    fetch(`${this.url}`,
                    {
                      method: 'GET'
                    }).then((response) => {this.setState({accessToken: response._bodyText});})

    this.state.load = true
    }

    var rows = []
    var i = 0

    return (
      <View style={styles.container}>

          <Button
                title="Add task"
                color='#000000'
                onPress={() => this._addTaskButton()
                }
         />

         <Button
                         title="Create board"
                         color='#000000'
                         onPress={() => this._createBoard()}
          />

         <FlatList
                   data={this.state.tasks}
                   keyExtractor={this.keyExtractor}
                   renderItem={this.renderTask}
         />


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
});