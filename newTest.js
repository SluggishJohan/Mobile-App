import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,
    ScrollView,
    AsyncStorage,
    TextInput,
    DatePickerIOS,
    TouchableOpacity,
} from 'react-native'
import {
    StackNavigator,
} from 'react-navigation';
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
    List, ListItem,
    Separator,
    Left,
    Right,
    Title,
    Segment,
    CheckBox,
} from 'native-base';

import style from './style';
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';

var t = require('tcomb-form-native');

var Form = t.form.Form;

var Person = t.struct({
    Date: t.String,              // a required string
    Nurse_Name: t.String,           // a required string
});

var options = {
    fields: {
        Date: {
            label: 'Date', // <= label for the name field
            placeholder: 'MM-DD-YYYY',
        },
        Nurse_Name: {
            label: 'Nurse Name', // <= label for the name field
            placeholder: 'First + Last Name',
        },
    }
}


export default class newTest extends Component {
    static navigationOptions = {
        title: 'NewTest',
        header: null,
        headerLeft: null,
    };

    render() {
        return (
            <View style={style.pageContainer}>

                <View style={style.contentContainer}>
                    <StyleProvider style={getTheme(platform)}>
                        <Header>
                            {/*<Left>
                                    <Button transparent>
                                        <Icon name='arrow-back' />
                                    </Button>
                                </Left>*/}
                            <Body>
                            <Title>New Test</Title>
                            </Body>
                        </Header>
                    </StyleProvider>

                    <StyleProvider style={getTheme(platform)}>
                        <Container style={{flex: 3.5,}}>
                            <Separator bordered>
                                <Text>Test Information</Text>
                            </Separator>
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
                    </StyleProvider>


                    <StyleProvider style={getTheme(platform)}>
                        <Container style={styles.beta}>
                            <Left>
                                <Text style={style.segment_Text}>
                                    Antihistamine Recently?
                                </Text>
                            </Left>
                            <Right>
                                <Segment>
                                    <Button first><Text>Yes</Text></Button>
                                    <Button last active><Text>No</Text></Button>
                                </Segment>
                            </Right>

                        </Container>
                    </StyleProvider>

                    <StyleProvider style={getTheme(platform)}>
                        <Container style={styles.beta}>
                            <Left>
                                <Text style={style.segment_Text}>
                                    Betablocker?
                                </Text>
                            </Left>
                            <Right>
                                <Segment>
                                    <Button first><Text>Yes</Text></Button>
                                    <Button last active><Text>No</Text></Button>
                                </Segment>
                            </Right>

                        </Container>
                    </StyleProvider>

                    <StyleProvider style={getTheme(platform)}>
                        <TextInput
                            style={styles.input1}
                            placeholder={'Details'}
                            multiline
                            blurOnSubmit
                            clearButtonMode="always"
                            placeholderTextColor={"rgba(198,198,204,1)"}
                            onChangeText={(text) => {
                                this.setState({text})
                            }}
                            onSubmitEditing={() => {
                                this.setState({text: ''})
                            }}
                            value={(this.state && this.state.text) || ''}
                        />
                    </StyleProvider>

                    <StyleProvider style={getTheme(platform)}>

                        <Container style={style.twoButtons_NewTest}>

                            <Button style={styles.save} onPress={this.save}>
                                <Icon style={style.Save_Button_Icon} name='ios-add-circle'/>
                                <Text style={style.Save_Button_Text}>Save</Text>
                            </Button>
                            <Button style={styles.clear} onPress={this.clear}>
                                <Icon style={style.Save_Button_Icon} name='trash'/>
                                <Text style={style.Save_Button_Text}>Clear</Text>
                            </Button>
                            <Button style={styles.next} onPress={this.next}>
                                <Icon style={style.Save_Button_Icon} name='ios-arrow-dropright'/>
                                <Text style={style.Save_Button_Text}>Next</Text>
                            </Button>
                        </Container>
                    </StyleProvider>


                </View>

                <StyleProvider style={getTheme(platform)}>

                    <Container style={style.tabContainer}>
                        <Footer>
                            <FooterTab>
                                <Button vertical active onPress={this.newT}>
                                    <Icon active style={style.tabButton_Icon} name="person"/>
                                    <Text style={style.tabButton_Text}>New Test </Text>
                                </Button>
                                <Button vertical onPress={this.searchP}>
                                    <Icon style={style.tabButton_Icon} name="paper"/>
                                    <Text style={style.tabButton_Text}>Records</Text>
                                </Button>


                                <Button vertical onPress={this.more}>
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
    beta: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    InputBox: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    ButtonBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    input1: {
        height: 60,
        width: 280,
        borderRadius: 5,
        borderWidth: 1,
        textAlign: 'left',
        margin: 3,
        alignSelf: 'center',
        borderColor: "#cccccc",
        fontSize: 12,
        paddingHorizontal: 6,
    },

    save: {
        height: 30,
        backgroundColor: '#0277BD',
        width: 70,
        margin: 3,
        justifyContent: 'center',
        alignSelf: 'center',

    },

    clear: {
        height: 30,
        backgroundColor: '#BDBDBD',
        width: 70,
        margin: 3,
        justifyContent: 'center',
        alignSelf: 'center',
    },

    next: {
        height: 30,
        backgroundColor: '#0277BD',
        width: 70,
        margin: 3,
        justifyContent: 'center',
        alignSelf: 'center',
    },


});
