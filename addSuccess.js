import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage,
  TextInput,
  DatePickerIOS,
  TouchableOpacity,
} from 'react-native'
import {
  StackNavigator,
} from 'react-navigation';
import { Container, Header, Item, Input, Icon, Content, Footer, FooterTab, Button, Badge } from 'native-base';



export default class addSuccess extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>

      <Image source={require('./success.png')} style={styles.image}>
      </Image>

      <Text
        style={styles.info}>
        Add Patient
      </Text>

      <Text
        style={styles.status}>
        Successful
      </Text>



                <Button style={styles.newTest} onPress={this.newTest}>
                  <Icon name='paper' />
                  <Text>Start Test</Text>
                </Button>
                <Button   style={styles.back} onPress={this.back}>
                  <Icon name='ios-arrow-back-outline' />
                  <Text>Back</Text>
                </Button>





      <Footer >
        <FooterTab style={styles.foot}>

          <Button vertical active style={styles.tab}>
            <Icon name="person" />
            <Text>Patient</Text>
          </Button>
          <Button vertical active style={styles.tab}>
            <Icon active name="paper" />
            <Text>New Test</Text>
          </Button>
          <Button vertical active style={styles.tab}>
            <Icon name="apps" />
            <Text>More</Text>
          </Button>

        </FooterTab>
      </Footer>

      </View>
    );
  }


//   login = () => {
//     if(true) {
//       this.props.navigation.navigate('Memberarea');
//     } else {
//       alert("Username or password not match, please try again!");
//     }
//   }
 }

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image:{
    marginTop: 10,
   height:160,
   width: 160,
   alignSelf:'center',
  },
  info:{
     color: "rgba(30,50,59,1)",
            fontSize: 20,
            marginTop:10,
            fontWeight: "normal",
            fontFamily: 'Helvetica Neue',
            alignSelf:'center',

  },
  status:{
            color: "rgba(30,50,59,1)",
            fontSize: 50,
            marginTop:10,
            fontWeight: "normal",
            fontFamily: 'Helvetica Neue',
            alignSelf:'center',
  },

newTest:{
  height:30,
  backgroundColor:'#42f4cb',
  width: 200,
  margin:1,
  justifyContent:'center',
  alignSelf:'center',
  margin: 5,
  },

  back:{
    height:30,
    backgroundColor:'#418ff4',
    width: 200,
    margin:1,
    justifyContent:'center',
    alignSelf:'center',
    margin: 5,
  },
});
