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

export default class More extends Component {
  render() {
    return (
    <View style={styles.container }>



        <Container style={styles.decision}>

                  <Button style={styles.add} onPress={this.add}>
                    <Icon name='person' />
                    <Text>Modify Patient Info</Text>
                  </Button>
                  <Button   style={styles.clear} onPress={this.clear}>
                    <Icon name='calculator' />
                    <Text>Statistics</Text>
                  </Button>
                  <Button   style={styles.logout} onPress={this.logout}>
                    <Icon name='ios-log-out' />
                    <Text>Log Out</Text>
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

  searchP = () => {

    this.props.navigation.navigate('Options');
    }

  add = () => {

    this.props.navigation.navigate('addSuccess');
    }

    newT = () => {

      this.props.navigation.navigate('newTest');
      }

      more = () => {

        this.props.navigation.navigate('More');
        }

        logout = () => {

          this.props.navigation.navigate('Login');
          }

}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',

  },



  decision:{
flex: 1,
flexDirection: 'column',
  },

  add:{
 height:50,
  backgroundColor:'#61f4d4',
  width: 200,
  margin:5,
  justifyContent:'center',
  alignItems:'center',
  },

  clear:{
  height:50,
  backgroundColor:'#6fc7f7',
  width: 200,
  margin:5,
  justifyContent:'center'
  },

  logout:{
  height:50,
  backgroundColor:'#93c9a3',
  width: 200,
  margin:5,
  justifyContent:'center'
  },

})
