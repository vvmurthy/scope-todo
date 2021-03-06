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
    title: 'Task Dashboard',
  };

  state = {
      load: false,
      tasks: this.props.navigation.state.params.tasks
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

  _optionsButton(){
        this.props.navigation.navigate('BoardOptions', {url: this.base_url, accessToken: this.accessToken, boardID: this.state.tasks[0].boardID});
  }

  keyExtractor = (item, index) => item.title;

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
                 title="Edit Board Sharing Options"
                 color='#000000'
                 onPress={() => this._optionsButton()
                 }
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