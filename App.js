/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import LoginScreen from './LoginScreen';
import Memberarea from './Memberarea';


export default StackNavigator({
  Login: { screen: LoginScreen },
  Memberarea: { screen: Memberarea},
});
