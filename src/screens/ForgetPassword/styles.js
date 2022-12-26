import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions, Button, Image, TextInput} from 'react-native';
const {width,height}=Dimensions.get('window');
const styles = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor:'#fff'
        //justifyContent:'center',
        //alignContent:'center',  
    },
    view:{
        //marginLeft:30,
        width:wp('90%'),
        marginTop:hp('8%'),
        alignSelf:'center',  
        marginHorizontal:wp('2%')  
    },
    text:{
        fontSize:14,
        fontWeight:"400",
        color:'#979797'
    },
    image:{
        width:16,
        height:12,
        top:5,
        paddingRight:10,
    },
    input: {
        height: 40,
        //margin: 12,
        borderBottomWidth: 0.25,
        width:wp('90%'),
        borderColor:'#939393',
        //padding: 10,
    },
    login:{
        color:'#828282',
        //color:'yellow',
        fontSize:14,
        fontWeight:"400",
        //left:190,
        //paddingLeft:92,
        alignSelf:'center',
        top:30,
        paddingTop:5,
    },

    button:{
        backgroundColor:'#A044FF',
        borderRadius:10,
        padding:10,
        justifyContent:'center',
        alignContent:'center',
        width:wp('70%'),
        height:hp('7%'),
    },
    buttontxt:{
        color:'white',
        padding:3,
        alignSelf:'center'
    },

});
export default styles;