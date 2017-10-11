import React, { Component } from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator } from 'react-native';
  import {
  StackNavigator,
} from 'react-navigation';
import App from './App';

import Memberarea from './Memberarea';
import addSuccess from './addSuccess';

export default class Project extends Component {
  render() {
    return (
      <Navigator initialRoute={{id: 'App'}}
        renderScene = {this.navigatorRenderScene} />
    );
  }

    navigatorRenderScene(route, navigator){
       _navigator = navigator;
       switch(route.id){
          case 'App':
              return(<App navigator = {navigator}/>);
            case 'Memberarea':
              return(<Memberarea navigator = {navigator}/>);
              case 'addSuccess':
              return(<addSuccess navigator = {navigator}/>);
}


}

}








AppRegistry.registerComponent('Awesome', () => App);
