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

import * as firebase from 'firebase';
// import {
//   FB_API_KEY,
//   FB_AUTH_DOMAIN,
//   FB_DATABASE_URL,
//   FB_STORAGE_BUCKET,
// } from 'react-native-dotenv';

const firebaseConfig = {
  apiKey: "AIzaSyCgNLQyf0bim1ex8y3bDrZqcQrEJhb-wXM",
  authDomain: "firereactbasenative.firebaseapp.com",
  databaseURL: "https://mobile-app-c4df4.firebaseio.com",
  storageBucket: ""
    //  apiKey: FB_API_KEY,
    //  authDomain: FB_AUTH_DOMAIN,
    //  databaseURL: FB_DATABASE_URL,
    //  storageBucket: FB_STORAGE_BUCKET,
};
const firebaseApp = firebase.initializeApp(firebaseConfig);


export default class LoginScreen extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./back.jpg')} style={styles.backgroundImage}>
          <View style={styles.content}>
            <View style={styles.inputContainer}>
              <Text style={styles.logo1}>Royal Adelaide Hospital</Text>
              <Text style={styles.logo2}>Test Management System</Text>
              <TextInput
                   underlineColorIos='transparent'
                   style={styles.input}
                   placeholder='username'
                   value={this.state.email}
                   onChangeText={email => this.setState({ email })}
              />
              <TextInput
                   secureTextEntry={true}
                   underlineColorIos='transparent'
                   style={styles.input}
                   placeholder='password'
                   autoCorrect={false}
                   secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
              />
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

    this.state={username: '', password: '', error: '', loading: false};
  }

  login = () => {

    this.setState({ error: '', loading: true });

    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { this.setState({ error: '', loading: false });
                          this.props.navigation.navigate('Memberarea');
                        })
            .catch(() => {
                //Login was not successful, let's create a new account
                // firebase.auth().createUserWithEmailAndPassword(email, password)
                //     .then(() => { this.setState({ error: '', loading: false }); })
                //     .catch(() => {
                        this.setState({ error: 'Authentication failed.', loading: false });
                        alert("Authentication failed, please try again!")
                    // });
            });

    // if(true) {
    //   this.props.navigation.navigate('Memberarea');
    // } else {
    //   alert("Username or password not match, please try again!");
    // }
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
