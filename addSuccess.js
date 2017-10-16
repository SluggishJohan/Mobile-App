import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
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
import style from './style';
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
} from 'native-base';

import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';


export default class addSuccess extends Component<{}> {
    static navigationOptions = {
        title: 'Add Success',
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

                    <Image source={require('./success.png')} style={style.Success_Image} />

                    <Text style={style.Success_Instruction}>
                        Add Patient
                    </Text>

                    <Text style={style.Success_Text}>
                        Successful
                    </Text>

                    <StyleProvider style={getTheme(platform)}>

                        <Button style={styles.newTest} onPress={this.newT}>
                            <Icon style={style.Button_Icon} name='paper'/>
                            <Text style={styles.buttonText}>Choose Item</Text>
                        </Button>
                    </StyleProvider>

                    <StyleProvider style={getTheme(platform)}>

                        <Button style={styles.back} onPress={this.back}>
                            <Icon style={style.Button_Icon} name='ios-arrow-back-outline'/>
                            <Text style={styles.buttonText}>Back</Text>
                        </Button>

                    </StyleProvider>

                </View>


                <StyleProvider style={getTheme(platform)}>

                    <Container style={style.tabContainer}>
                        <Footer>
                            <FooterTab>
                                <Button vertical active>
                                    <Icon active style={style.tabButton_Icon} name="person"/>
                                    <Text style={style.tabButton_Text}>New Test </Text>
                                </Button>
                                <Button vertical>
                                    <Icon style={style.tabButton_Icon} name="paper"/>
                                    <Text style={style.tabButton_Text}>Records</Text>
                                </Button>


                                <Button vertical>
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


    newTest: {
        height: 30,
        backgroundColor: '#0277BD',
        width: 200,
        margin: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 5,
    },

    back: {
        height: 30,
        backgroundColor: '#BDBDBD',
        width: 200,
        margin: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 5,
    },

    buttonText: {
        padding: 4,
        color: '#fff',
        fontWeight: 'bold',
        margin: 0,
        fontSize: 10,
    },
});
