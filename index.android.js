/**
*   https://firebase.googleblog.com/2016/01/the-beginners-guide-to-react-native-and_84.html
*
*
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDgfH3WwcpX50T-9pXQowY0hU3yf1yQ2Os",
  authDomain: "groceryapp-b6099.firebaseapp.com",
  databaseURL: "https://groceryapp-b6099.firebaseio.com",
  projectId: "groceryapp-b6099",
  storageBucket: "groceryapp-b6099.appspot.com",
  messagingSenderId: "747720006911"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class GroceryApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('GroceryApp', () => GroceryApp);
