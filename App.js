import React from 'react';
import { Alert, Button, StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomColor: null
    }
  }

  loginPressed() {
    Alert.alert('Logging in');
  }

  changeBackgroundColor = () => {
    this.setState({ randomColor: this.getRandomColor() })
  }

  getRandomColor = () => {
    return(
      "rgb(" + Math.floor(Math.random() * 256) + "," +
      Math.floor(Math.random() * 256) + "," +
      Math.floor(Math.random() * 256) + ")"
    );
  }

  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.state.randomColor}]}>
        <Button 
        title='Login'
        color='green'
        onPress={() => {
         this.loginPressed();
        }}/>

        <TouchableNativeFeedback
          onPress={this.changeBackgroundColor}>
          <Text style={styles.textButton}>Change Background</Text>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    marginTop: 50,
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'green',
    color: 'white',
    paddingHorizontal: 8,
    paddingVertical:7,
    borderRadius:3
  }
});
