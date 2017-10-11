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
import {
  StackNavigator,
} from 'react-navigation';


export default class LoginScreen extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./back.jpg')} style={styles.backgroundImage}>
          <View style={styles.content}>
            <View style={styles.inputContainer}>
              <Text style={styles.logo1}>Royal Adelaide Hospital</Text>
              <Text style={styles.logo2}>Test Management System</Text>
              <TextInput underlineColorIos='transparent' style={styles.input} placeholder='username'/>
              <TextInput secureTextEntry={true} underlineColorIos='transparent' style={styles.input} placeholder='password'/>
            </View>
            <TouchableOpacity onPress={this.login} style={styles.buttonContainer}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }

  constructor(props) {
    super(props);

    this.state={username: '', password: ''};
  }

  login = () => {
    if(true) {
      this.props.navigation.navigate('Memberarea');
    } else {
      alert("Username or password not match, please try again!");
    }
  }
}

const styles = StyleSheet.create({
     container: {
       flex:1,
alignSelf:'stretch',
     },
  backgroundImage:{
    flex:1,
    alignSelf:'stretch',
    width:null,
    justifyContent:'center',
  },
  content: {
    alignItems: 'center',

  },
  logo1: {
    color:'white',
    fontSize: 28,
    margin:10,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logo2: {
    color:'white',
    fontSize: 20,
    margin:10,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer:{
    margin:20,
    marginBottom:0,
    padding:20,
    paddingBottom:10,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor:'#fff',
    backgroundColor: 'rgba(30,50,59,0.5)',

  },
  input:{
    fontSize:16,
    height:40,
    padding:10,

    marginBottom:10,
    textAlign:'center',
    backgroundColor:'rgba(255,255,255,1)',
  },
  buttonContainer:{
    alignSelf:'stretch',
    margin:20,
    padding:20,
    backgroundColor:'blue',
    borderWidth:1,
    borderColor:'#fff',
    backgroundColor:'rgba(30,50,59,0.6)',
  },
  buttonText:{
    color:'white',
    fontSize:16,
    fontWeight:'bold',
    textAlign:'center',
  }

});
