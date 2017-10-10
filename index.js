import React, { Component } from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator } from 'react-native';
import App from './App';
import Memberarea from './Memberarea';

export default class Project extends Component {
  render() {
    return (
      <Navigator initialRoute={{id: 'App'}}
        renderScene = {this.navigatorRenderScene} />
    );
  }

    navigatorRenderScene(route, navigator) {
       _navigator = navigator;
       switch(route.id){
          case 'App':
              return(<App navigator = {navigator}/>);
            case 'Memberarea':
              return(<Memberarea navigator = {navigator}/>);
        }
    }
}








AppRegistry.registerComponent('Awesome', () => App);
