import React, {Component} from 'react';
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
    ScrollView,
} from 'react-native'
import {
    StackNavigator,
} from 'react-navigation';
import {
    Container,
    Header,
    Left,
    List,
    ListItem,
    Switch,
    Item,
    Input,
    Icon,
    Body,
    Right,
    Content,
    Footer,
    FooterTab,
    Button,
    Badge,
    Segment,
    StyleProvider,
    Title,
} from 'native-base';

import style from './style';
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';
import MenuList from './MenuStyle';

var data = {
    "Category": {
        "Test Type": [
            "Histamine",
            "Control",
        ],
        "Grasses": [
            "Perennial Rye Grass",
            "Barley Pollen",
            "Wheat Triticum Vulgare",
            "Bermuda",
            "Bahia Grass / Paspalum",
            "Johnsom / Sorgum",
            "Timothy",
            "Kentucky Blue",
            "Yorkshire Fog",
            "Oats Common",
            "+",
        ],
        "Weeds": [
            "Compositae",
            "Dock / Sorrel",
            "Chenopodium / Lambsquart",
            "Ragweed",
            "Plantain",
            "Wall Pellitory",
            "Sagebrush / Mugwart",
            "+",
        ],
        "Moulds / Yeast": [
            "Penicillium Mix",
            "Mucor Racemosus",
            "Rhizopus",
            "Aspergillus",
            "Alternaria",
            "Candida albicans",
            "Pullularia",
            "Trichophyton mix",
            "Helminthosporium mix",
            "Cladosporium",
            "+",
        ],
        "Dermatophyts": [
            "House Dust Mix",
            "Storage mites",
            "D.Farinae",
            "D.Pteronyssinus",
            "+",
        ],
        "Animal Dander/Insects": [
            "Cat",
            "Dog",
            "Cattle",
            "Horse",
            "Guinea Pig Hair",
            "Feather Mix",
            "Cockroach",
            "Mosquito",
            "+",
        ],
        "Miscellaneous": [
            "Latex",
            "+",
            "+",
            "+",
            "+",
            "+",
            "+",
            "+",
        ],
        "Grains & Yeast": [
            "Yeast - Bakers",
            "Yeast - Brewers",
            "Corn - whole",
            "Barley - whole",
            "Rice",
            "Wheat Grain",
            "Cereal Mix",
            "Rye - Wholegrain mix",
            "+",
        ],
        "Dairy / Proteins": [
            "Cows milk",
            "Egg - white",
            "Egg - yolk",
            "Chicken",
            "Beef",
            "Pork",
            "+",
        ],
        "Fruit & Vegetables": [
            "Apple",
            "Avocado",
            "Banana",
            "Bean (Green String)",
            "Carrot",
            "Celery",
            "Kiwi Fruit",
            "Mango",
            "Melon",
            "Orange",
            "Peach",
            "Potato",
            "Strawberry",
            "Tomato",
            "+",
        ],
        "Nuts / Legumes": [
            "Almond",
            "Brazil",
            "Cashew",
            "Hazelnut",
            "Walnut - black",
            "Peanut",
            "Pecan",
            "Lupin",
            "Pea",
            "Soybean",
            "+",
        ],
        "Seafood": [
            "Codfish - mix",
            "Tuna",
            "Shrimp",
            "Oyster",
            "+",
            "+",
        ],
        "Special Seeds": [
            "Sunflower",
            "Sesame - white",
            "+",
            "+",
        ],
    },
    "Item":{
        "All": ["All"],
        "Apple": ["Xcode"],
        "Other": ["Sublime Text", "WebStrom",]
    }
};


export default class Allergen extends Component {
    static navigationOptions = {
        title: 'NewTest',
        header: null,
        headerLeft: null,
    };

    onPress(val) {
        alert(val);
    }

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
                            <Left>
                            </Left>
                            <Body>
                            <Title>Category</Title>
                            </Body>

                            <Right>
                                <Button transparent>
                                    <Icon style={{color: '#fff'}} name='list'/>
                                </Button>
                            </Right>
                        </Header>
                    </StyleProvider>

                    <Container>
                        <MenuList data={data} nSelected={1} tabSelected={0} click={this.onPress}/>

                        {/*<Container style={styles.list}>

                                <Button vertical style={styles.button} onPress={this.grasses}>
                                    <Icon style={style.Button_Icon} name='ios-add-circle' />
                                    <Text style={style.Save_Button_Text}>Grasses</Text>
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

                            <Container style={styles.list}>

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

                            </Container>*/}
                    </Container>
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

    list: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
    },

    button: {
        height: 50,
        width: '30%',
        justifyContent: 'center',
        margin: 5,
        backgroundColor: '#a5c1ef',
    },
    save: {
        backgroundColor: '#4286f4',
        height: 50,
        width: 98,
        justifyContent: 'center',
        margin: 5,

    },
    clear: {
        backgroundColor: '#f44144',
        height: 50,
        width: 98,
        justifyContent: 'center',
        margin: 5,

    },

});
