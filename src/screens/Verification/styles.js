import * as React from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions, Button, Image, TextInput} from 'react-native';
const {width,height}=Dimensions.get('window');
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
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
        //backgroundColor:'yellow',
        width:width,
        height:height,
        alignSelf:'center',  
    },
    text:{
        fontSize:14,
        fontWeight:"500",
        color:'#0F0702',
        alignSelf:'center',
        lineHeight:21,
    },
    image:{
        width:16,
        height:12,
        top:5,
        paddingRight:10,
    },
    input: {
        height: hp('5%'),
        //margin: 12,
        width:46,
        borderRadius:4,
        // borderColor:'#C4C4C4',
        borderWidth: 0.25,
        padding: 5,
        borderColor:'#C4C4C4',
        // fontWeight:"400",
        // fontSize:14,
        // color:'red'
        borderWidth:2,
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
    box:{
        paddingTop:30,
        padding:10,
        //backgroundColor:'pink',
       

        alignSelf:'center',
        //left:40,
    },
    resend:{
        color:'#4E54C8',
        fontSize:14,
        fontWeight:"500",
        alignSelf:'center',
        top:30,
        paddingTop:5,
    },
    placeholder:{
        fontWeight:"400",
        color:'red'
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