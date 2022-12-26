import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, Text, View, StyleSheet, StatusBar,TouchableOpacity, Dimensions, Button, Image, TextInput} from 'react-native';
const {width,height}=Dimensions.get('window');
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';

const styles = StyleSheet.create({
    container: {
      //marginTop: StatusBar.currentHeight,
      //backgroundColor:'#O3OAO4',
      color:'#A044FF',
      //backgroundColor:'black',
    },
    scene: {
      flex: 1,
    },
    tabBar:{
        backgroundColor:'black',
        color:'red',  
    },
    card:{
      width:wp('90%'),
      backgroundColor:'#fff',
      height:hp('10%'),
      alignSelf:'center',
      top:hp('5%'),
      //borderWidth:0.3,
      padding:10,
      paddingLeft:25,
      borderRadius:4,
      shadowOpacity:0.5,
        shadowColor: `rgba(0, 0, 0, 0.15)`,
        shadowOffset: {
            width: 3,
            height:3,
            },
        shadowRadius: 3.84,
        elevation: 3,
    },
    text:{
      width:86,
      height:21,
      fontWeight:"500",
      fontSize:14,
      color:'#0F0702'
    },
    caption:{
      width:115,
      height:15,
      fontSize:10,
      fontWeight:"400",
      color:'#ABABAB'
    },
    text2:{
      width:107,
      height:21,
      fontWeight:"500",
      fontSize:14,
      color:'#0F0702'
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
      })
export default styles;