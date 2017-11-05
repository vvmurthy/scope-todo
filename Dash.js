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
    headerLeft: (<Button title="+" onPress={params.addTaskButton ? params.addTaskButton : () => null} />),
  };

  /**
  TODO: in the future, this needs to also pull the task from list
  **/
  handleButton(){
      this.props.navigation.navigate('Tasks');
  }

  _addTaskButton(){
        this.props.navigation.navigate('AddTask');
  }

  render() {

    this.props.navigation.setParams({ addTaskButton: this._addTaskButton });

    return (
      <View style={styles.container}>
          <Text style={styles.title}>{"placeholder"}</Text>

          <Button
                  title="View One Task"
                  onPress={() => this.handleButton()
                  }
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