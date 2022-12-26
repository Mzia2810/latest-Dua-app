import { View, Text,ImageBackground } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Ionicons from '@expo/vector-icons/Entypo';
import { Entypo } from '@expo/vector-icons'; 

const Header = () => {
  return (
    <ImageBackground source={require('../../../assets/L1.png')} resizeMode='stretch'style={styles.headerContainer}>
    <View style={styles.firstContainer}>
      <View>
        <Text style={[{color:'#fff',},styles.FridayHeading]}>Friday</Text>
        <Text style={{color:'#fff'}}>04 March 2022</Text>
      </View>
      <View>
        <View style={{flexDirection:'row'}}>

        <Text style={{color:'#fff',fontWeight:'bold',marginRight:55}}>Magrib Time</Text>
        <Text style={{color:'#fff'}}>18:16</Text>
        
        </View>
        <View style={{flexDirection:'row'}}>

        <Text style={{color:'#fff',fontWeight:'bold',marginRight:25}}>Remaining Time </Text>
        <Text style={{color:'#fff'}}>0:11:31</Text>
        
        </View>
       
      </View>
    </View>
    <View style={styles.firstContainer}>
      <View>
        <Text style={[{color:'#fff',},styles.FridayHeading]}>Islamic Date</Text>
        <Text style={{color:'#fff',fontSize:12}}>01 Shaban 1443 AD (-1) Day</Text>
      </View>
      <View style={{flexDirection:'row'}}>
      <Ionicons name="location" size={15} color="#fff" />
      
        
        <Text style={{color:'#fff',fontSize:12}}>124 City Road, London, NewYork </Text>
      </View>
    </View>
    </ImageBackground>
  )
}

export default Header