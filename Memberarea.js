import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TextInput,
  DatePickerIOS,
  TouchableOpacity,
} from 'react-native'
import {
  StackNavigator,
} from 'react-navigation';


export default class Memberarea extends Component {
  render() {
    return (
    <View style={styles.container }>
        <View style={styles.topBar }>
        <Text style={styles.welcome}> Welcome to the test management system!</Text>
        </View>
        <Text
          style={styles.choice}>
          Look Up Existing Patient
        </Text>
        <TextInput
          style={styles.input}
          placeholder={'Type patient ID/ name/ DOB'}
          placeholderTextColor={"rgba(198,198,204,1)"}
          onChangeText={(text) => {this.setState({text})}}
          onSubmitEditing={() => {this.setState({text: ''})}}
          value={(this.state && this.state.text) || ''}
        />
        <Text
          style={styles.choice}>
         Add New Patient
        </Text>

        <TextInput
          style={styles.input}
          placeholder={'Family Name'}
          placeholderTextColor={"rgba(198,198,204,1)"}
          onChangeText={(text) => {this.setState({text})}}
          onSubmitEditing={() => {this.setState({text: ''})}}
          value={(this.state && this.state.text) || ''}
        />

        <TextInput
          style={styles.input}
          placeholder={'Given Name'}
          placeholderTextColor={"rgba(198,198,204,1)"}
          onChangeText={(text) => {this.setState({text})}}
          onSubmitEditing={() => {this.setState({text: ''})}}
          value={(this.state && this.state.text) || ''}
        />

        <TextInput
          style={styles.input}
          placeholder={'DOB: YYYY-MM-DD'}
          placeholderTextColor={"rgba(198,198,204,1)"}
          onChangeText={(text) => {this.setState({text})}}
          onSubmitEditing={() => {this.setState({text: ''})}}
          value={(this.state && this.state.text) || ''}
        />

        <TextInput
          style={styles.input}
          placeholder={'Gender: M/F'}
          placeholderTextColor={"rgba(198,198,204,1)"}
          onChangeText={(text) => {this.setState({text})}}
          onSubmitEditing={() => {this.setState({text: ''})}}
          value={(this.state && this.state.text) || ''}
        />
         <View style={styles.bottomBar }>

                      <TouchableOpacity onPress={this.newTest} style={styles.lowerButtonContainer}>
                   <Text style={styles.buttonText}>New Test</Text>
                 </TouchableOpacity>
                      <TouchableOpacity onPress={this.search} style={styles.lowerButtonContainer}>
                   <Text style={styles.buttonText}>Search</Text>
                 </TouchableOpacity>

                  <TouchableOpacity onPress={this.more} style={styles.lowerButtonContainer}>
                   <Text style={styles.buttonText}>More</Text>
                 </TouchableOpacity>
        </View>
      </View>
    );

  }

}

const styles = StyleSheet.create({
topBar:{
  flex: 1,
  alignSelf: "center" ,
  backgroundColor:'#ebf4f6',
  position: 'absolute',
  top:0,
left:0,
  right:0,
 flexDirection:'row',
  alignItems:'center',
   justifyContent:'center',
},
  container:{
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',

  },
  welcome:{
    marginTop: 25,
     color: "rgba(30,50,59,1)",
            fontSize: 12,

            fontWeight: "normal",

            fontFamily: 'Helvetica Neue',
  },
  choice:{
     color: "rgba(30,50,59,1)",
            fontSize: 18,
            margin:10,
            fontWeight: "normal",
            fontFamily: 'Helvetica Neue',
  },
  input:{
     height: 30,
            width:  200 ,
           borderRadius:5,
            borderWidth: 1,
            textAlign:'center',
            margin:10,
            alignSelf:'center',
            borderColor: "rgba(30,50,59,0.5)",
  },
  buttonText:{

  },
  lowerButtonContainer:{

    borderColor:'#fff',
    backgroundColor:'rgba(30,50,59,0.5)',
   justifyContent:'space-between',
    alignSelf:'center',
    margin:10,
    padding:10,

    height:40,

  },
  bottomBar:{

  alignItems:'stretch',
  flexDirection: 'row',

  justifyContent:'space-between',
},

})
