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
import addSuccess from './addSuccess';
import newTest from './newTest';
import Allergen from './Allergen';
import TestAdded from './TestAdded';
import Updated from './Updated';
import Grasses from './Grasses';
import recentIncomplete from './recentIncomplete';
import recentComplete from './recentComplete';
import searchByName from "./searchByName";
import searchByPhoneNumber from "./searchByPhoneNumber";
import searchByItem from "./searchByItem";
import PatientResult from "./PatientResult";
import Options from "./Options";
import More from "./More";


export default StackNavigator({
  Login: { screen: LoginScreen},
  Memberarea: { screen: Memberarea},
  addSuccess:{ screen: addSuccess},
  newTest:{ screen: newTest},
  Allergen:{ screen: Allergen},
  TestAdded:{ screen: TestAdded},
  Updated:{ screen: Updated},
  Grasses:{ screen: Grasses},
  recentIncomplete:{ screen: recentIncomplete},
  recentComplete:{ screen: recentComplete},
  searchByName:{ screen: searchByName},
  searchByPhoneNumber:{ screen: searchByPhoneNumber},
  searchByItem:{ screen: searchByItem},
  PatientResult:{ screen: PatientResult},
  Options: {screen: Options},
  More: {screen: More},

}, {
    header: {
        left: null,
    }
});
