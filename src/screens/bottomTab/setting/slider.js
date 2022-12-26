import * as React from 'react';
import { useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions, Button, Image, TextInput,ScrollView} from 'react-native';
import Slider from '@react-native-community/slider';
import Modal from 'react-native-modal';
const {width,height}=Dimensions.get('window');
import styles from './styles.js';

const Brightness=()=>{
    const [range, setRange]= useState('50%');
    const [sliding, setSliding]= useState('Inactive')
    return(
        <Slider
         style={{width:wp('38%'),marginLeft:-hp('18.5%'), height:hp('0.2%'), marginTop:7,color:'red',position:'absolute'}}
         minimumValue={0}
         maximumValue={100}
         thumbTintColor='#A044FF'
         value={5}

        />
    );
};
export default Brightness;