/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, NativeModules } from 'react-native';
// import KinNative from "react-native-kin-sdk";

const KinNative = NativeModules.KinNativeModule,
  Kin = NativeModules.KinModule;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }
  startKin = () => {
    // let jwt = "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6InJzNTEyXzAifQ.eyJpc3MiOiJ0ZXN0IiwiZXhwIjoxNTYwMjM5MDIyLCJpYXQiOjE1NTkwODk5OTksInN1YiI6InJlZ2lzdGVyIiwidXNlcl9pZCI6InRlc3RfdXNlcl9pZF8xIn0.qUEePUhM0OBR1uRNKNE5aCpyAnIawqaUtOYRr56-EODtQBBb51XM8PlXjBUHZ1L4aeC9oh-SfGmthlNKapQNjLYLyCzigO4Az98P2r-3BygtB6BmIt0EoLmlgg9qQs9_xxWoJSf3iQCuVhJWkV2ple7BVSXJZqdJ5-ZzJgMID0w";
    // Kin.start(jwt, "development", (error, result, desc) => {
    //   console.log(error);
    //   console.log(result);
    //   console.log(desc);
    // });
    KinNative.createUserAccount((error, publicAddress, accountNumber) => {
      console.log(error);
      console.log(publicAddress);
      console.log(accountNumber);
    });
  }
  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>{this.state.message}</Text>
        <TouchableOpacity onPress={this.startKin}>
          <Text>Button</Text>
        </TouchableOpacity>
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
