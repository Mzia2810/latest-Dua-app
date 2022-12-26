import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./MainStack";
import Auth from "./Auth";
// import { useSelector } from "react-redux";
// import userSlice from "../redux/userSlice";
// import { store } from '../redux/store'
// import { Provider } from 'react-redux'
const AppRout = () => {
  // const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  // console.log('is Logged In =====',isLoggedIn);

  return (
    <NavigationContainer>

{/* <Auth /> */}

      {/* {isLoggedIn ? */}
       <MainStack /> 
       {/* : <Auth />} */}
    </NavigationContainer>
  );
};

export default AppRout;
