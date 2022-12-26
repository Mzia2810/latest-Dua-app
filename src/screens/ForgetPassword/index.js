import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions, Button, Image, TextInput} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
const {width,height}=Dimensions.get('window');
const ForgetPassword =({navigation})=>{
    return(
        <View style={styles.container}>
            {/* <Text>hello forget</Text> */}
            <View style={styles.view}>
            <View style={{}}>
                <View style={{flexDirection:'row'}}>
                <View style={{}}>
                <View style={{}}>
                <Fontisto style={{marginRight:hp('1.5%'), marginLeft:hp('1.5%'),padding:hp('0.5%')}} name="email" size={16} color="#979797"/>
                </View>
                </View>
                <Text style={styles.text}>Email</Text>
                </View>
            </View>
            <View style= {{flexDirection:'row'}}>
                <TextInput
                style={styles.input}
                />
            </View>
            <View style={{width:'70%', justifyContent:'center', alignSelf:'center',marginTop:30,}}>
            <View style={{alignSelf:'center'}}>
                        <TouchableOpacity
                        onPress={() =>navigation.navigate('Verification')}
                        style={styles.button}>
                            <Text style={styles.buttontxt}>Send</Text>
                        </TouchableOpacity>
                        </View>
            </View>
            <View style={{alignSelf:'center',}}>
                <TouchableOpacity onPress={() =>navigation.goBack()}>
                <Text style={styles.login}>Back to login?</Text>
                </TouchableOpacity>
            </View>
            </View>

        </View>
    );};
export default ForgetPassword;
const styles = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor:'#fff'
        //justifyContent:'center',
        //alignContent:'center',  
        // backgroundColor:'red'
    },
    view:{
        //marginLeft:30,
        width:wp('90%'),
        marginTop:hp('8%'),
        alignSelf:'center',  
        marginHorizontal:wp('2%') ,
        // backgroundColor:'pink' ,
        justifyContent:'center',
        alignContent:'center'
    },
    text:{
        fontSize:14,
        fontWeight:"400",
        color:'#979797',
        lineHeight:21,
    },
    image:{
        width:16,
        height:12,
        top:5,
        marginRight:10,
    },
    input: {
        height: 40,
        //margin: 12,
        borderBottomWidth: 0.25,
        width:wp('85%'),
        alignSelf:'center',
        borderColor:'#939393',
        marginTop: hp('2%'),
        marginLeft:hp('1%')
        
    },
    login:{
        color:'#828282',
        //color:'yellow',
        fontSize:14,
        fontWeight:"400",
        //left:190,
        //marginLeft:92,
        alignSelf:'center',
        // top:30,
        marginTop:hp('0.5%'),
        // backgroundColor:'red'
    },

    button:{
        backgroundColor:'#A044FF',
        borderRadius:10,
        margin:10,
        justifyContent:'center',
        alignContent:'center',
        width:wp('65%'),
        height:hp('6%'),
    },
    buttontxt:{
        color:'white',
        margin:3,
        alignSelf:'center'
    },

});