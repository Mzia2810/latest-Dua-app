import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions, Button, Image, TextInput} from 'react-native';
const {width,height}=Dimensions.get('window');
const styles = StyleSheet.create ({
  placeholderStyles: {
    color: "grey",
    // backgroundColor:'red'
  },
  dropdownGender: {
    // marginHorizontal: 10,
    width:wp('27%'),
    // height:hp('60%'),
    // backgroundColor:'yellow',
    // marginBottom: 15,
    // position:'absolute',
    marginLeft:-hp('15%')
  },
  dropdown: {
    // backgroundColor:'yellow',
    // backgroundColor:'#FFFFFF',
    borderColor: "#fff",
    borderWidth:1,
    // height: 3,
    // marginTop:-hp('2%')
    // marginTop:hp('2.5%'),
    // marginBottom:hp('20%'),
    // position:'absolute',
    
  },
    container:{
      flex:1,
      height:height,
      width:width,
      position:'relative',
      backgroundColor:'#FFFFFF',
      // backgroundColor:'yellow',
    },
    text:{
      fontSize:15,
      fontWeight:"400",
    },
    title:{
      color:'#A044FF',
      fontWeight:"500",
      fontSize:16,
    },
    modalBackGround: {
        flex: 1,
        //backgroundColor:'yellow',
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContainer: {
        width: wp('70%'),
        height:hp('50%'),
        backgroundColor: 'white',
        // backgroundColor:'yellow',
        //paddingHorizontal: 20,
        //paddingVertical: 30,
        //borderRadius: 20,
        elevation: 20,
      },
      header: {
        width: '100%',
        height: 40,
       padding:hp('3%'),
       // padding:'5%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        //backgroundColor:'pink'
      },
      arrow:{
        position:'absolute',
        padding:5,
        paddingRight:5,
        // backgroundColor:'red',
        //left:wp('10%'),
        right:wp('2%'),
        //width:wp('40%'),
        //paddingLeft:wp('4%'),
        //float:'right'
      },
      card:{
        //flexDirection:'column',
        //backgroundColor:'red',
        //width:wp('80%'), 
        //alignSelf:'center',
        padding:hp('0.25%'),
        //paddingLeft:wp('10%'),
    },
    textF:{
      //  backgroundColor:'yellow',
        fontSize:14,
        fontWeight:"400",
        //paddingTop:34,
        //paddingLeft:20,
        //width:200,
        paddingTop:hp('1%')
    },
    flag:{
        padding:wp('1%'),
        //paddingRight:50,
        //left:34,
    },
    button:{
      backgroundColor:'#A044FF',
      borderRadius:10,
      padding:hp('3%'),
      justifyContent:'center',
      alignSelf:'center',
      width:wp('20%'),
      height:hp('4%'),
  },
  buttontxt:{
      color:'white',
      padding:3,
      alignSelf:'center'
  },


  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22,
  },
  modalView: {
    // width:hp('70%'),
    margin: 2,
    backgroundColor: "white",
    // borderRadius: 20,
    // padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    marginTop:10,
    marginBottom:10,
    width:100,
    borderRadius: 30,
    padding: 2,
    paddingHorizontal:5,
    elevation: 2,
    backgroundColor:'#A044FF',
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#A044FF",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
export default styles;