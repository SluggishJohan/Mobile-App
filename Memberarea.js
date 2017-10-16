import React, { Component } from "react";
import {
    AppRegistry,
    StyleSheet,
    AlertIOS,
    View,
    ScrollView,
    AsyncStorage,
    TextInput,
    DatePickerIOS,
    TouchableOpacity
} from "react-native";
import { StackNavigator } from "react-navigation";
import style from "./style";
import {
    Container,
    Body,
    Header,
    Item,
    Input,
    Icon,
    Content,
    Footer,
    FooterTab,
    Button,
    Badge,
    StyleProvider,
    Text,
    Card,
    CardItem,
    List,
    ListItem,
    Separator,
    Left,
    Right,
    Title
} from "native-base";

import getTheme from "./native-base-theme/components";
import platform from "./native-base-theme/variables/platform";
import firebase from "./firebaseConfig";

var t = require("tcomb-form-native");

var Form = t.form.Form;

var Person = t.struct({
    FirstName: t.String, // a required string
    LastName: t.String, // a required string
    Year: t.String,
    Month: t.String,
    Day: t.String,
    Gender: t.String,
    Phone: t.String,
    Email: t.String,
    Address_Line1: t.String,
    Address_Line2: t.maybe(t.String),
    PostCode: t.String,
    State: t.String
});

var options = {
    fields: {
        FirstName: {
            label: "First Name", // <= label for the name field
            placeholder: "First Name"
        },
        LastName: {
            label: "Last Name", // <= label for the name field
            placeholder: "Last Name"
        },
        Year: {
            label: "DoB Year", // <= label for the name field
            placeholder: "YYYY"
        },
        Month: {
            label: "Month",
            placeholder: "MM"
        },
        Day: {
            label: "Day",
            placeholder: "DD"
        },
        Gender: {
            label: "Gender", // <= label for the name field
            placeholder: "M/F"
        },
        Phone: {
            label: "Phone", // <= label for the name field
            placeholder: "10 digit number"
        },
        Email: {
            label: "Email", // <= label for the name field
            placeholder: "Email address"
        },
        Address_Line1: {
            label: "Address Line 1", // <= label for the name field
            placeholder: "Required"
        },
        Address_Line2: {
            label: "Address Line 2", // <= label for the name field
            placeholder: "Optional"
        },
        PostCode: {
            label: "Post Code", // <= label for the name field
            placeholder: "eg.1234"
        },
        State: {
            label: "State", // <= label for the name field
            placeholder: "SA"
        }
    }
};

export default class Memberarea extends Component {
    static navigationOptions = {
        title: "NewTest",
        header: null,
        headerLeft: null
    };
    constructor(props) {
        super(props);
        this.state = {
            value: {
                FirstName: "", // a required string
                LastName: "", // a required string
                Year: "",
                Month: "",
                Day: "",
                Gender: "",
                Phone: "",
                Email: "",
                Address_Line1: "",
                Address_Line2: "",
                PostCode: "",
                State: ""
            }
        };
        this.hanleChange.bind(this);
    }
    hanleChange(value) {
        this.setState({ value });
    }

    render() {
        return (
            <View style={style.pageContainer}>
                <View style={style.contentContainer}>
                    <StyleProvider style={getTheme(platform)}>
                        <Header>
                            <Body>
                            <Title>New Test</Title>
                            </Body>
                        </Header>
                    </StyleProvider>

                    <ScrollView>
                        <StyleProvider style={getTheme(platform)}>
                            <Container style={style.lookup_container_NewTest}>
                                <Separator bordered>
                                    <Text>Look Up Existing Patient</Text>
                                </Separator>
                                <ListItem searchBar rounded style={styles.searchBar}>
                                    <Item>
                                        <Icon name="ios-people" />
                                        <Input style={{ fontSize: 10 }} placeholder="Name Here" />
                                        <Icon name="ios-search" />
                                    </Item>
                                </ListItem>
                            </Container>
                        </StyleProvider>

                        <StyleProvider style={getTheme(platform)}>
                            <Container style={style.addNewPatient_NewTest}>
                                <Separator bordered>
                                    <Text>Add New Patient</Text>
                                </Separator>

                                <View style={style.form_Container}>
                                    <Form
                                        ref="form"
                                        type={Person}
                                        options={options}
                                        value={this.state.value}
                                        onChangeText={value => this.setState({ value })}
                                        /*onChangeText{()=>{}}
                                                            onSubmitEditing{()=>{}}*/
                                    />
                                </View>
                            </Container>
                        </StyleProvider>

                        <StyleProvider style={getTheme(platform)}>
                            <Container style={style.twoButtons_NewTest}>
                                <Button style={styles.add} onPress={() => this.add()}>
                                    <Icon style={styles.addIcon} name="ios-add-circle" />
                                    <Text style={styles.buttonText}>Save</Text>
                                </Button>
                                <Button style={styles.clear} onPress={this.clear}>
                                    <Icon style={styles.clearIcon} name="trash" />
                                    <Text style={styles.buttonText}>Clear</Text>
                                </Button>
                            </Container>
                        </StyleProvider>
                    </ScrollView>
                </View>

                <StyleProvider style={getTheme(platform)}>
                    <Container style={style.tabContainer}>
                        <Footer>
                            <FooterTab>
                                <Button vertical active onPress={this.newT}>
                                    <Icon active style={style.tabButton_Icon} name="person" />
                                    <Text style={style.tabButton_Text}>New Test </Text>
                                </Button>
                                <Button vertical onPress={this.searchP}>
                                    <Icon style={style.tabButton_Icon} name="paper" />
                                    <Text style={style.tabButton_Text}>Records</Text>
                                </Button>

                                <Button vertical onPress={this.more}>
                                    <Icon style={style.tabButton_Icon} name="apps" />
                                    <Text style={style.tabButton_Text}>More</Text>
                                </Button>
                            </FooterTab>
                        </Footer>
                    </Container>
                </StyleProvider>
            </View>
        );
    }

    //TODO: save input values to firebase
    add = () => {
        // call getValue() to get the values of the form
        var value = this.refs.form.getValue(); // value here is an instance of Person
        console.log("Person:", value); //For test Purpose
        if (value) {
            //check value
            this.props.navigation.navigate("addSuccess");
        } else {
            AlertIOS.alert("Invaid inputs!");
        }
    };

    searchP = () => {
        this.props.navigation.navigate("Options");
    };

    newT = () => {
        this.props.navigation.navigate("newTest");
    };

    more = () => {
        this.props.navigation.navigate("More");
    };

    clear = () => {
        //TODO:clear all the input field
        return {
            options: options,
            value: null
        };
    };
}

const styles = StyleSheet.create({
    searchBar: {
        width: "100%",
        backgroundColor: "rgba(30,50,59,0)"
    },

    add: {
        height: 25,
        backgroundColor: "#0277BD",
        width: 100,
        marginRight: 7,
        justifyContent: "center"
    },

    clear: {
        height: 25,
        backgroundColor: "#BDBDBD",
        width: 100,
        marginLeft: 7,
        justifyContent: "center"
    },

    addIcon: {
        fontSize: 15,
        margin: 0,
        padding: 0
    },

    clearIcon: {
        fontSize: 18
    },

    buttonText: {
        padding: 4,
        color: "#fff",
        fontWeight: "bold",
        margin: 0,
        fontSize: 10
    }
});