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

export default class SignInScreen extends Component {

static navigationOptions = {
title: 'Sign In',
};

state = {
    email: '',
    password: '',
    accessToken: '',
}

handleButton(){
/**
Check for entered password / email
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
    }else if(!this.state.email.includes('@')){
            Alert.alert(
                  'Invalid email entered',
                  '',
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
    }else{
        // Post request, get access code
        Keyboard.dismiss()
        this.props.navigation.navigate('Dash')

    }
}

 render() {
    return (
      <View style={styles.container}>
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

          <Button
            title="Sign In"
            onPress={() => this.handleButton()}
            color='#000000'
            style={styles.closeButton} />

          <Button
              title="New Here? Sign up for an account."
              onPress={() => this.props.navigation.navigate('SignUp')}
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
