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
import { Container, Header, Left, Item, Input, Icon, Body, Right, Content, Footer, FooterTab, Button, Badge,Segment } from 'native-base';



export default class newTest extends Component{
  render() {
    return (
      <View style={styles.container}>

      <Text style={styles.title}>
        Test Information
      </Text>

      <TextInput
        style={styles.input}
        placeholder={'DATE: YYYY-MM-DD'}
        placeholderTextColor={"rgba(198,198,204,1)"}
        onChangeText={(text) => {this.setState({text})}}
        onSubmitEditing={() => {this.setState({text: ''})}}
        value={(this.state && this.state.text) || ''}
      />

      <TextInput
        style={styles.input}
        placeholder={'Nurse'}
        placeholderTextColor={"rgba(198,198,204,1)"}
        onChangeText={(text) => {this.setState({text})}}
        onSubmitEditing={() => {this.setState({text: ''})}}
        value={(this.state && this.state.text) || ''}
      />



      <Container style={styles.beta}>
                <Left>
                  <Text style={styles.betaButton}>
                    ANTIHISTAMINE RECENTLY?
                  </Text>
                </Left>
                <Right>
                  <Segment style={styles.betaChoice}>
                    <Button first ><Text>Yes</Text></Button>
                    <Button last active ><Text>No</Text></Button>
                  </Segment>
                </Right>

              </Container>

      <Container style={styles.beta}>
                <Left>
                  <Text style={styles.betaButton}>
                    BETABLOCKER?
                  </Text>
                </Left>
                <Right>
                  <Segment style={styles.betaChoice}>
                    <Button first ><Text>Yes</Text></Button>
                    <Button last active ><Text>No</Text></Button>
                  </Segment>
                </Right>

              </Container>

              <TextInput
                style={styles.input1}
                placeholder={'Details'}
                placeholderTextColor={"rgba(198,198,204,1)"}
                onChangeText={(text) => {this.setState({text})}}
                onSubmitEditing={() => {this.setState({text: ''})}}
                value={(this.state && this.state.text) || ''}
              />

                <Button style={styles.save} onPress={this.save}>
                  <Icon name='ios-add-circle' />
                  <Text>Save</Text>
                </Button>
                <Button   style={styles.clear} onPress={this.clear}>
                  <Icon name='trash' />
                  <Text>Clear</Text>
                </Button>
                <Button   style={styles.next} onPress={this.next}>
                  <Icon name='ios-arrow-dropright' />
                  <Text>Next</Text>
                </Button>




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
  next = () => {

    this.props.navigation.navigate('Allergen');
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
 }

const styles = StyleSheet.create({
  title:{
            color: "rgba(30,50,59,1)",
            fontSize: 20,
            marginTop:10,
            fontWeight: "normal",
            fontFamily: 'Helvetica Neue',
            alignSelf:'center',
  },

  container:{
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  beta:{
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  betaButton:{
marginLeft:10,
  },

  betaChoice:{
marginRight:10,
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

  input1:{
     height: 40,
            width:  240 ,
           borderRadius:5,
            borderWidth: 1,
            textAlign:'center',
            margin:3,
            alignSelf:'center',
            borderColor: "rgba(30,50,59,0.5)",
  },

  save:{
height:30,
  backgroundColor:'#4286f4',
  width: 120,
  margin:1,
  justifyContent:'center',
  alignSelf:'center',

  },

  clear:{
height:30,
  backgroundColor:'#f44144',
  width: 120,
  margin:1,
    justifyContent:'center',
    alignSelf:'center',
  },
  next:{
height:30,
  backgroundColor:'#3ae0d5',
  width: 120,
  margin:1,
    justifyContent:'center',
    alignSelf:'center',
  },


});
