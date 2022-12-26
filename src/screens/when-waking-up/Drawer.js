import React, { useState } from "react";
import Constants from "expo-constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Dimensions,
  SafeArray,
  FlatList,
  TouchableOpacity,
} from "react-native";
const { width, height } = Dimensions.get("window");
// You can import from local files
// import AssetExample from "./components/AssetExample";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
// or any pure javascript modules available in npm
import { Card } from "react-native-paper";
import { EvilIcons } from "@expo/vector-icons";

export default function DrawerComponent({show,setShow}) {
//   const [show, setShow] = useState(false);
  const [playIcon, setPlay] = useState(false);
  const [playingitem,setPlayingItem]=useState(-1)
  const [press, setPress] = useState(false);
  //  const onPress = () => setPlay(true);
  const DATA = [
    {
      id: 0,
      title: "First",
    },
    {
      id: 1,
      title: "two",
    },
    {
      id: 2,
      title: "three",
    },
   
  ];
  const renderItem = ({ item}) => (
    <Pressable
      style={[styles.button, styles.buttonClose]}
      onPress={() => setShow(!show)}
    >
      <View style={{ flexDirection: "row" }}>
        { playingitem != item.id ? (
<TouchableOpacity onPress={() => setPlayingItem(item.id)}>
<Ionicons
  name="play"
  size={20}
  color="black"
  style={{ marginRight: 40 }}
/>
</TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => {
            setPlayingItem(-1)
            setPlay(!playIcon)}}>
            <Ionicons
              name="pause"
              size={20}
              color="black"
              style={{ marginRight: 40 }}
            />
          </TouchableOpacity>
        )}

        <Text style={styles.textStyle}>{item.title}</Text>
      <EvilIcons name="chevron-right" size={20} style={{marginTop:3,marginLeft:60}} />
      </View>
    </Pressable>
  );

  return (
    
    <Pressable
      style={styles.centeredView}
      onPress={() => {
             setShow(!show);
            alert("im presses")
      }
    }
    >
      <View 
      >
        <Modal
        style={{height:hp('100%'),backgroundColor:'red'}}
          animationType="fade"
          transparent={true}
          visible={show}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setShow(!show);
          }}
        >
          <TouchableOpacity onPress={()=>setShow(!show)}>

          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
          </TouchableOpacity>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setShow(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    position:'absolute',
    width:wp('100%'),
    height:hp('100%'),
    zIndex:5,

    backgroundColor: "transparent",
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor:'red',
    marginTop: 24,
  },
  modalView: {
    //  margin: 20,
   
    backgroundColor: "white",
    // borderRadius: 20,
    // padding: 35,
    width: 210,
    // height:'100%',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: height,
  },
  button: {
    //  borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: width / 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {},
  textStyle: {
    color: "black",
    right: 20,
    // fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    // marginBottom: 15,
    // textAlign: "center"
  },
});
