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
import { Container, Header, Item, Input, Icon, Content, Footer, FooterTab, Button, Badge } from 'native-base';

export default class Memberarea extends Component {
  render() {
    return (
    <View style={styles.container }>

        <Container style={styles.container1 }>
        <Text
          style={styles.choice}>
          Look Up Existing Patient
        </Text>
       <Header searchBar rounded style={styles.searchBar}>
         <Item >
           <Icon name="ios-search" />
           <Input placeholder="Search" />
           <Icon name="ios-people" />
         </Item>
         <Button small primary style={styles.searchButton} >
           <Text>Search</Text>
         </Button>
       </Header>
     </Container>

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

        <TextInput
          style={styles.input}
          placeholder={'Phone'}
          placeholderTextColor={"rgba(198,198,204,1)"}
          onChangeText={(text) => {this.setState({text})}}
          onSubmitEditing={() => {this.setState({text: ''})}}
          value={(this.state && this.state.text) || ''}
        />


        <TextInput
          style={styles.input}
          placeholder={'Email'}
          placeholderTextColor={"rgba(198,198,204,1)"}
          onChangeText={(text) => {this.setState({text})}}
          onSubmitEditing={() => {this.setState({text: ''})}}
          value={(this.state && this.state.text) || ''}
        />

        <TextInput
          style={styles.input}
          placeholder={'Address'}
          placeholderTextColor={"rgba(198,198,204,1)"}
          onChangeText={(text) => {this.setState({text})}}
          onSubmitEditing={() => {this.setState({text: ''})}}
          value={(this.state && this.state.text) || ''}
        />

        <Container style={styles.decision}>

                  <Button style={styles.add} onPress={this.add}>
                    <Icon name='ios-add-circle' />
                    <Text>Save</Text>
                  </Button>
                  <Button   style={styles.clear} onPress={this.clear}>
                    <Icon name='trash' />
                    <Text>Clear</Text>
                  </Button>


              </Container>



        <Footer >
          <FooterTab >

            <Button vertical active  onPress={this.searchP}>
              <Icon name="paper"/>
              <Text>Records</Text>
            </Button>
            <Button vertical active onPress={this.newT}>
              <Icon active name="paper" />
              <Text>New Test</Text>
            </Button>
            <Button vertical active onPress={this.more}>
              <Icon name="apps" />
              <Text>More</Text>
            </Button>

          </FooterTab>
        </Footer>

      </View>
    );

  }

  add = () => {

    this.props.navigation.navigate('addSuccess');
    }

  searchP = () => {

    this.props.navigation.navigate('Options');
    }



    newT = () => {

      this.props.navigation.navigate('newTest');
      }

      more = () => {

        this.props.navigation.navigate('More');
        }

  clear = () => {

        //clear all the input field
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
  container1:{
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
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
            marginTop:20,
            fontWeight: "normal",
            fontFamily: 'Helvetica Neue',

  },
searchButton:{
backgroundColor:'#ebf4f6',
marginLeft:3,
borderWidth:1,
borderColor:"rgba(30,50,59,1)",
},

  input:{
     height: 25,
            width:  200 ,
           borderRadius:5,
            borderWidth: 1,
            textAlign:'center',
            margin:3,
            alignSelf:'center',
            borderColor: "rgba(30,50,59,0.5)",
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
  searchBar:{
    width:320,
    flexDirection:'row',
    backgroundColor:'rgba(30,50,59,0)',
    alignItems: 'center',
  },

  decision:{
flex: 1,
flexDirection: 'row',
  },

  add:{
 height:30,
  backgroundColor:'#4286f4',
  width: 120,
  margin:1,
  justifyContent:'center'
  },

  clear:{
  height:30,
  backgroundColor:'#f44144',
  width: 120,
  margin:1,
    justifyContent:'center'
  },

  bottomBar:{

  alignItems:'stretch',
  flexDirection: 'row',

  justifyContent:'space-between',
},

})
