

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
} from 'react-native';

import style from './style';
import {Button} from 'react-native-elements';
import {StackNavigator, NavigationActions} from 'react-navigation';
import { Container, Header, Item, Input, Icon, Content, Footer, FooterTab, Badge } from 'native-base';





export default class Options extends Component {

    static navigationOptions = {
        title: 'Home',
        header: null,
    };

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={style.pageContainer}>

                <View style={style.contentContainer}>
                    <View>
                        <Text
                        style={style.heading_1}>How would you like to search?</Text>
                    </View>

                    <Button
                        raised
                        icon={{name: 'cached'}}
                        fontSize={10}
                        containerViewStyle={{alignItems:'center'}}
                        buttonStyle={style.searchPage_Button}
                        onPress={() => navigate('recentComplete')}
                        title='Recent (Complete)'/>
                    <Button
                        raised
                        icon={{name: 'cached'}}
                        fontSize={10}
                        containerViewStyle={{alignItems:'center'}}
                        buttonStyle={style.searchPage_Button}
                        onPress={() => navigate('recentIncomplete')}
                        title='Recent (Incomplete)'/>
                    <Button
                        raised
                        icon={{name: 'cached'}}
                        fontSize={10}
                        containerViewStyle={{alignItems:'center'}}
                        buttonStyle={style.searchPage_Button}
                        onPress={() => navigate('searchByName')}
                        title='Name'/>
                    <Button
                        raised
                        icon={{name: 'cached'}}
                        fontSize={10}
                        containerViewStyle={{alignItems:'center'}}
                        buttonStyle={style.searchPage_Button}
                        onPress={()=> navigate('searchByPhoneNumber')}
                        title='Phone Number'/>
                    <Button
                        raised
                        icon={{name: 'cached'}}
                        fontSize={10}
                        containerViewStyle={{alignItems:'center'}}
                        buttonStyle={style.searchPage_Button}
                        onPress={()=> navigate('searchByItem')}
                        title='Sample Item'/>
                    </View>



            </View>

        );
    }
}
