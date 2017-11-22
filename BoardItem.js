import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text
} from 'react-native';

export default class BoardItem extends Component {

 state = {
     board: this.props.board
   }

  base_url = this.props.url
  accessToken = this.props.accessToken

  handleButton(){
    this.props.navigation.navigate('Dash', {tasks: this.state.board, url: this.base_url, accessToken: this.accessToken})
  }

  render() {

    return (
      <View style={styles.container}>

          <Button
                        title={this.state.board[0].boardID.toString()}
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