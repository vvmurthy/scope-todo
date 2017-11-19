import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Alert,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Platform
} from 'react-native';

export default class SignUpScreen extends Component {

static navigationOptions = {
title: 'Sign Up',
};

state = {
    email: '',
    password: '',
    passwordVerify: '',
    name: '',
    accessToken: ''
}

base_url = this.props.navigation.state.params.url
url = this.base_url + "/api/signup"

handleButton(){
/**
Check for entered password / email / name / verify
Check verify matches password
do post request
If error, bring up message
if no error, update state with access token,
then send to dash
**/

    if(this.state.email == ''){
        Alert.alert(
          'No Email Entered',
          'Please enter an email',
          [
            {text: 'OK', onPress: () => console.log('OK pressed')},
          ],
          { cancelable: false }
        )
    }else if(this.state.password == ''){
        Alert.alert(
              'No Password Entered',
              'Please enter a password',
              [
                {text: 'OK', onPress: () => console.log('OK pressed')},
              ],
              { cancelable: false }
            )
    }else if(this.state.passwordVerify == ''){
            Alert.alert(
                  'Verify password not Entered',
                  'Please enter your password again',
                  [
                    {text: 'OK', onPress: () => console.log('OK pressed')},
                  ],
                  { cancelable: false }
                )
    }else if(this.state.name == ''){
            Alert.alert(
                  'No Name Entered',
                  'Please enter your name :)',
                  [
                    {text: 'OK', onPress: () => console.log('OK pressed')},
                  ],
                  { cancelable: false }
                )
    }else if(this.state.password != this.state.passwordVerify){
            Alert.alert(
                  'Passwords do not match',
                  '',
                  [
                    {text: 'OK', onPress: () => console.log('OK pressed')},
                  ],
                  { cancelable: false }
                )
    }else{
        // Post request, get access code
        fetch(`${this.url}?p=%7B%22email%22%3A%22${this.state.email}%22%2C%22password%22%3A%22${this.state.password}%22%2C%22passwordVerify%22%3A%22${this.state.passwordVerify}%22%2C%22name%22%3A%22${this.state.name}%22%7D`,
        {
          method: 'GET'
        }).then((response) => console.log(response._bodyText)).then((responseJS) => {this.setState({accessToken: JSON.stringify(responseJS._bodyText)});})

        console.log(this.state.accessToken)

        Keyboard.dismiss()
        this.props.navigation.navigate('Dash', {url: this.base_url, accessToken: this.state.accessToken})

    }
}

 render() {
    return (
      <View style={styles.container}>

            <TextInput
                placeholder="What is your name :)"
                style={styles.newTermInput}
                value={this.state.name}
                onChangeText={(text) => {
                  this.setState({
                    name: text
                  });
                }}
              />

            <TextInput
            placeholder="Email"
            keyboardType='email-address'
            style={styles.newTermInput}
            value={this.state.email}
            onChangeText={(text) => {
              this.setState({
                email: text
              });
            }}
          />

          <TextInput
            placeholder="Password"
            style={styles.newTermInput}
            value={this.state.password}
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({
                password: text
              });
            }}
          />

          <TextInput
              placeholder="Verify your Password"
              style={styles.newTermInput}
              value={this.state.passwordVerify}
              secureTextEntry={true}
              onChangeText={(text) => {
                this.setState({
                  passwordVerify: text
                });
              }}
            />



          <Button
            title="Sign Up"
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
