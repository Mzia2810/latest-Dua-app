import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions, Button, Image, TextInput} from 'react-native';
const {width,height}=Dimensions.get('window');
const styles = StyleSheet.create ({
    container:{
        //backgroundColor:'yellow',
        flex:1,
        justifyContent:'center',
        alignContent:'center', 
        //position:'fixed', 
    },
    background:{
        backgroundColor:'black',
        flex:1
    },
    form:{
        //backgroundColor:'red',
        backgroundColor:'#fff',
        //flex:1,
        width:width,
        height:hp('80%'),
        top:hp('30%'),
        bottom:hp('5%'),
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
        //position:'fixed', 
       
    },
    heading:{
        color:'#A044FF',
        fontWeight:"500",
        fontSize:24,
        padding:10,
        alignSelf:'center'
    },
    view:{
        //marginLeft:30,
        paddingLeft:25,
        paddingRight:25,
        //backgroundColor:'yellow',
        width:width,
        height:hp('70%'),
        alignSelf:'center',    
    },
    text:{
        fontSize:14,
        fontWeight:"400",
        color:'#979797'
    },
    image:{
        width:13,
        height:10,
        //paddingRight:10,
    },
    input: {
        height:hp('5%'),
        //margin: 12,
        borderBottomWidth: 0.25,
        width:wp('90%'),
        borderColor:'#939393',
        paddingLeft: 30,
        padding:8,
        fontSize:14,
        fontWeight:"400",
        //color:'#222222',
    },
    eye:{
        width:20,
        height:10,
        //right:'12%',
        bottom:2,
        top:15,
    },
    resend:{
        color:'#4E54C8',
        fontSize:14,
        fontWeight:"500",
        alignSelf:'center',
        // top:30,
        //paddingTop:5,
    },
    login:{
        color:'#828282',
        //color:'yellow',
        fontSize:14,
        fontWeight:"400",
        //left:190,
        //paddingLeft:92,
        // alignSelf:'center',
        alignSelf:'flex-end'
        //paddingTop:5,
    },
    option:{
        color:'#828282',
        //color:'yellow',
        fontSize:14,
        fontWeight:"400",
        //left:190,
        //paddingLeft:92,
        alignSelf:'center',
        //top:150,
        paddingBottom:wp('2%'),
    },
    google:{
        borderRadius:12,
        padding:3,
        backgroundColor:'#F14432',
        //backgroundColor:'yellow',
        // justifyContent:'center',
        // alignContent:'center',
       // paddingLeft:10,
       width:wp('35%'),
       height:hp('6%'),
    },
    btnText:{
        color:'white',
       
        //borderRadius:12,
       // paddingLeft:wp('10%'),
        //paddingRight:wp('2%'),
        alignSelf:'center',
        //backgroundColor:'yellow',
    },
    facebook:{
        backgroundColor:'#3B5998',
        justifyContent:'center',
        alignContent:'center',
       
        borderRadius:12,
        padding:3,
        // backgroundColor:'#F14432',
        //backgroundColor:'yellow',
        // justifyContent:'center',
        // alignContent:'center',
       // paddingLeft:10,
       width:wp('35%'),
       height:hp('6%'),
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
    forgot:{
        //position:'absolute',
        fontSize:hp('3%'),
        fontWeight:"400",
        alignSelf:'flex-end',
        padding:wp('2%')
    },
});
export default styles;