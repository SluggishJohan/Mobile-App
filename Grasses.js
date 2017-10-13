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
import { Container, Header,  Item, Input, Icon,  ListItem, CheckBox,Body, Content,  Button, Badge,Segment } from 'native-base';




export default class Grasses extends Component{
  render() {
    return (
      <Container style={styles.container}>

       <Content>

         <ListItem>
           <CheckBox checked={true} color={'#418cf4'}/>
           <Body>
             <Text> Perennial Rye Grass</Text>
           </Body>
         </ListItem>

         <ListItem>
           <CheckBox checked={false} color={'#418cf4'}/>
           <Body>
             <Text style={styles.highlight}> Barley Pollen</Text>
           </Body>
         </ListItem>

         <ListItem>
           <CheckBox checked={true} color={'#418cf4'}/>
           <Body>
             <Text style={styles.highlight}> Wheat Triticum Vulgare</Text>
           </Body>
         </ListItem>

         <ListItem>
           <CheckBox checked={false} color={'#418cf4'}/>
           <Body>
             <Text> Bermuda</Text>
           </Body>
         </ListItem>

         <ListItem>
           <CheckBox checked={true} color={'#418cf4'}/>
           <Body>
             <Text> Bahia Grass/ Paspalum</Text>
           </Body>
         </ListItem>

         <ListItem>
           <CheckBox checked={false} color={'#418cf4'}/>
           <Body>
             <Text> Johnson/Sorgum</Text>
           </Body>
         </ListItem>

         <ListItem>
           <CheckBox checked={true} color={'#418cf4'}/>
           <Body>
             <Text> Timothy</Text>
           </Body>
         </ListItem>

         <ListItem>
           <CheckBox checked={false} color={'#418cf4'}/>
           <Body>
             <Text> Kentucky Blue</Text>
           </Body>
         </ListItem>

         <ListItem>
           <CheckBox checked={false} color={'#418cf4'}/>
           <Body>
             <Text style={styles.highlight}> Yorkshire Fog</Text>
           </Body>
         </ListItem>

         <ListItem>
           <CheckBox checked={false} color={'#418cf4'}/>
           <Body>
             <Text> Oats Common</Text>
           </Body>
         </ListItem>

       </Content>
     </Container>
    );
  }
  next = () => {

    this.props.navigation.navigate('Allergen');
    }
 }

const styles = StyleSheet.create({

  container:{
    flex: 1,
  },
highlight:{
  color:'#f44280',
  fontWeight: 'bold',
}

});
