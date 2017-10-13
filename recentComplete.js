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

import style from './style';
import {Table, TableWrapper, Row, Rows, Col, Cols, Cell} from 'react-native-table-component';


import {StackNavigator, NavigationActions} from 'react-navigation';
import {Button} from 'react-native-elements';

var listRecord = 3;

export default class recentIncomplete extends Component {

    static navigationOptions = {
        title: 'recentComplete',
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
        const tableHead = ['No', 'Time Stamp','Name', 'Sex', 'DoB'];
        const tableData = [
            ['1', '20171011-1130','John Smiths', 'M', '07-23-1963'],
            ['2', '20171011-1130','Selina Smithsdeuydsgsdydhd', 'F', '11-09-1997'],
            ['3', '20171011-1130','Selina Smiths', 'F', '11-09-1997'],
        ];
        const widthArr = [20, 80, 80, 20, 70];

        return (
            <View style={style.pageContainer}>


                <View style={style.headerContainer}>

                    <TouchableHighlight onPress={() => navigate('searchPage')}
                                        underlayColor='rgba(0,0,0,0)'>
                        <Image source={require('./image/left-arrow.png')}
                               style={style.left_arrow}
                        />
                    </TouchableHighlight>


                    <Text style={style.navigation_Heading}>Recent Complete</Text>

                </View>

                <View style={style.contentContainer_has_header}>
                    <ScrollView>
                        <Text style={style.instructions}>Here presents the latest 25 Complete records in today: (DoB
                            MM/DD/YY)</Text>


                        <Table style={style.table_Container}>
                            <TableWrapper style={{width: 270}}>
                                <Row data={tableHead} style={style.table_Head} widthArr={widthArr}
                                     textStyle={style.table_Text_Head}/>
                                <Rows data={tableData} style={style.table_Row} widthArr={widthArr}
                                      textStyle={style.table_Text}/>
                            </TableWrapper>

                            <TableWrapper style={{width: 50}}>

                                <Cell data="Result" style={style.table_Head} textStyle={style.table_Text_Head}/>

                                {this.renderButtons('View')}

                            </TableWrapper>

                        </Table>
                    </ScrollView>
                </View>


                <View style={style.tabContainer}>

                </View>

            </View>

        );
    }
}
