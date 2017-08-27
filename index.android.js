/**
*   https://firebase.googleblog.com/2016/01/the-beginners-guide-to-react-native-and_84.html
*
*
 */
import ReactNative from 'react-native';

/* load external files */
const StatusBar = require('./components/StatusBar');
const ActionButton = require('./components/ActionButton');
const ListItem = require('./components/ListItem');
const styles = require('./styles.js');


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
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

class GroceryApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
  }/* end constructor(props) */

  _renderItem(item) {
    return (
      <ListItem item={item} onpress={() => {}} />
    );
  }/* end _renderItem(item) */


  render() {
    return (
          <View style={styles.container}>
            <StatusBar title="Grocery List"/>
            <ListView
              datasource={this.state.dataSource}
              renderrow={this._renderItem.bind(this)}
              style={styles.listview}/>

            <ActionButton onPress={this._addItem.bind(this)} title="Add" />
          </View>
    );/* return  */
  }/* end render() */
}/* end class GroceryApp extends Component */

AppRegistry.registerComponent('GroceryApp', () => GroceryApp);
