
import  React, {useRef, useState} from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions, Button, Image, TextInput, ScrollView, ImageBackground} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ForgetPassword from '../ForgetPassword/index';
const {width,height}=Dimensions.get('window');

import {useDispatch} from 'react-redux';
import {setSignIn} from '../../redux/userSlice';

//import styles from './styles';
const Login =({navigation})=>{

    const [isLoggedIn, selectIsLoggedIn] = useState(false);

    const dispatch = useDispatch();


    


    // const dispatch = useDispatch();
   
    const handleLogin =  () => {
      
      selectIsLoggedIn(true)
  
  
    
      
        dispatch(setSignIn(isLoggedIn));
      };
    
  

    return(
        
        <View style={styles.container}>
            <ImageBackground
            style={{height:hp('100%'), width:wp('100%')}}
            source={require('../../../assets/bg.png')}
            >

            <View>
                <View style={styles.form}>
                    {/* <ScrollView> */}
                    <View>
                        <Text style={styles.heading}>Login</Text>
                    </View>
                    <View style={styles.view}>
                    <View style={{marginTop:20}}>
                    </View>
                    
                    <View style={{}}>
                    <View style={{flexDirection:'row'}}>
                    <View style={{ marginLeft:wp('8%'),marginRight:wp('3%'),padding:hp('0.5%'), }}>
                    <Fontisto name="email" size={15} color="#979797"/>
                    </View>
                    <Text style={styles.text}>Email</Text>
                    </View>
                    </View>
                    <View style= {{flexDirection:'row'}}>
                    <TextInput
                    style={styles.input}
                    placeholder='mali@gmail.com'
                    keyboardType='email'
                    />
                    </View>
                    <View style={{marginTop:hp('3%'),}}>
                    <View style={{flexDirection:'row'}}>
                    <View style={{ marginLeft:wp('10%'),marginRight:wp('3%'),}}>
                    <AntDesign name="lock" size={16} color="#979797"/>
                    </View>
                    <Text style={styles.text}>Password</Text>
                    </View>
                    </View>
                    <View style= {{flexDirection:'row'}}>
                    <TextInput
                    style={styles.input}
                    placeholder='Password'
                    keyboardType='password'
                    />
                    <TouchableOpacity style={{marginLeft:hp('44%'),marginTop:10, position:'absolute'}} >
                    <EvilIcons name='eye' size={27} color="#979797" />
                    </TouchableOpacity>
                    {/* <View style={{backgroundColor:'red',height:hp('3%'), marginRight:hp('10%')}}>
                   
                    </View> */}
                    </View>
                    <View style={[styles.forgot,{marginTop:-25,marginLeft:hp('30%')}]}>
                        <TouchableOpacity onPress={()=> navigation.navigate('ForgetPassword')}>
                        <Text style={styles.login}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={{justifyContent:'center', alignSelf:'center',marginTop:hp('1%'),}}>
                    <View style={{alignSelf:'center'}}>
                        <TouchableOpacity
                        onPress={handleLogin}
                        style={styles.button}>
                            <Text style={styles.buttontxt}>Login</Text>
                        </TouchableOpacity>
                        </View>
                    <View style={{flexDirection:'row',margin:hp('2%'), justifyContent:'center', alignContent:'center',}}>
                    <Text style={styles.login}>Don't have an account? </Text>
                    <TouchableOpacity onPress={() =>navigation.navigate('signup')}>
                    <Text style={styles.resend}>Sign Up</Text>
                    </TouchableOpacity>
                    </View>
                    <View>
                    <Text style={styles.option}>or log in with </Text>
                    </View>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'center', alignContent:'center',}}>
                        <View >
                        <TouchableOpacity
                        style={styles.google}>
                            <View style={{flexDirection:'row', justifyContent:'center', alignContent:'center',margin:hp('1%')}}>
                            <View style={{marginRight:hp('1.3%')}}>
                            <AntDesign name='google' size={20} color="white"/>
                            </View>
                            <View style={{/*margin:wp('2%'), width:wp('30%'), alignContent:'center', justifyContent:'center'*/}}>
                            <Text style={styles.btnText}>Google</Text>
                            </View>
                            </View>
                        </TouchableOpacity>
                        </View>
                        <View >
                        <TouchableOpacity
                        style={styles.facebook}>
                            <View style={{flexDirection:'row',justifyContent:'center', alignContent:'center',margin:hp('1%')}}>
                            <View style={{marginRight:hp('1.3%') }}>
                            <FontAwesome name='facebook' size={20} color="white"/>
                            </View>
                            <View >
                            <Text style={styles.btnText}>Facebook</Text>
                            </View>
                            </View>
                        </TouchableOpacity>
                        </View>
                    </View>
                    </View>
                    {/* </ScrollView> */}
                </View>
            </View>
            </ImageBackground>
        </View>
        
    );
};
export default Login;

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
        height:hp('75%'),
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
        margin:10,
        alignSelf:'center'
    },
    view:{
        //marginLeft:30,
        marginLeft:25,
        marginRight:25,
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
        //marginRight:10,
    },
    input: {
        marginTop:hp('2%'),
        height:hp('5%'),
        //margin: 12,
        borderBottomWidth:0.25,
        width:wp('80%'),
        borderColor:'#939393',
        //marginLeft: wp('2%'),
        marginLeft:hp('5%'),
        // marginRight:hp('3%'),
        fontSize:14,
        fontWeight:"400",
        color:'#222222',
        paddingLeft:hp('5%')
    },
  
    resend:{
        color:'#4E54C8',
        fontSize:14,
        fontWeight:"500",
        alignSelf:'center',
        top:30,
        //marginTop:5,
    },
    login:{
        color:'#979797',
        //color:'yellow',
        fontSize:14,
        fontWeight:"400",
        //left:190,
        //marginLeft:92,
        alignSelf:'center',
        top:hp('30'),
        //marginTop:5,
    },
    option:{
        color:'#828282',
        //color:'yellow',
        fontSize:14,
        fontWeight:"400",
        //left:190,
        //marginLeft:92,
        alignSelf:'center',
        //top:150,
        marginBottom:wp('2%'),
    },
    google:{
        borderRadius:12,
        margin:hp('1%'),
        backgroundColor:'#F14432',
        //backgroundColor:'yellow',
        // justifyContent:'center',
        // alignContent:'center',
       // marginLeft:10,
       width:wp('35%'),
       height:hp('5.5%'),
    },
    btnText:{
        color:'white',
        // width:100,
        // height:15,
        //borderRadius:12,
       // marginLeft:wp('10%'),
        //marginRight:wp('2%'),
        alignSelf:'center',
        //backgroundColor:'yellow',
    },
    facebook:{
        borderRadius:12,
        // margin:10,
        backgroundColor:'#3B5998',
        justifyContent:'center',
        alignContent:'center',
        width:wp('35%'),
        height:hp('5.5%'), 
        margin:hp('1%'),
    },
    button:{
        backgroundColor:'#A044FF',
        borderRadius:10,
        // margin:10,
        justifyContent:'center',
        alignContent:'center',
        width:wp('70%'),
        height:hp('7%'),
        marginTop:50,
    },
    buttontxt:{
        color:'white',
        margin:3,
        alignSelf:'center'
    },
    forgot:{
        position:'absolute',
        fontSize:14,
        fontWeight:"400",
        // alignSelf:'flex-end',
        // marginRight:wp('1%'),
        // margin:hp('1%'),
    },
});