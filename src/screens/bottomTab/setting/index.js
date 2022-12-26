import React, { useState, useCallback } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Dimensions,
  Button,
  Image,
  TextInput,
  ScrollView,
  Modal,
  ImageBackground,
  SectionList,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
//import { Dropdown } from 'react-native-material-dropdown';
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
const { width, height } = Dimensions.get("window");
import styles from "./styles.js";
import Brightness from "./slider";
import Pop from "./popup.js";
// import ModalPoup from './popup';
// import DropDownSection from "../../../components/DropDown.js";
import DropDownPicker from "react-native-dropdown-picker";
import { useForm, Controller } from "react-hook-form";
import MyComponent from "./Switch/index";
const languages = [
  {
    name: "Khalifah Taniji",
    image: require("../../../../assets/taniji.png"),
  },
  {
    name: "Abdur-Rahman",
    image: require("../../../../assets/abdurrehman.png"),
  },
  {
    name: "Mishari Rashid",
    image: require("../../../../assets/mishari.png"),
  },
  {
    name: "Mishari Rashid",
    image: require("../../../../assets/mishari.png"),
  },
  {
    name: "Mishari Rashid",
    image: require("../../../../assets/mishari.png"),
  },
  {
    name: "Mishari Rashid",
    image: require("../../../../assets/mishari.png"),
  },
];

const DATA = [
  {
    title: "English",
    data: ["Poppins", "Roboto"],
  },
  {
    title: "Arabic",
    data: ["King Fahd", "Muhammadi Qurani"],
  },
  {
    title: "Urdu",
    data: ["Jameel Noori Nastaleeq"],
  },
];

const Settings = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = useState("");
  const [selectFont, setSelectFont] = useState(false);
  const [colorModel, setColorModel] = useState(false);
  const [genderOpen, setGenderOpen] = useState(false);
  const [genderValue, setGenderValue] = useState(null);
  const [gender, setGender] = useState([
    { label: "Poppins", value: "Poppins" },
    { label: "English", value: "English" },
    { label: "Arabic", value: "Arabic" },
  ]);

  const onGenderOpen = useCallback(() => {
    setCompanyOpen(false);
  }, []);

  const onCompanyOpen = useCallback(() => {
    setGenderOpen(false);
  }, []);
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    console.log(data, "data");
  };

  const Item = ({ title }) => (
    <View style={{ paddingHorizontal: 20, marginVertical: 5 }}>
      <Text
        onPress={() => setSelectFont(!selectFont)}
        style={{ fontSize: 10, lineHeight: 15, fontWeight: "400" }}
      >
        {title}
      </Text>
    </View>
  );

  return (
    <View style={[styles.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: wp("90%"),
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <View style={{ marginTop: hp("2%") }}>
            <Text style={styles.title}>Reciters</Text>
          </View>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          //numColumns={'2'}
          data={languages}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  padding: wp("2%"),
                  left: wp("10%"),
                }}
              >
                <View style={[styles.card]}>
                  <View style={[styles.flag]}>
                    <View
                      style={[
                        {
                          borderRadius: 50,
                          alignItems: "center",
                          justifyContent: "center",
                          width: 70,
                          height: 70,
                        },
                        { borderWidth: 2, borderColor: "#A044FF" },
                      ]}
                    >
                      <Image
                        source={item.image}
                        style={[{ width: 60, height: 60, borderRadius: 30 }]}
                      />
                    </View>
                  </View>
                  <View
                    style={{ justifyContent: "center", alignContent: "center" }}
                  >
                    <Text style={styles.textF}>{item.name}</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />

        {/* <Pop/> */}
        {/* <Text>hello</Text> */}
        <View
          style={{
            width: wp("90%"),
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          {/* ................................................................. */}
          <View style={{ paddingVertical: wp("5") }}>
            <Text style={styles.title}>Account</Text>
          </View>
          <TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <View style={{ paddingRight: wp("5%"), paddingLeft: wp("2%") }}>
                <AntDesign name="user" size={25} color="#A044FF" />
              </View>
              <Text style={styles.text}>Profile Settings </Text>
            </View>
          </TouchableOpacity>

          {/* ............................................................................ */}

          <View style={{ paddingVertical: wp("5") }}>
            <Text style={styles.title}>Language</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Flags")}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ paddingRight: wp("5%"), paddingLeft: wp("2%") }}>
                <Feather name="globe" size={20} color="#A044FF" />
              </View>

              <Text style={styles.text}>English UK </Text>

              
              {/* <Text style={{marginLeft:hp('15%')}}>Muhammad</Text> */}
            </View>
          </TouchableOpacity>

          {/* ......................................................................................... */}

          <View style={{ paddingVertical: wp("5") }}>
            <Text style={styles.title}>Premium</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Premium")}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ paddingRight: wp("5%"), paddingLeft: wp("2%") }}>
                <FontAwesome name="diamond" size={20} color="#A044FF" />
              </View>
              <Text style={styles.text}>Upgrade Premium </Text>
            </View>
          </TouchableOpacity>

          {/* ........................................................................................ */}

          <View style={{ paddingVertical: wp("5") }}>
            <Text style={styles.title}>Features</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                paddingRight: wp("5%"),
                paddingLeft: wp("2%"),
                paddingBottom: hp("2%"),
                marginTop: hp("1%"),
              }}
            >
              <FontAwesome5 name="paint-roller" size={20} color="#A044FF" />
            </View>
            <Text style={[styles.text, { marginTop: hp("1%") }]}>
              Color Scheme{" "}
            </Text>
            <Modal
              animationType="slide"
              transparent={true}
              visible={colorModel}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setColorModel(!colorModel);
              }}
            >
              <View style={styles.centeredView}>
                <View style={[styles.modalView, { padding: 20 }]}>
                  <Text
                    style={{
                      alignSelf: "flex-start",
                      marginTop: -15,
                      marginBottom: 15,
                    }}
                  >
                    Choose App Color
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => setColorModel(!colorModel)}
                    >
                      <View
                        style={{
                          width: wp("10%"),
                          backgroundColor: "#A044FF",
                          height: hp("5%"),
                          borderRadius: 5,
                        }}
                      ></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => setColorModel(!colorModel)}
                    >
                      <View
                        style={{
                          width: wp("10%"),
                          backgroundColor: "#5AC582",
                          height: hp("5%"),
                          borderRadius: 5,
                          marginLeft: wp("5%"),
                        }}
                      ></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => setColorModel(!colorModel)}
                    >
                      <View
                        style={{
                          width: wp("10%"),
                          backgroundColor: "#F5AF19",
                          height: hp("5%"),
                          borderRadius: 5,
                          marginLeft: wp("5%"),
                        }}
                      ></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => setColorModel(!colorModel)}
                    >
                      <View
                        style={{
                          width: wp("10%"),
                          backgroundColor: "#44C2F2",
                          height: hp("5%"),
                          borderRadius: 5,
                          marginLeft: wp("5%"),
                        }}
                      ></View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => setColorModel(!colorModel)}
                    >
                      <View
                        style={{
                          width: wp("10%"),
                          backgroundColor: "#89216B",
                          height: hp("5%"),
                          borderRadius: 5,
                          marginLeft: wp("5%"),
                        }}
                      ></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => setColorModel(!colorModel)}
                    >
                      <View
                        style={{
                          width: wp("10%"),
                          backgroundColor: "#00B4DB",
                          height: hp("5%"),
                          borderRadius: 5,
                          marginLeft: wp("5%"),
                        }}
                      ></View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignSelf: "flex-end",
                      marginTop: 15,
                    }}
                  >
                    <TouchableOpacity style={{ marginRight: 15 }}>
                      <Text style={{ color: "#AFAFB0" }}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginRight: 15 }}>
                      <Text style={{ color: "#AFAFB0" }}>Default</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={{ color: "#A044FF" }}>Apply</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
            <View style={styles.arrow}>
              <TouchableOpacity onPress={() => setColorModel(!colorModel)}>
                <View
                  style={{
                    width: wp("10%"),
                    backgroundColor: "#A044FF",
                    height: hp("5%"),
                    borderRadius: 5,
                    marginLeft: wp("5%"),
                  }}
                ></View>
              </TouchableOpacity>
            </View>
          </View>

          {/* .......................................................... */}

          <View
            style={{
              flexDirection: "row",
              // paddingTop: hp("1%"),
              justifyContent: "space-between",
              // backgroundColor:'green'
            }}
          >
            <View
              style={{
                paddingRight: wp("5%"),
                paddingLeft: wp("2%"),
                flexDirection: "row",
                // backgroundColor:'red',
              }}
            >
              <MaterialCommunityIcons
                name="format-size"
                size={15}
                color="#A044FF"
                style={{
                  marginTop: hp("1.7%"),
                  position: "absolute",
                  margin: hp("1%"),
                  marginRight: hp("2%"),
                }}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "400",
                  marginLeft: hp("6.5%"),
                  marginTop: hp("1.7%"),
                  position: "absolute",
                }}
              >
                Font Type{" "}
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              {/* <Text
                style={{
                  color: "#000",
                  fontSize: 12,
                  fontWeight: "400",
                  marginLeft: 2,
                  marginTop: 4,
                }}
              >
                Poppins
              </Text> */}
              {/* <TouchableOpacity
                style={{ marginTop: 5, marginLeft: 5 }}
                
              >
             
                <Ionicons name="chevron-down" size={15} color="#000" /> */}

              <Controller
                name="gender"
                defaultValue="Poppins"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <View style={styles.dropdownGender}>
                    <DropDownPicker
                      style={styles.dropdown}
                      open={genderOpen}
                      value={genderValue} //genderValue
                      items={gender}
                      setOpen={setGenderOpen}
                      setValue={setGenderValue}
                      setItems={setGender}
                      placeholder="Poppins"
                      placeholderStyle={styles.placeholderStyles}
                      onOpen={onGenderOpen}
                      onChangeValue={onChange}
                      zIndex={5}
                      // zIndexInverse={1000}
                    />
                  </View>
                )}
              />
              {/* </TouchableOpacity> */}

              {/* <Modal
              style={{position:'absolute'}}
                animationType="fade"
                transparent={true}
                visible={selectFont}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setSelectFont(!selectFont);
                }}
              >
                <View style={styles.centeredView}>
                  <View
                    style={[
                      styles.modalView,
                      {
                        // position: "relative",
                        // backgroundColor: "pink",
                        width: wp("45%"),
                        height: hp("30%"),
                        marginLeft: hp("45%"),
                        marginBottom: hp("23%"),
                      },
                    ]}
                  >
                    <View>
                      
                      <SectionList
                        sections={DATA}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({ item }) => <Item title={item} />}
                        renderSectionHeader={({ section: { title } }) => (
                          <Text
                       
                            style={{
                              fontSize: 10,
                              fontWeight: "400",
                              // backgroundColor: "yellow",
                              borderBottomColor: "#ACACAC",
                              borderBottomWidth: 1,
                              paddingBottom: 3,
                              color:'#A044FF'
                            }}
                          >
                            {title}
                          </Text>
                        )}
                      />
                    </View>
                
                  </View>
                </View>
              </Modal> */}
            </View>
          </View>

          {/* ................................................................................... */}

          <View
            style={{
              flexDirection: "row",
              // paddingTop: hp("1%"),
              // backgroundColor: "#fff",
              justifyContent: "space-between",
              // backgroundColor:'red',
              marginTop: hp("1%"),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                paddingRight: wp("5%"),
                paddingLeft: wp("2%"),
                // backgroundColor:'pink'
              }}
            >
              <Ionicons name="md-text" size={20} color="#A044FF" />
              <TouchableOpacity style={{ marginLeft: hp("3%") }}>
                <Text style={styles.text}>Font Size</Text>
              </TouchableOpacity>
            </View>

            <View style={{ alignSelf: "flex-end" }}>
              <View
                style={{
                  flexDirection: "row",
                  marginHorizontal: 10,
                }}
              >
                <TouchableOpacity>
                  <ImageBackground
                    style={{
                      width: wp("5.5%"),
                      height: hp("3%"),
                      borderRadius: "100% ",
                    }}
                    source={require("../../../../assets/plusImage.png")}
                  >
                    <Text style={{ textAlign: "center" }}>+</Text>
                  </ImageBackground>
                </TouchableOpacity>
                <Text style={{ paddingHorizontal: 15 }}>12</Text>
                <TouchableOpacity>
                  <ImageBackground
                    style={{ width: wp("5.5%"), height: hp("3%") }}
                    source={require("../../../../assets/plusImage.png")}
                  >
                    <Text style={{ textAlign: "center" }}>-</Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* .................................................................. */}

          <View
            style={{
              flexDirection: "row",
              paddingTop: hp("3%"),
              // backgroundColor: "green",
            }}
          >
            <View style={{ paddingRight: wp("5%"), paddingLeft: wp("2%") }}>
              <Feather name="sun" size={20} color="#A044FF" />
            </View>
            <Text style={styles.text}>Brightness</Text>
            <View
              style={{
                position: "absolute",
                padding: 5,
                paddingRight: 5,
                // backgroundColor: "red",
                marginTop: hp("3.5%"),
                //left:wp('10%'),
                right: wp("0.2%"),
              }}
            >
              <Brightness />
            </View>
          </View>

          {/* ...................................................................... */}

          <View style={{ paddingVertical: wp("3"), paddingTop: hp("3%") }}>
            <Text style={styles.title}>Time Style</Text>
          </View>
          <View style={{ flexDirection: "row", paddingTop: hp("2%") }}>
            <View style={{ paddingRight: wp("8%"), paddingLeft: wp("2%") }}>
              <Image
                source={require("../../../../assets/sec.png")}
                style={{ height: 20, width: 21, alignSelf: "center" }}
              />
            </View>
            <View style={styles.arrow}>
              {/* <FontAwesome name="toggle-off" size={20} color="#A044FF" /> */}
              <MyComponent />
            </View>
            <Text style={styles.text}>Show Seconds</Text>
          </View>

          {/* ............................................................................................. */}

          <View style={{ flexDirection: "row", paddingTop: hp("3%") }}>
            <View style={{ paddingRight: wp("8%"), paddingLeft: wp("2%") }}>
              <MaterialCommunityIcons
                name="hours-24"
                size={25}
                color="#A044FF"
              />
            </View>
            <View style={styles.arrow}>
              {/* <FontAwesome name="toggle-on" size={20} color="#A044FF" /> */}
              <MyComponent />
            </View>
            <Text style={styles.text}>24 Hours Format</Text>
          </View>

          {/* ............................................................................ */}

          <View style={{ paddingVertical: wp("5"), paddingTop: hp("3%") }}>
            <Text style={styles.title}>About</Text>
          </View>
          <View style={{ flexDirection: "row", paddingTop: hp("2%") }}>
            <View style={{ paddingRight: wp("5%"), paddingLeft: wp("2%") }}>
              <Feather name="share-2" size={20} color="#A044FF" />
            </View>
            <TouchableOpacity>
              <Text style={styles.text}>Share with friends </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", paddingTop: hp("3%") }}>
            <View style={{ paddingRight: wp("5%"), paddingLeft: wp("2%") }}>
              <AntDesign name="staro" size={20} color="#A044FF" />
            </View>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={styles.text}>Rate Us </Text>
            </TouchableOpacity>
            {/* ....................................................................................................... */}
            <View style={styles.centeredView}>
              {/* ///modal */}
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
                    <View>
                      <TouchableOpacity
                        style={{
                          marginLeft: 95,
                          marginTop: 10,
                          position: "absolute",
                          zIndex: 1,
                        }}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Image
                          source={require("../../../../assets/cross.png")}
                          style={{ height: 30, width: 30 }}
                        />
                      </TouchableOpacity>
                    </View>
                    <Image
                      style={{ width: wp("70%"), height: hp("25%") }}
                      source={require("../../../../assets/111.png")}
                    />

                    <View>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: "500",
                          textAlign: "center",
                          marginTop: 10,
                        }}
                      >
                        Enjoy our App
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: "500",
                          textAlign: "center",
                          color: "#AFAFB0",
                          marginTop: 10,
                        }}
                      >
                        Rate Your Experience With Us
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "center",
                          marginTop: 10,
                        }}
                      >
                        <Entypo
                          style={{ marginRight: 8 }}
                          name="star"
                          color="yellow"
                          size={15}
                        />
                        <Entypo
                          style={{ marginRight: 8 }}
                          name="star"
                          color="yellow"
                          size={15}
                        />
                        <Entypo
                          style={{ marginRight: 8 }}
                          name="star"
                          color="yellow"
                          size={15}
                        />
                        <Entypo
                          style={{ marginRight: 8 }}
                          name="star"
                          color="yellow"
                          size={15}
                        />
                        <Entypo
                          style={{ marginRight: 8 }}
                          name="star"
                          color="yellow"
                          size={15}
                        />
                      </View>
                    </View>
                    <TouchableOpacity
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => alert("Please Rate us")}
                    >
                      <Text style={styles.textStyle}>Rate us</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </View>
            {/* ............................................................................................................ */}

            {/* .............end modal */}
            <View style={[{ marginTop: 23 }, styles.arrow]}>
              <Image
                source={require("../../../../assets/arrow.png")}
                style={{
                  height: 7,
                  width: 7,
                  alignSelf: "center",
                  alignSelf: "flex-end",
                }}
              />
            </View>
          </View>

          {/* ................................................................................................................... */}

          <TouchableOpacity onPress={() => navigation.navigate("Suggestions")}>
            <View style={{ flexDirection: "row", paddingTop: hp("3%") }}>
              <View style={{ paddingRight: wp("5%"), paddingLeft: wp("2%") }}>
                <MaterialCommunityIcons
                  name="message-reply-text-outline"
                  size={20}
                  color="#A044FF"
                />
              </View>
              <View style={{ paddingRight: wp("5%") }}>
                <Text style={styles.text}>Suggest New Features </Text>
              </View>
              <View style={[{ marginTop: 23 }, styles.arrow]}>
                <Image
                  source={require("../../../../assets/arrow.png")}
                  style={{
                    height: 7,
                    width: 7,
                    alignSelf: "center",
                    alignSelf: "flex-end",
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
          {/* .......................................................................................................... */}

          <TouchableOpacity>
            <View style={{ flexDirection: "row", paddingTop: hp("3%") }}>
              <View style={{ paddingRight: wp("5%"), paddingLeft: wp("2%") }}>
                <MaterialCommunityIcons
                  name="shield-lock-outline"
                  size={20}
                  color="#A044FF"
                />
              </View>
              <Text style={styles.text}>Privacy Policy </Text>
              <View style={[{ marginTop: 23 }, styles.arrow]}>
                <Image
                  source={require("../../../../assets/arrow.png")}
                  style={{
                    height: 7,
                    width: 7,
                    alignSelf: "center",
                    alignSelf: "flex-end",
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>

          {/* .......................................................................................................... */}

          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                paddingTop: hp("3%"),
                marginBottom: hp("2%"),
              }}
            >
              <View style={{ paddingRight: wp("5%"), paddingLeft: wp("2%") }}>
                <Octicons name="versions" size={20} color="#A044FF" />
              </View>
              <Text style={styles.text}>Version </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default Settings;
