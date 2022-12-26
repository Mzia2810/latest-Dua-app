import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions, Button, Image} from 'react-native';
const {width,height}=Dimensions.get('window');

const styles = StyleSheet.create ({
    container:{
        backgroundColor:'#fff',
        flex:1,
        // justifyContent:'center',
        // alignContent:'center',  
    },
    view:{
        //marginLeft:30,
        padding:40,
        width:width,
        alignSelf:'center', 
        marginTop:hp('5%'),
       
    },
    text:{
        fontSize:14,
        fontWeight:"400",
        color:'#979797'
    },
    image:{
        width:12,
        height:15,
        paddingRight:10,
    },
    input: {
        height: 40,
        //margin: 12,
        borderBottomWidth: 0.25,
        width:wp('80%'),
        borderColor:'#939393',
        //padding: 10,
    },
    eye:{
        width:20,
        height:10,
        right:wp('10%'),
        bottom:2,
        top:15,
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