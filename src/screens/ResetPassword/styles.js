import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
const {width,height}=Dimensions.get('window');
const styles = StyleSheet.create ({
    container:{
        backgroundColor:'#fff',
        //flex:1,
        width:wp('100%'),
        height:height,
        justifyContent:'center',
        alignContent:'center',
        alignSelf:'center' ,
        // paddingBottom:hp('40%'),
    },
    image:{
        //borderWidth:1,
        width:wp('35%'),
        height:hp('30%'),
        // marginTop:30,
        alignSelf:'center',
    },
    view:{
        //marginLeft:30,
        //backgroundColor:'yellow',
        width:wp('90%'),
        height:hp('90%'),
        alignSelf:'center',    
    },
    purple:{
        color:'#A044FF',
        fontWeight:"500",
        fontSize:18,
    },
    text:{
        fontWeight:"400",
        fontSize:16,
        color:'#0F0702',
    },
    bold:{
        fontWeight:"500",
        fontSize:16,
        color:'#0F0702',
    },
    Button:{
        borderRadius:50,
        alignSelf:'center',
    }
    ,
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