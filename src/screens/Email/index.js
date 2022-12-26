import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions, Button, Image} from 'react-native';
const {width,height}=Dimensions.get('window');
import styles from './styles';



const Email =({navigation})=>{
    return(
        <View  style ={styles.container}>
            {/* <Text>hello reset</Text> */}
            <View style={styles.view}>
                <View>
                    <Image
                    style={styles.image}
                    source={require('../../../assets/email1.png')}
                    />
                </View>
            <View style={{padding:10,paddingTop:15}}>
                <Text style={styles.purple}>Verify your email address to complete your registration</Text>
            </View>
            <View style={{padding:5}}>
                <Text style={styles.text}>Hi Muhammad Ali</Text>
            </View>
            <View style={{padding:5}}>
                <Text style={styles.bold}>Welcome to Dua App</Text>
            </View>
            <View style={{padding:5}}>
                <Text style={styles.text}>Please verify your email address to complete your registration to continue</Text>
            </View>
            <View style={{width:wp('50%'), justifyContent:'center', alignSelf:'center',paddingTop:10,paddingBottom:15}}>
            <View style={{alignSelf:'center'}}>
                        <TouchableOpacity
                        onPress={() =>navigation.navigate('Reset')}
                        style={styles.button}>
                            <Text style={styles.buttontxt}>Verify Email</Text>
                        </TouchableOpacity>
                        </View>
            </View>
            <View style={{paddingTop:5,paddingLeft:10,}}>
                <Text style={styles.text}>Thanks for your time</Text>
            </View>
            <View style={{paddingLeft:10,}}>
                <Text style={styles.bold}>Dua App Team</Text>
            </View>
            <View>
            </View>
            </View>
        </View>
    );
};
export default Email;