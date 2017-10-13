import {StyleSheet} from 'react-native';

var style = StyleSheet.create({
    pageContainer: {
        flex: 1,
    },

    tabContainer: {
        flex: 1,
    },

    contentContainer: {
        flex: 12,
        backgroundColor: '#FFFFFF',
        //justifyContent: 'space-around',
    },

    headerContainer: {
        flex: 2,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'space-around',
    },

    contentContainer_has_header: {
        flex: 10,
        backgroundColor: '#FFFFFF',
        //justifyContent: 'space-around',
    },

    heading_1:{
        fontSize: 20,
        textAlign: 'left',
        margin: 20,
        marginTop: 30,
        //fontWeight: 'bold',
        //fontFamily: '',
        //color: '#FFFFFF',
        backgroundColor: 'rgba(0,0,0,0)',
    },

    form_Container:{
        justifyContent: 'center',
        marginTop: 0,
        padding: 20,
        //backgroundColor: '#ffffff',
    },

    instructions:{
        fontSize: 12,
        marginLeft: 20,
        textAlign: 'left',
    },

    navigation_Heading:{
        fontSize: 18,
        textAlign: 'center',
        //margin: 20,
        //marginTop: 15,
        //fontWeight: 'bold',
        //fontFamily: '',
        //color: '#FFFFFF',
        backgroundColor: 'rgba(0,0,0,0)',
    },

    searchPage_Button:{
        width: 200,
        height: 30,
        //marginRight: 50,
        //marginLeft: 50,
        margin: 7,
        //paddingTop: 10,
        //paddingBottom: 10,
        //borderRadius: 10,
        //borderWidth: 1,
        //borderColor: 'rgba(253,254,254,0.3)',
        backgroundColor:'rgba(52, 152, 219,0.6)',
    },

    Confirm_Button:{
        width: 120,
        height: 50,
        //marginRight: 50,
        //marginLeft: 50,
        margin: 7,
        //paddingTop: 10,
        //paddingBottom: 10,
        //borderRadius: 10,
        //borderWidth: 1,
        //borderColor: 'rgba(253,254,254,0.3)',
        backgroundColor:'rgba(52, 152, 219,0.6)',
    },

    left_arrow: {
        width: 30,
        height: 30,
        marginLeft: 20,
        margin: 10,
    },

    table_Container:{
        //flex: 1,
        marginTop: 15,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
    },

    table_Head:{
        height: 25,
        backgroundColor: '#f1f8ff',
    },

    table_Row: {
        height: 30,
    },

    table_Text_Head: {
        fontSize: 9,
        //marginLeft: 5,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    table_Text: {
        fontSize: 8,
        //marginLeft: 5,
        textAlign: 'center',
    },

    table_Button_Opacity: {
        flex:1,


    },

    table_Row_Button_Cell:{
        height: 30,
        backgroundColor: 'rgba(39, 174, 96, 0.6)',
    },

    table_Text_Button_Cell: {
        fontSize: 8,
        textAlign: 'center',
        color: '#FDFEFE',
    },


});

export default style;
