import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button
} from 'react-native';

export default class DashScreen extends Component {

  static navigationOptions = {
    title: 'Dashboard',
    headerLeft: null,
  };

  state = {
      load: false,
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

   componentDidMount() {
      // We can only set the function after the component has been initialized
      this.props.navigation.setParams({ addTaskButton: this._addTaskButton });
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

    for(i = 0; i < this.state.tasks.length; i++){

                 rows.push(<Button
                    title={this.state.tasks[i].title}
                    color='#000000'
                    onPress={() => this.handleButton(0)}
                  />)

             }

    return (
      <View style={styles.container}>

          <Button
                title="Add task"
                color='#000000'
                onPress={() => this._addTaskButton()
                }
         />

         {rows}


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