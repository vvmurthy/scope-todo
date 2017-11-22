import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button
} from 'react-native';


export default class BoardOptionsScreen extends Component {

  static navigationOptions = {
    title: 'Boards',
  };

  state = {
      load: false,
      added_user: '',
      boardID: this.props.navigation.state.params.boardID,
  }

  base_url = this.props.navigation.state.params.url
  url = this.base_url + '/api/getBoardReport'
  accessToken = this.props.navigation.state.params.accessToken


  /**
    TODO: Fill function with addMemberToBoard API call
    use this.url for URL,
  **/
  _addMemberToBoard(){

  }

  /**
      TODO: Fill function with addAdminToBoard API call
      use this.url for URL,
  **/
  _addAdminToBoard(){

  }

  /**
    TODO: Fill function with deleteAdminFromBoard API call
    use this.url for URL,
  **/
  _deleteAdminFromBoard(){

  }


  /**
    TODO: Fill function with deleteMemberFromBoard API call
    use this.url for URL,
    **/
  _deleteMemberFromBoard(){

  }

  /**
  TODO: Fill function with deleteBoard API Call
  **/
  _deleteBoard(){

  }


  render() {

    return (
      <View style={styles.container}>

         <TextInput
             placeholder="User"
             keyboardType='email-address'
             style={styles.newTermInput}
             value={this.state.email}
             onChangeText={(text) => {
               this.setState({
                 added_user: text
               });
             }}
         />

         <Button
                         title="Add as Member"
                         color='#000000'
                         onPress={() => this._addMemberToBoard()}
          />

          <Button
                       title="Delete Member"
                       color='#000000'
                       onPress={() => this._deleteMemberFromBoard()}
          />

          <Button
                       title="Add as Admin"
                       color='#000000'
                       onPress={() => this._addAdminToBoard()}
          />

          <Button
                       title="Delete Admin"
                       color='#000000'
                       onPress={() => this._deleteAdminFromBoard()}
          />

          <Button
                     title="Delete board"
                     color='#000000'
                     onPress={() => this._deleteBoard()}
          />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
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
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 20
  },
});