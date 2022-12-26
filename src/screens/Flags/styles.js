import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions, Button, Image, TextInput} from 'react-native';
const {width,height}=Dimensions.get('window');
const styles = StyleSheet.create ({
    container:{
        //backgroundColor:'yellow',
        flex:1,
        height:height,
        width:width,
        justifyContent:'center',
        alignContent:'center',  
    },
    card:{
        flexDirection:'row',
        //backgroundColor:'red',
        width:wp('80%'), 
        alignSelf:'center',
    },
    text:{
       //backgroundColor:'yellow',
        fontSize:14,
        fontWeight:"400",
        paddingTop:34,
        paddingLeft:20,
        width:200.
    },
    flag:{
        padding:30,
        paddingRight:50,
        left:34,
        //top:20
    },
    radiobtn:{
        paddingTop:20,
        paddingRight:50,
        left:114,

    },
});
export default styles;