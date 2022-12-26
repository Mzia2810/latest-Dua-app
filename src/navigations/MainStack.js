import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Pressable,
} from "react-native";
import React, { useState } from "react";

import Ionicons from "@expo/vector-icons/Feather";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/bottomTab/HomeScreen";
import Splash from "../screens/SplashScreen";
import SvgComponent from "../screens/SplashScreen";
import BottomTabNavigator from "./BottonTab";
import AllDua from "../screens/allDua";
import WhenWakeUp from "../screens/when-waking-up";
import Premium from "../screens/Premium/index";
import Flags from "../screens/Flags/index";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import Pop from "../screens/bottomTab/setting/popup";
import Suggestions from "../screens/suggestion/index";
import LanguagePicker, { ILanguagePicker } from "react-native-language-select";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as Brightness from "expo-brightness";
import GradientHeader from "../components/GradientHeader";

const data: ILanguagePicker[] = [
  {
    title: "English",
    imageSource: require("../../assets/america.png"),
    language: "en",
  },
  {
    title: "Italian",
    imageSource: require("../../assets/italy.png"),
  },
  {
    title: "German",
    imageSource: require("../../assets/germany.png"),
  },
  {
    title: "Turkish",
    imageSource: require("../../assets/turkey.png"),
    language: "tr-TR",
  },
  {
    title: "Swedish",
    imageSource: require("../../assets/sweden.png"),
  },
  {
    title: "Japanese",
    imageSource: require("../../assets/japan.png"),
  },
];








const Stack = createNativeStackNavigator();

const MainStack = ({navigation}) => {


  const [modalVisible, setModalVisible] = useState(false);
  const [language, setLanguage] = useState("English");
  const [image, setImage] = useState("../../assets/america.png");

  const handleBrightness = async () => {
    const { status } = await Brightness.requestPermissionsAsync();
    if (status === "granted") {
      Brightness.setSystemBrightnessAsync(1);
    }
  };



  const DuaHeader = ({props}) => {
    const {navigation} = props  ; 
    const canGoBack =() =>{
     

      if (navigation.canGoBack()) {
        navigation.goBack();
      }
    }
    return (
      <View style={{ flexDirection: "row", marginHorizontal: hp('2%'),marginTop:hp('5%') , width:wp('90%')}}>
       <View style={{flexDirection:'row'}}>

        <TouchableOpacity  onPress={canGoBack}>
          <MaterialIcons name="arrow-back" size={25} color="#fff" />
        </TouchableOpacity>
  <Text style={{fontSize:18,fontWeight:'500',marginLeft:35,color:'#ffff'}} >All Dua's</Text>
       </View>
        <View
          style={{
            // backgroundColor: "green",
          marginLeft:hp('17%'),
            flexDirection: "row",
          }}
        >
          <Image
            style={{
              backgroundColor: "#fff",
              borderRadius: 50,
              marginTop: 2,
              marginRight: 7,
            }}
            source={require("../../assets/usa.png")}
          />
          <Text style={{ color: "#fff", fontSize: 15 ,marginLeft:2}}>{language}</Text>
          <TouchableOpacity style={{marginTop:3,marginLeft:5}} onPress={() => setModalVisible(true)}>
            <Ionicons name="chevron-down" size={20} color="#fff" />
          </TouchableOpacity>
{/*   
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View
              style={[
                styles.centeredView,
                {  height: hp("100%") ,marginTop:-hp('1%')},
              ]}
            >
              <View style={styles.modalView}>
                <LanguagePicker
                  // initialIndex={1}
                  data={data}
                  onSelect={(selectedItem: ILanguagePicker) => {
                    setLanguage(selectedItem.title);
                    setImage(selectedItem.Image);
                    setModalVisible(!modalVisible)
                  }}
                />
               
              </View>
            </View>
          </Modal> */}
        </View>
      </View>
    );
  };
  const WhenWakeHeader = ({props}) => {
    const {navigation} = props  ; 
    const canGoBack =() =>{
     

      if (navigation.canGoBack()) {
        navigation.goBack();
      }
    }
    return (
      <View style={{ flexDirection: "row", marginHorizontal: hp('2%'),marginTop:hp('5%') , width:wp('90%')}}>
       <View style={{flexDirection:'row'}}>

        <TouchableOpacity  onPress={canGoBack}>
          <MaterialIcons name="arrow-back" size={25} color="#fff" />
        </TouchableOpacity>
  <Text style={{fontSize:18,fontWeight:'500',marginLeft:20,color:'#ffff'}} >WhenWakeUp</Text>
       </View>
        <View
          style={{
            // backgroundColor: "green",
          marginLeft:hp('13%'),
            flexDirection: "row",
          }}
        >
          <Image
            style={{
              backgroundColor: "#fff",
              borderRadius: 50,
              marginTop: 2,
              marginRight: 7,
            }}
            source={require("../../assets/usa.png")}
          />
          <Text style={{ color: "#fff", fontSize: 15 ,marginLeft:2}}>{language}</Text>
          <TouchableOpacity style={{marginTop:3,marginLeft:5}} onPress={() => setModalVisible(true)}>
            <Ionicons name="chevron-down" size={20} color="#fff" />
          </TouchableOpacity>
  
          {/* <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View
              style={[
                styles.centeredView,
                { height: hp("100%") ,marginTop:-hp('1%')},
              ]}
            >
              <View style={styles.modalView}>
                <LanguagePicker
                  // initialIndex={1}
                  data={data}
                  onSelect={(selectedItem: ILanguagePicker) => {
                    setLanguage(selectedItem.title);
                    setImage(selectedItem.Image);
                    setModalVisible(!modalVisible)
                  }}
                />
                
              </View>
            </View>
          </Modal> */}
        </View>
      </View>
    );
  };



  const PremiumHeader = ({props}) => {
    const {navigation} = props  ; 
    const canGoBack =() =>{
     

      if (navigation.canGoBack()) {
        navigation.goBack();
      }
    }
    return (
      <View style={{ flexDirection: "row", marginHorizontal: hp('2%'),marginTop:hp('5%') , width:wp('90%')}}>
       <View style={{flexDirection:'row'}}>

        <TouchableOpacity  onPress={canGoBack}>
          <MaterialIcons name="arrow-back" size={25} color="#fff" />
        </TouchableOpacity>
  <Text style={{fontSize:18,fontWeight:'500',marginLeft:35,color:'#ffff'}} >Premium</Text>
       </View>
        <View
          style={{
            // backgroundColor: "green",
          marginLeft:hp('17%'),
            flexDirection: "row",
          }}
        >
          <Image
            style={{
              backgroundColor: "#fff",
              borderRadius: 50,
              marginTop: 2,
              marginRight: 7,
            }}
            source={require("../../assets/usa.png")}
          />
          <Text style={{ color: "#fff", fontSize: 15 ,marginLeft:2}}>{language}</Text>
          <TouchableOpacity style={{marginTop:3,marginLeft:5}} onPress={() => setModalVisible(true)}>
            <Ionicons name="chevron-down" size={20} color="#fff" />
          </TouchableOpacity>
{/*   
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View
              style={[
                styles.centeredView,
                {  height: hp("100%") ,marginTop:-hp('1%')},
              ]}
            >
              <View style={styles.modalView}>
                <LanguagePicker
                  // initialIndex={1}
                  data={data}
                  onSelect={(selectedItem: ILanguagePicker) => {
                    setLanguage(selectedItem.title);
                    setImage(selectedItem.Image);
                    setModalVisible(!modalVisible)
                  }}
                />
               
              </View>
            </View>
          </Modal> */}
        </View>
      </View>
    );
  };
  
  const FlagHeader = ({props}) => {
    const {navigation} = props  ; 
    const canGoBack =() =>{
     

      if (navigation.canGoBack()) {
        navigation.goBack();
      }
    }
    return (
      <View style={{ flexDirection: "row", marginHorizontal: hp('2%'),marginTop:hp('5%') , width:wp('90%')}}>
       <View style={{flexDirection:'row'}}>

        <TouchableOpacity  onPress={canGoBack}>
          <MaterialIcons name="arrow-back" size={25} color="#fff" />
        </TouchableOpacity>
  <Text style={{fontSize:18,fontWeight:'500',marginLeft:35,color:'#ffff'}} >Flags</Text>
       </View>
        <View
          style={{
            // backgroundColor: "green",
          marginLeft:hp('17%'),
            flexDirection: "row",
          }}
        >
          <Image
            style={{
              backgroundColor: "#fff",
              borderRadius: 50,
              marginTop: 2,
              marginRight: 7,
            }}
            source={require("../../assets/usa.png")}
          />
          <Text style={{ color: "#fff", fontSize: 15 ,marginLeft:2}}>{language}</Text>
          <TouchableOpacity style={{marginTop:3,marginLeft:5}} onPress={() => setModalVisible(true)}>
            <Ionicons name="chevron-down" size={20} color="#fff" />
          </TouchableOpacity>
  
          {/* <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View
              style={[
                styles.centeredView,
                {  height: hp("100%") ,marginTop:-hp('1%')},
              ]}
            >
              <View style={styles.modalView}>
                <LanguagePicker
                  initialIndex={1}
                  data={data}
                  onSelect={(selectedItem: ILanguagePicker) => {
                    setLanguage(selectedItem.title);
                    setImage(selectedItem.Image);
                  }}
                />
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          </Modal> */}
        </View>
      </View>
    );
  };
  
  const SuggestionHeader = ({props}) => {
    const {navigation} = props  ; 
    const canGoBack =() =>{
     

      if (navigation.canGoBack()) {
        navigation.goBack();
      }
    }
    return (
      <View style={{ flexDirection: "row", marginHorizontal: hp('2%'),marginTop:hp('5%') , width:wp('90%')}}>
       <View style={{flexDirection:'row'}}>

        <TouchableOpacity  onPress={canGoBack}>
          <MaterialIcons name="arrow-back" size={25} color="#fff" />
        </TouchableOpacity>
  <Text style={{fontSize:18,fontWeight:'500',marginLeft:35,color:'#ffff'}} >Suggestions</Text>
       </View>
      
      </View>
    );
  };
  



 
  





  return (
    <>
      <Stack.Navigator initialRouteName="Splash">
        {/*  SplashScreen */}
        <Stack.Screen
          name="Splash"
          options={{
            headerShown: false,
          }}
          component={Splash}
        />
        {/*  All Dua */}
        <Stack.Screen
          name="AllDua"
          options={(props) => {
        
            console.log('this my props All Dua =============',props);
            return {
              headerStyle: {
                backgroundColor:
                  "linear-gradient(to bottom, #4e54c8 0%, #a044ff 100%)",
              },
              headerTintColor: "#fff",
  
              // headerLeft: () => <Ionicons name="sun" size={25} color="#fff" />,
              headerTitle: "When Waking up ",
              header: () => <GradientHeader  DuaHeader={DuaHeader}  props={props} />,
            headerStyle: {
              backgroundColor: "transparent",
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
            },
            headerShown: true,
            }
          }}
          component={AllDua}
        />
        {/*  When Wake up */}
        <Stack.Screen
          name="WhenWakeUp"
          options={(props) => {
           
            return {
              headerStyle: {
                backgroundColor:
                  "linear-gradient(to bottom, #4e54c8 0%, #a044ff 100%)",
              },
              headerTintColor: "#fff",
  
              // headerLeft: () => <Ionicons name="sun" size={25} color="#fff" />,
              headerTitle: "Premium ",
              header: () => <GradientHeader  DuaHeader={WhenWakeHeader}  props={props} />,
            headerStyle: {
              backgroundColor: "transparent",
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
            },
            headerShown: true,
            }
          }}
          component={WhenWakeUp}
        />
        <Stack.Screen
          name="Premium"
          options={(props) => {
            
            return {
              headerStyle: {
                backgroundColor:
                  "linear-gradient(to bottom, #4e54c8 0%, #a044ff 100%)",
              },
              headerTintColor: "#fff",
  
              // headerLeft: () => <Ionicons name="sun" size={25} color="#fff" />,
              headerTitle: "Premium",
              header: () => <GradientHeader  DuaHeader={PremiumHeader}  props={props} />,
            headerStyle: {
              backgroundColor: "transparent",
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
            },
            headerShown:false,
            }
          }}
          component={Premium}
        />
        <Stack.Screen
          name="Flags"
          options={(props) => {
           
            return {
              headerStyle: {
                backgroundColor:
                  "linear-gradient(to bottom, #4e54c8 0%, #a044ff 100%)",
              },
              headerTintColor: "#fff",
  
              // headerLeft: () => <Ionicons name="sun" size={25} color="#fff" />,
              headerTitle: "Flags",
              header: () => <GradientHeader  DuaHeader={FlagHeader}  props={props} />,
            headerStyle: {
              backgroundColor: "transparent",
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
            },
            headerShown:true,
            }
          }}
          component={Flags}
        />

        {/* BottomTabNavigator */}
        <Stack.Screen
          name="Bottom"
          component={BottomTabNavigator}
          options={{
            headerShown: false,
            // headerLeft: (props) => <GradientHeader />,
          }}
        />
        <Stack.Screen
          name="Pop"
          component={Pop}
          options={{
            headerStyle: {
              backgroundColor:
                "linear-gradient(180deg, #4E54C8 0%, #A044FF 100%)",
            },

            headerLeft: () => (
              <TouchableOpacity onPress={handleBrightness}>
                <Ionicons name="sun" size={25} color="#fff" />
              </TouchableOpacity>
            ),
            headerTitle: " ",
            headerRight: () => (
              <>
                <Image
                  style={{
                    backgroundColor: "white",
                    borderRadius: 50,
                    // marginBottom: 5,
                  }}
                  source={require("../../assets/usa.png")}
                />
                <Text style={{ color: "#fff", fontSize: 15 }}>{language}</Text>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <Ionicons name="chevron-down" size={25} color="#fff" />
                </TouchableOpacity>
                {/* <FontAwesome5 style={{ color: "#fff", fontSize: 20,  marginLeft: 7, }} name="calendar-alt" size={20} color="#fff" /> */}
              </>
            ),
          }}
        />
        <Stack.Screen
          name="Suggestions"
          component={Suggestions}
          options={(props) => {
           
            return {
              headerStyle: {
                backgroundColor:
                  "linear-gradient(to bottom, #4e54c8 0%, #a044ff 100%)",
              },
              headerTintColor: "#fff",
  
              // headerLeft: () => <Ionicons name="sun" size={25} color="#fff" />,
              headerTitle: "Flags",
              header: () => <GradientHeader  DuaHeader={SuggestionHeader}  props={props} />,
            headerStyle: {
              backgroundColor: "transparent",
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
            },
            headerShown: true,
            }
          }}
        />
      </Stack.Navigator>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <LanguagePicker
              // initialIndex={1}
              data={data}
              onSelect={(selectedItem: ILanguagePicker) => {
                setLanguage(selectedItem.title);
                setImage(selectedItem.Image);
                setModalVisible(!modalVisible)
              }}
            />
            {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable> */}
          </View>
        </View>
      </Modal>
    </>
  );
};

export default MainStack;

const styles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#4E54C8",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
