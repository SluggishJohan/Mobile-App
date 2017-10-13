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
import { Container, Header, Left,List, ListItem, Switch, Item, Input, Icon, Body, Right, Content, Footer, FooterTab, Button, Badge,Segment } from 'native-base';



export default class Allergen extends Component{
  render() {
    return (
      <View style={styles.container}>

      <Container style={styles.list}>

          <Button style={styles.button} onPress={this.grasses}>
            <Text>Grasses</Text>
          </Button>

          <Button style={styles.button}>
            <Text>Weeds</Text>
          </Button>

          <Button style={styles.button}>
            <Text>Trees</Text>
          </Button>

      </Container>

      <Container style={styles.list}>

          <Button style={styles.button}>
            <Text>Moulds/ Yeast</Text>
          </Button>

          <Button style={styles.button}>
            <Text>Dermatophyts</Text>
          </Button>

          <Button style={styles.button}>
            <Text>Animal dander/ Insects</Text>
          </Button>

      </Container>

      <Container style={styles.list} >

          <Button style={styles.button}>
            <Text>Miscellaneous</Text>
          </Button>

          <Button style={styles.button}>
            <Text>Grains& Yeast</Text>
          </Button>

          <Button style={styles.button}>
            <Text>Dairy/ Proteins</Text>
          </Button>

      </Container>

      <Container style={styles.list}>

          <Button style={styles.button}>
            <Text>Fruit& Vegetables</Text>
          </Button>

          <Button style={styles.button}>
            <Text>Nuts/ Legumes</Text>
          </Button>

          <Button style={styles.button}>
            <Text>Seafood</Text>
          </Button>

      </Container>

      <Container style={styles.list}>

          <Button style={styles.button}>
            <Text>Specials- Seeds</Text>
          </Button>

          <Button style={styles.save} onPress={this.addTest}>
            <Text>Save</Text>
          </Button>

          <Button style={styles.clear}>
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
  addTest = () => {

    this.props.navigation.navigate('TestAdded');
    }
  grasses = () => {

      this.props.navigation.navigate('Grasses');
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
  container:{
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list:{
  flex: 1,
  flexDirection: 'row',
  justifyContent:'space-between',
  },
button:{
  height:50,
  width:100,
  justifyContent: 'center',
  margin:5,
  backgroundColor:'#a5c1ef',
},
save:{
    backgroundColor:'#4286f4',
    height:50,
    width:98,
    justifyContent: 'center',
    margin:5,

},
clear:{
  backgroundColor:'#f44144',
    height:50,
    width:98,
    justifyContent: 'center',
    margin:5,

},

});
