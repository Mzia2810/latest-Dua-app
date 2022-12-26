// import * as React from 'react';
// import { Switch } from 'react-native-paper';

// const MyComponent = () => {
//   const [isSwitchOn, setIsSwitchOn] = React.useState(false);

//   const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

//   return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} style={{ trackColorOn:'red'}} />;
// };

// export default MyComponent;



import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import { StyleSheet, Text, View, Switch, Platform } from "react-native"

export default function Mycomponen () {
  const [enabled, setEnabled] = useState(false)

  const toggleSwitch = () => {
    setEnabled(oldValue => !oldValue)
  }

  const thumbColorOn = Platform.OS === "android" ? "#A044FF" : "#f3f3f3"
  const thumbColorOff = Platform.OS === "android" ? "gray" : "#f3f3f3"
  const trackColorOn = Platform.OS === "android" ? "#A044FF" : "#A044FF"
  const trackColorOff = Platform.OS === "android" ? "lightgray" : "black"

  return (
    <View style={styles.container}>
      <Switch
        onValueChange={toggleSwitch}
        value={enabled}
        thumbColor={enabled ? thumbColorOn : thumbColorOff}
        trackColor={{ false: trackColorOff, true: trackColorOn }}
        ios_backgroundColor={trackColorOff}
      />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})