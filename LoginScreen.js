/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, {Component} from 'react';
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
import style from './style';
import {Button} from 'react-native-elements';

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

    static navigationOptions = {
        title: 'LoginScreen',
        header: null,
    };

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={style.pageContainer}>
                <ImageBackground source={require('./back.jpg')} style={style.backgroundImage_Login}>
                    <View style={style.innerPageContainer_Login}>

                        <View style={style.inputContainer_Login}>
                            <Text style={style.logo1_Login}>Royal Adelaide Hospital</Text>
                            <Text style={style.logo2_Login}>Prick Test Management System</Text>
                            <TextInput
                                underlineColorIos='transparent'
                                style={style.inputbox_Login}
                                placeholder='username'
                                value={this.state.email}
                                onChangeText={email => this.setState({email})}
                            />
                            <TextInput
                                secureTextEntry={true}
                                underlineColorIos='transparent'
                                style={style.inputbox_Login}
                                placeholder='password'
                                autoCorrect={false}
                                value={this.state.password}
                                onChangeText={password => this.setState({password})}
                            />
                        </View>
                        <View style={style.buttonContainer_Login}>

                            <Button
                                raised
                                icon={{name: 'send'}}
                                fontSize={12}
                                textStyle={{fontWeight: 'bold',}}
                                containerViewStyle={{alignItems: 'center'}}
                                onPress={() => {
                                    navigate('Memberarea')
                                }}
                                buttonStyle={style.Login_Button}
                                title='Login'/>
                        </View>

                    </View>
                </ImageBackground>
            </View>
        );
    }

    constructor(props) {
        super(props);

        this.state = {username: '', password: '', error: '', loading: false};
    }

    login = () => {

        this.setState({error: '', loading: true});

        const {email, password} = this.state;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({error: '', loading: false});
                this.props.navigation.navigate('Memberarea');
            })
            .catch(() => {
                //Login was not successful, let's create a new account
                // firebase.auth().createUserWithEmailAndPassword(email, password)
                //     .then(() => { this.setState({ error: '', loading: false }); })
                //     .catch(() => {
                this.setState({error: 'Authentication failed.', loading: false});
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


