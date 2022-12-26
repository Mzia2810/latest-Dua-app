import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, Text, View, StyleSheet, StatusBar,TouchableOpacity, Dimensions, Button, Image, TextInput} from 'react-native';
const {width,height}=Dimensions.get('window');
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#A044FF',
      justifyContent:'center',
      alignContent:'center',
      padding:10,
      height:hp('10%'),
      width:width,
      //backgroundColor:'black',
    },
    form:{
        backgroundColor:'#fff',
        alignSelf:'center',
        //borderRightWidth:10,
        //borderLeftWidth:10,
        width:width,
        // height:hp('65%'),
        marginHorizontal:hp('1%'),
        flex:1,
        top:hp('3%'),
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
    },
    text:{
        width:126,
        height:45,
        fontWeight:"500",
        fontSize:30,
        color:'#FFFFFF',
        paddingTop:10,
        lineHeight:45,
    },
    caption:{
      lineHeight:21,
        width:254,
        height:21,
        fontSize:14,
        fontWeight:"400",
        color:'#FFFFFF',
        paddingTop:5,
    },
    image:{
        width:16,
        height:12,
        top:5,
        paddingRight:10,
    },

    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: wp("0%"),
          height: hp("2%"),
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
        marginTop: 15,
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
      },
    
      countrtyItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: width / 1.2,
        // height: '30%',
        backgroundColor: "rgba(203,193,219,0.2)",
        borderWidth: 1,
        borderColor: "rgba(203,193,219,0.2)",
        paddingHorizontal: 30,
        paddingVertical: 5,
        marginBottom: 20,
      },
      modalText: {
        // backgroundColor: 'red',
        width: wp("70%"),
        color: "#000",
        fontSize: 15,
      },
    
      buttonView: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: hp("2%"),
        borderBottomWidth: 1,
    
        borderBottomColor: "rgba(196, 196, 196, 1)",
      },
      inactiveButton: {
        color: "#C4C4C4",
        // backgroundColor:'#fff',
        // fontSize:1
        fontWeight: "bold",
        // paddingBottom:15,
        fontSize: hp("2.3%"),
        marginTop: hp("2%"),
      },
      activeButton: {
        color: "#A044FF",
        // backgroundColor:'#fff',
        // fontSize:1
        fontWeight: "bold",
        borderBottomWidth: 1,
        borderBottomColor: "#A044FF",
        paddingBottom: hp("1%"),
        fontSize: hp("2.3%"),
        marginTop: hp("2%"),
      },
    
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
        marginTop: 15,
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
      },
    
      countrtyItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: width / 1.2,
        // height: '30%',
        backgroundColor: "rgba(203,193,219,0.2)",
        borderWidth: 1,
        borderColor: "rgba(203,193,219,0.2)",
        paddingHorizontal: 30,
        paddingVertical: 5,
        marginBottom: 20,
      },
      modalText: {
        // backgroundColor: 'red',
        width: "70%",
        color: "#000",
        fontSize: 15,
      },


    })



export default styles;