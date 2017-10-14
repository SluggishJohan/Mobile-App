import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    AsyncStorage,
    TextInput,
    DatePickerIOS,
    TouchableOpacity,
} from 'react-native'
import {
    StackNavigator,
} from 'react-navigation';
import style from './style';
import {
    Container, Header, Item, Input, Icon, Content, Footer, FooterTab,
    Button,
    Badge,
    StyleProvider,
} from 'native-base';

import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';

var t = require('tcomb-form-native');

var Form = t.form.Form;

var Gender = t.enums({
    M: 'Male',
    F: 'Female'
});

var Person = t.struct({
    FirstName: t.String,              // a required string
    LastName: t.String,           // a required string
    DOB: t.String,
    Gender: Gender,
    Phone: t.String,
    Email: t.String,
    Address_Line1: t.String,
    Address_Line2: t.maybe(t.String),
    PostCode: t.String,
    State: t.String,
});




var options = {
    fields: {
        FirstName: {
            label: 'First Name', // <= label for the name field
            placeholder: 'First Name',
        },
        LastName: {
            label: 'Last Name', // <= label for the name field
            placeholder: 'Last Name',
        },
        DOB: {
            label: 'Date of Birth', // <= label for the name field
            //placeholder: 'DOB: YYYY-MM-DD',
        },
        Gender: {
            label: 'Gender', // <= label for the name field
            placeholder: 'M/F',
        },
        Phone: {
            label: 'Phone', // <= label for the name field
            placeholder: '10 digit number',
        },
        Email: {
            label: 'Email', // <= label for the name field
            placeholder: 'Email address',
        },
        Address_Line1: {
            label: 'Address Line 1', // <= label for the name field
            placeholder: 'Required',
        },
        Address_Line2: {
            label: 'Address Line 2', // <= label for the name field
            placeholder: 'Optional',
        },
        PostCode: {
            label: 'Post Code', // <= label for the name field
            placeholder: 'eg.1234',
        },
        State:{
            label: 'State', // <= label for the name field
            placeholder: 'SA',
        }

    }
};


export default class Memberarea extends Component {
    static navigationOptions = {
        title: 'NewTest',
        header: null,
    };

    render() {
        return (

            <View style={style.pageContainer}>

                <View style={style.contentContainer}>
                    <ScrollView>
                        <Container style={style.lookup_container_NewTest}>
                            <Text>
                                Look Up Existing Patient
                            </Text>
                            <Header searchBar rounded style={styles.searchBar}>
                                <Item>
                                    <Icon name="ios-search"/>
                                    <Input placeholder="Search"/>
                                    <Icon name="ios-people"/>
                                </Item>
                                <Button small primary style={styles.searchButton}>
                                    <Text>Search</Text>
                                </Button>
                            </Header>
                        </Container>

                        <Container style={style.addNewPatient_NewTest}>


                            <Text
                                style={styles.choice}>
                                Add New Patient
                            </Text>

                            <View style={style.form_Container}>
                                <Form
                                    ref="form"
                                    type={Person}
                                    options={options}
                                    /*onChangeText{()=>{}}
                                    onSubmitEditing{()=>{}}*/
                                />
                            </View>

                        </Container>

                        <Container style={style.twoButtons_NewTest}>

                            <Button style={styles.add} onPress={this.add}>
                                <Icon name='ios-add-circle'/>
                                <Text>Save</Text>
                            </Button>
                            <Button style={styles.clear} onPress={this.clear}>
                                <Icon name='trash'/>
                                <Text>Clear</Text>
                            </Button>

                        </Container>
                    </ScrollView>
                </View>


                <StyleProvider style={getTheme(platform)}>

                    <Container style={style.tabContainer}>
                        <Footer>
                            <FooterTab>
                                <Button vertical active onPress={this.newT}>
                                    <Icon active style={style.tabButton_Icon}  name="paper"/>
                                    <Text style={style.tabButton_Text}>New Test </Text>
                                </Button>

                                <Button vertical active onPress={this.searchP}>
                                    <Icon style={style.tabButton_Icon} name="paper"/>
                                    <Text style={style.tabButton_Text}>Records</Text>
                                </Button>


                                <Button vertical active onPress={this.more}>
                                    <Icon style={style.tabButton_Icon} name="apps"/>
                                    <Text style={style.tabButton_Text}>More</Text>
                                </Button>

                            </FooterTab>
                        </Footer>
                    </Container>

                </StyleProvider>

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
    topBar: {
        flex: 1,
        alignSelf: "center",
        backgroundColor: '#ebf4f6',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },


    welcome: {
        marginTop: 25,
        color: "rgba(30,50,59,1)",
        fontSize: 12,
        fontWeight: "normal",
        fontFamily: 'Helvetica Neue',
    },

    searchButton: {
        backgroundColor: '#ebf4f6',
        marginLeft: 3,
        borderWidth: 1,
        borderColor: "rgba(30,50,59,1)",
    },

    input: {
        height: 25,
        width: 200,
        borderRadius: 5,
        borderWidth: 1,
        textAlign: 'center',
        margin: 3,
        alignSelf: 'center',
        borderColor: "rgba(30,50,59,0.5)",
    },


    lowerButtonContainer: {
        borderColor: '#fff',
        backgroundColor: 'rgba(30,50,59,0.5)',
        justifyContent: 'space-between',
        alignSelf: 'center',
        margin: 10,
        padding: 10,
        height: 40,

    },
    searchBar: {
        width: 320,
        flexDirection: 'row',
        backgroundColor: 'rgba(30,50,59,0)',
        alignItems: 'center',
    },

    decision: {
        flex: 1,
        flexDirection: 'row',
    },

    add: {
        height: 30,
        backgroundColor: '#4286f4',
        width: 120,
        margin: 1,
        justifyContent: 'center'
    },

    clear: {
        height: 30,
        backgroundColor: '#f44144',
        width: 120,
        margin: 1,
        justifyContent: 'center'
    },

    bottomBar: {

        alignItems: 'stretch',
        flexDirection: 'row',

        justifyContent: 'space-between',
    },

})
