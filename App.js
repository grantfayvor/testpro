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

const kinConfig = {
  appId: "test",
  environment: "DEVELOPMENT"
  // appId: "vNiX",
  // environment: "PRODUCTION"
};

type Props = {};
export default class App extends Component<Props> {
  constructor (props) {
    super(props);
    this.state = {
      message: "",
      accountNumber: 0,
      publicAddress: "",
      balance: 0
    };
  }
  startKin = () => {
    KinNative.createUserAccount(JSON.stringify(kinConfig), (error, publicAddress, accountNumber, response) => {
      console.log(error);
      console.log(publicAddress);
      console.log(accountNumber);
      console.log(response);
      this.setState({ accountNumber, publicAddress });
    });
  }

  getBalance = accountNumber => {
    KinNative.getUserBalance(JSON.stringify(kinConfig), accountNumber, (error, balance) => {
      console.log(error);
      console.log(balance);
      this.setState({ balance });
    });
  }

  render () {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>{this.state.balance}</Text>
        <TouchableOpacity onPress={this.startKin}>
          <Text>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.getBalance(this.state.accountNumber)}>
          <Text>Get Balance</Text>
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
