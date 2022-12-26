// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
// Import React and Component
import React, {useState, useEffect, } from 'react';
import {ActivityIndicator, View, StyleSheet, Image} from 'react-native';





const AllDua = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('WhenWakeUp');
    }, 2000);
  
  },[])
 
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/little-kids/wakeup.png')}
        style={{width: '100%', height: '100%'}}
      />
      {/* <ActivityIndicator
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      /> */}
    </View>
  );
};

export default AllDua;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },

  activityIndicator: {
    position: 'absolute',
    alignItems: 'center',
    marginBottom: '9%',
    height: 20,
  },
});
