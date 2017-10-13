/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Alert,
    AppRegistry,
    Text,
    Image,
    TouchableHighlight,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { Container, Header, Icon, Footer, FooterTab,Button} from 'native-base';
import style from './style';
import {Table, TableWrapper, Row, Rows, Col, Cols, Cell} from 'react-native-table-component';


import {StackNavigator, NavigationActions} from 'react-navigation';


var listRecord = 3;

export default class PatientResult extends Component {

    static navigationOptions = {
        title: 'recentIncomplete',
        header: null,
    };

    renderButtons = (name) =>{
        const buttons = [];
        for( let i = 1; i <= listRecord; i++) {
            buttons.push(
                <TouchableOpacity key={i} style={style.table_Button_Opacity} onPress={() => {
                }}>
                    <Cell data={name} style={style.table_Row_Button_Cell}
                          textStyle={style.table_Text_Button_Cell}/>
                </TouchableOpacity>
            )
        }
        return buttons;
    }

    render() {

        const {navigate} = this.props.navigation;
        const tableHead = ['No', 'Allergen', 'WHEAL', 'FLARE', 'PS'];
        const tableData = [
            ['1', 'Bermuda', '2', '15', ' '],
            ['2', 'Dock/ Sorrel', '3', '6', ' '],
            ['3', 'Tuna', '0', '0', ' '],
        ];
        const widthArr = [20, 100, 55, 55, 60];

        return (
            <View style={style.pageContainer}>


                <View style={style.headerContainer}>

                    <TouchableHighlight onPress={() => navigate('searchPage')}
                                        underlayColor='rgba(0,0,0,0)'>
                        <Image source={require('./image/left-arrow.png')}
                               style={style.left_arrow}
                        />
                    </TouchableHighlight>


                    <Text style={style.navigation_Heading}>Patient Test Result</Text>

                </View>

                <View style={style.contentContainer_has_header}>
                    <ScrollView>
                        <Text style={style.instructions}>Name: Jack</Text>
                        <Text style={style.instructions}>Date: 2017-04-23</Text>
                        <Text style={style.instructions}>Nurse: Judith</Text>
                        <Text style={style.instructions}>Antihistamine Recently?  No</Text>
                        <Text style={style.instructions}>BETABLOCKER?  No</Text>



                        <Table style={style.table_Container}>
                            <TableWrapper style={{width: 260}}>
                                <Row data={tableHead} style={style.table_Head} widthArr={widthArr}
                                     textStyle={style.table_Text_Head}/>
                                <Rows data={tableData} style={style.table_Row} widthArr={widthArr}
                                      textStyle={style.table_Text}/>
                            </TableWrapper>


                        </Table>
                        <View style={style.button}>
                        <Button  onPress={this.print} style={styles.save}>
                          <Icon name='print' />
                          <Text>Print</Text>
                          </Button>
                        </View>
                    </ScrollView>

                </View>




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



      newT = () => {

        this.props.navigation.navigate('newTest');
        }

        more = () => {

          this.props.navigation.navigate('More');
          }

    print = () => {
       //print the page
      }
}
const styles = StyleSheet.create({


  save:{
height:30,
  backgroundColor:'#4286f4',
  width: 120,
  margin:1,
  justifyContent:'center',
  alignSelf:'center',

  },



});
