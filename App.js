import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useEffect } from "react";
import AppRout from "./src/navigations/AppRout";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";




export default function App() {
  return (<SafeAreaView style={{flex:1}}>
 <Provider store={store}>

    <AppRout />
 </Provider>
  </SafeAreaView> )
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
