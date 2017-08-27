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

const styles = require('./styles.js')

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

class GroceryApp extends Component {
  render() {
    return (
      <View style="{styles.container}">
          <Text>I’m a container lol!</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('GroceryApp', () => GroceryApp);
