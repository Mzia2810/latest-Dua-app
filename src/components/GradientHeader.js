import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
const { width, height } = Dimensions.get("window");
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const GradientHeader = ({props,DuaHeader,Verification}) => {

  return (
    <LinearGradient
      // Button Linear Gradient
      colors={["#4E54C8", "#A044FF"]}
      style={{
        alignItems: "center",
        height: hp("12%"),
        flexDirection: "row",
        // marginTop: hp("5%"),
      }}
    >
     {DuaHeader ?  <DuaHeader props= {props} /> : <Verification props={props}/> }
    </LinearGradient>
  );
};

export default GradientHeader;

const styles = StyleSheet.create({});
