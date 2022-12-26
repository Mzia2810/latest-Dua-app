import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, Text, View,ScrollView, StyleSheet, StatusBar,TouchableOpacity, Dimensions, Button, Image, TextInput} from 'react-native';
const {width,height}=Dimensions.get('window');
import styles from './styles.js';
import TabViewExample from './TabView';

const Profile=()=> {
  
  return (
    <ScrollView>
    <View style={styles.container}>
        <View style={{paddingTop:20}}>
        <View style={{ paddingLeft:10, width:wp('90%'), alignSelf:'center',}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingRight:10,}}>
              <Text>muhammad</Text>
            
            <Text>muhammad</Text>

            </View>
            <Text style={styles.text}>Hello Ali</Text>
            <Text style={styles.caption}>Get your awards by completing task</Text>
        </View>
        </View>
        <View style={styles.form}>
            <View style={{}}>
            <TabViewExample/>
            </View>
        </View>
    </View>
    </ScrollView>
  );
}

export default Profile;

