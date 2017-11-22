import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Button
} from 'react-native';

import BoardItem from './BoardItem';

export default class BoardDashScreen extends Component {

  static navigationOptions = {
    title: 'Boards',
    headerLeft: null,
  };

  state = {
      load: false,
      admin: this.props.navigation.state.params.admin,
      boards: [[{
                  boardID: 0,
                  title: "Read a book",
                  category: 'Reading',
                  description: 'For GE',
                  completionTime: 100,
                  dueDate: 100,
                },
                {
                    boardID: 0,
                    title: "Solve Integrals",
                    category: 'Math',
                    description: 'For 126',
                    completionTime: 10,
                    dueDate: 10,
                  }],
                  [{
                    boardID: 1,
                    title: "Read another book",
                    category: 'Reading',
                    description: 'For GE C',
                    completionTime: 100,
                    dueDate: 100,
                  },
                  {
                      boardID: 1,
                      title: "Solve Derivatives",
                      category: 'Math',
                      description: 'For 126',
                      completionTime: 10,
                      dueDate: 10,
                    }]]
  }

  base_url = this.props.navigation.state.params.url
  url = this.base_url + '/api/getBoardReport'
  accessToken = this.props.navigation.state.params.accessToken

  keyExtractor = (item, index) => item[0].boardID;

  renderTask = ({item}) => {
      return <BoardItem board={item} url={this.base_url} accessToken={this.accessToken} navigation={this.props.navigation} />
  }


  /**
    TODO: Fill function with getBoardReport API call
    use this.url for URL,
  **/
  _getBoardReport(){

  }

  /**
    TODO: Fill function with createBoard API call,
    place in this.state.boards
  **/
  _createBoard(){
      fetch(`${this.url}accessToken=${this.state.accessToken}&p=%7B%22Name%22%3A%22Temp+Board%22%2C%22Admin%22%3A%22${this.state.admin}%22%7D`,
                      {
                        method: 'GET'
                      }).then((response) => response)
  }


  render() {

    /**
    Loads all boards when screen is loaded
    **/
    if(this.state.load == false){
        this._getBoardReport()
        this.state.load = true
    }

    return (
      <View style={styles.container}>

         <Button
                         title="Create board"
                         color='#000000'
                         onPress={() => this._createBoard()}
          />

          <Text>Loaded Boards: </Text>

         <FlatList
                   data={this.state.boards}
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