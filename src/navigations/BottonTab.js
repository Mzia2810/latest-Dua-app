import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  Pressable,
  StyleSheet,
  TouchableHighlight,
  Modal,
} from "react-native";
import HomeScreen from "../screens/bottomTab/HomeScreen";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import PrayerTiming from "../screens/bottomTab/prayerTime";
import Setting from "../screens/bottomTab/setting/index";
import Profile from "../screens/bottomTab/profile/index";
import Favourite from "../screens/bottomTab/favourite/index";
import GradientHeader from "../components/GradientHeader";
import * as Brightness from "expo-brightness";
import Ionicons from "@expo/vector-icons/Feather";
// import EvilIcons from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

import {
  MaterialCommunityIcons,
  AntDesign,
  EvilIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import LanguagePicker, { ILanguagePicker } from "react-native-language-select";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import FontAwesome  from "@expo/vector-icons";

// components

const data: ILanguagePicker[] = [
  {
    title: "English",
    imageSource: require("../../assets/america.png"),
   
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

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({ navigation }) => {
  const [languageIndex,setLanguageIndex]=useState(0)
  const [isDua, setIsDua] = useState(true);
  const [isPrayer, setIsPrayer] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const [isSetting, setIsSetting] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [isActiveDate, setIsActiveDate] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [language, setLanguage] = useState("English");
  const [image, setImage] = useState("../../assets/america.png");
  const [secChecked, setSecChecked] = useState(true);
  const [checkValue, setCheckValue] = useState(false);

  const handleBrightness = async () => {
    const { status } = await Brightness.requestPermissionsAsync();
    if (status === "granted") {
      Brightness.setSystemBrightnessAsync(1);
    }
  };

  const DuaHeader = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: hp("2%"),
          marginTop: hp("5%"),
          width: wp("90%"),
          // paddingHorizontal
          justifyContent:'space-between'
        }}
      >
        <TouchableOpacity onPress={handleBrightness}>
          <Ionicons name="sun" size={25} color="#fff" />
        </TouchableOpacity>

        <View
          style={{
            // backgroundColor: "green",
            // marginLeft: hp("32%"),
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
          <Text style={{ color: "#fff", fontSize: 15, marginLeft: 2 }}>
            {language}
          </Text>
          <TouchableOpacity
            style={{ marginTop: 3, marginLeft: 5 }}
            onPress={() => setModalVisible(true)}
          >
            <Ionicons name="chevron-down" size={20} color="#fff" />
          </TouchableOpacity>

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
                {
                  height: hp("100%"),
                  marginTop: -hp("1%"),
                },
              ]}
            >
              <View style={styles.modalView}>
                <LanguagePicker
                  // initialIndex={languageIndex}
                  data={data}
                  onSelect={(selectedItem: ILanguagePicker) => {
                    setLanguage(selectedItem.title);
                    setImage(selectedItem.Image);
                    setModalVisible(!modalVisible)
                    // setLanguageIndex(selectedItem.index)
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
        </View>
      </View>
    );
  };

  const PrayerTime = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: hp("2%"),
          marginTop: hp("5%"),
          width: wp("90%"),
          justifyContent:'flex-end'
        }}

      >
        <View
          style={{
            // backgroundColor: "green",
            // marginLeft: hp("32%"),
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
          <Text
            style={{
              color: "#fff",
              fontSize: 15,
              fontWeight: "400",
              marginLeft: 2,
            }}
          >
            {language}
          </Text>
          <TouchableOpacity
            style={{ marginTop: 3, marginLeft: 3 }}
            onPress={() => setModalVisible(true)}
          >
            <Ionicons name="chevron-down" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 10, marginTop: 2 }}>
            <SimpleLineIcons name="calendar" size={17} color="#fff" />
          </TouchableOpacity>

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
                {
                  baackgroundColor: "red",
                  height: hp("100%"),
                  marginTop: -hp("1%"),
                },
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
                {/* <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Cancel</Text>
                </Pressable> */}
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  };

  const Favorite = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: hp("2%"),
          marginTop: hp("5%"),
          width: wp("90%"),
          justifyContent:'space-between'
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "500", color: "#fff" }}>
          Favorite
        </Text>

        <View
          style={{
            // backgroundColor: "green",
            // marginLeft: hp("29%"),
            flexDirection: "row",
            marginTop: 1,
          }}
        >
          <TouchableOpacity
            style={{ marginTop: 3, marginRight: 13 }}
            onPress={() => setCheckValue(true)}
          >
            <View style={{padding:1.5,borderWidth:1,borderColor:'#fff', borderStyle:'dotted'}}>
            <Checkbox
              style={{ borderColor: "#fff" , width: 15, height: 15,}}
              value={checkValue}
              onValueChange={setCheckValue}
              color={checkValue ? "#fff" : undefined}
            />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop:3 }}>
            <AntDesign name="sharealt" color="#fff" size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft:10,marginTop:3}}>
            <MaterialCommunityIcons
              name="cards-heart-outline"
              size={20}
              color="#fff"
            />
          </TouchableOpacity>
        

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
                {
                  baackgroundColor: "red",
                  height: hp("100%"),
                  marginTop: -hp("1%"),
                },
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
          </Modal>
        </View>
      </View>
    );
  };

  const SettingHead = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: hp("2%"),
          marginTop: hp("5%"),
          width: wp("90%"),
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "500", color: "#fff" }}>
          Settings
        </Text>

        <View
          style={{
            // backgroundColor: "green",
            marginLeft: hp("30%"),
            flexDirection: "row",
            marginTop: 3,
          }}
        >
          {/*          
         <TouchableOpacity>
         <MaterialCommunityIcons
                         name="cards-heart-outline"
                         size={25}
                         color='#fff'
                       />
         </TouchableOpacity>
         <TouchableOpacity style={{marginLeft:10}}>
         <AntDesign name="sharealt" color='#fff' size={25} />
         </TouchableOpacity> */}

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
                {
                  baackgroundColor: "red",
                  height: hp("100%"),
                  marginTop: -hp("1%"),
                },
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
                {/* <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Cancel</Text>
                </Pressable> */}
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  };

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

  const handleDua = () => {
    setIsDua(true);
    setIsPrayer(false);
    setIsFavorite(false);
    setIsSetting(false);
    setIsProfile(false);
    navigation.navigate("Home");
  };
  const handlePrayer = () => {
    setIsDua(false);
    setIsPrayer(true);
    setIsFavorite(false);
    setIsSetting(false);
    setIsProfile(false);
    navigation.navigate("Prayer Timing");
  };
  const handleFavorite = () => {
    setIsDua(false);
    setIsPrayer(false);
    setIsFavorite(true);
    setIsSetting(false);
    setIsProfile(false);
    navigation.navigate("Favourite");
  };
  const handleSetting = () => {
    setIsDua(false);
    setIsPrayer(false);
    setIsFavorite(false);
    setIsSetting(true);
    setIsProfile(false);
    navigation.navigate("Setting");
  };
  const handleProfile = () => {
    setIsDua(false);
    setIsPrayer(false);
    setIsFavorite(false);
    setIsSetting(false);
    setIsProfile(true);
    navigation.navigate("Profile");
  };
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#A044FF"
      inactiveColor="#CBD5E1"
      screenOptions={{
        tabBarActiveTintColor: "#A044FF",
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarStyle: {
            height: 60,
          },

          header: () => <GradientHeader DuaHeader={DuaHeader} />,
          headerStyle: {
            backgroundColor: "transparent",
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
          },
          headerShown: true,
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Pressable onPress={handleDua}>
              {/* <Image style={{color:color,tintColor:'#A044FF'}} source={require('../../assets/bottomTab/inactiveDua.png')} /> */}

              {isDua == true ? (
                <>
                  <Image
                    style={{ color: color, marginLeft: 7 }}
                    source={require("../../assets/bottomTab/activeDua.png")}
                  />
                  <Text
                    style={{
                      color: "#A044FF",
                      textAlign: "center",
                      fontSize: 13,
                      marginTop: 5,
                      marginLeft: 5,
                    }}
                  >
                    Dua
                  </Text>
                </>
              ) : (
                <>
                  <Image
                    style={{ color: color, marginLeft: 7 }}
                    source={require("../../assets/bottomTab/inactiveDua.png")}
                  />
                  <Text
                    style={{
                      color: "gray",
                      textAlign: "center",
                      fontSize: 13,
                      marginTop: 5,
                      marginLeft: 5,
                    }}
                  >
                    Dua
                  </Text>
                </>
              )}
            </Pressable>
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Prayer Timing"
        options={{
          tabBarStyle: {
            height: 60,
          },

          header: () => <GradientHeader DuaHeader={PrayerTime} />,
          headerStyle: {
            backgroundColor: "transparent",
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
          },
          headerShown: true,
          tabBarLabel: "Prayer Timing",
          tabBarIcon: ({ color }) => (
            <Pressable onPress={handlePrayer}>
              {isPrayer == true ? (
                <>
                  <Image
                    style={{ color: color, marginLeft: 7 }}
                    source={require("../../assets/bottomTab/activePrayer.png")}
                  />
                  <Text
                    style={{
                      color: "#A044FF",
                      textAlign: "center",
                      fontSize: 12,
                      marginTop: 5,
                    }}
                  >
                    Prayer Timing
                  </Text>
                </>
              ) : (
                <>
                  <Image
                    style={{ color: color, marginLeft: 7 }}
                    source={require("../../assets/bottomTab/prayer.png")}
                  />
                  <Text
                    style={{
                      color: "gray",
                      textAlign: "center",
                      fontSize: 12,
                      marginTop: 5,
                    }}
                  >
                    Prayer Timing
                  </Text>
                </>
              )}
            </Pressable>
          ),
        }}
        component={PrayerTiming}
      />
      <Tab.Screen
        name="Favourite"
        options={{
          tabBarStyle: {
            height: 60,
          },

          header: () => <GradientHeader DuaHeader={Favorite} />,
          headerStyle: {
            backgroundColor: "transparent",
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
          },
          headerShown: true,
          tabBarLabel: "Favorite",
          tabBarIcon: ({ color }) => (
            <Pressable onPress={handleFavorite}>
              {isFavorite == true ? (
                <>
                  <Image
                    style={{
                      color: color,
                      marginLeft: 10,
                      width: 22,
                      height: 20,
                    }}
                    source={require("../../assets/bottomTab/activeHeart.png")}
                  />
                  <Text
                    style={{
                      color: "#A044FF",
                      textAlign: "center",
                      fontSize: 13,
                      marginTop: 6,
                    }}
                  >
                    Favorite
                  </Text>
                </>
              ) : (
                <>
                  <Image
                    style={{
                      color: color,
                      marginLeft: 10,
                      width: 21,
                      height: 20,
                    }}
                    source={require("../../assets/bottomTab/favourite.png")}
                  />
                  <Text
                    style={{
                      color: "gray",
                      textAlign: "center",
                      fontSize: 13,
                      marginTop: 6,
                    }}
                  >
                    Favorite
                  </Text>
                </>
              )}
            </Pressable>
          ),
        }}
        component={Favourite}
      />
      <Tab.Screen
        name="Setting"
        options={{
          tabBarStyle: {
            height: 60,
          },
          // headerStyle: {
          //   height: 200, // Specify the height of your custom header
          // },

          header: () => <GradientHeader DuaHeader={SettingHead} />,
          headerStyle: {
            backgroundColor: "transparent",
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
          },
          headerShown: true,
          tabBarLabel: "Setting",
          tabBarIcon: ({ color }) => (
            <Pressable onPress={handleSetting}>
              {isSetting == true ? (
                <>
                  <Image
                    style={{
                      color: color,
                      marginLeft: 9,
                      width: 20,
                      height: 20,
                    }}
                    source={require("../../assets/bottomTab/activeSetting.png")}
                  />
                  <Text
                    style={{
                      color: "#A044FF",
                      textAlign: "center",
                      fontSize: 13,
                      marginTop: 5,
                    }}
                  >
                    Setting
                  </Text>
                </>
              ) : (
                <>
                  <Image
                    style={{
                      color: color,
                      marginLeft: 9,
                      width: 20,
                      height: 20,
                    }}
                    source={require("../../assets/bottomTab/setting.png")}
                  />
                  <Text
                    style={{
                      color: "gray",
                      textAlign: "center",
                      fontSize: 13,
                      marginTop: 5,
                    }}
                  >
                    Setting
                  </Text>
                </>
              )}
            </Pressable>
          ),
        }}
        component={Setting}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarStyle: {
            height: 60,
          },

          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <View
              style={{
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Pressable onPress={handleProfile}>
                {isProfile == true ? (
                  <>
                    <Image
                      style={{ color: color, marginLeft: 7 }}
                      source={require("../../assets/bottomTab/activeProfile.png")}
                    />
                    <Text
                      style={{
                        color: "#A044FF",
                        textAlign: "center",
                        fontSize: 13,
                        marginTop: 5,
                      }}
                    >
                      Profile
                    </Text>
                  </>
                ) : (
                  <>
                    <Image
                      style={{ color: color, marginLeft: 7 }}
                      source={require("../../assets/bottomTab/profile.png")}
                    />
                    <Text
                      style={{
                        color: "gray",
                        textAlign: "center",
                        fontSize: 13,
                        marginTop: 5,
                      }}
                    >
                      Profile
                    </Text>
                  </>
                )}
              </Pressable>
            </View>
          ),
        }}
        component={Profile}
      />
      {/* <Tab.Screen
        name="Assignments"
        component={isCalendar ? CalendarScreen : List}
        options={props => {
          const {navigation, route} = props;
          return {
            headerShown: true,
            headerTitle: '',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="assignment" color={color} size={30} />
            ),
            headerLeft: () => (
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                All Assignments
              </Text>
            ),
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{marginRight: 10, padding: 7, borderRadius: 10}}
                  onPress={() => setIsCalendar(true)}>
                  <AntDesign name="calendar" size={30} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginRight: 10, padding: 7, borderRadius: 10}}
                  onPress={() => setIsCalendar(false)}>
                  <FontAwesome name="list" size={30} />
                </TouchableOpacity>
              </View>
            ),
          };
        }}
      />
      <Tab.Screen
        name="Messages"
        options={{
          headerShown: true,
          tabBarStyle: {
            height: 50,
          },
          tabBarIcon: ({color}) => (
            <MaterialIcons name="message" color={color} size={30} />
          ),
          // headerLeft: () => <Text style={{fontSize:20,color:'black',fontWeight:'bold',marginLeft:10}}>All Assignments</Text>,
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{marginRight: 10, padding: 7, borderRadius: 10}}
                onPress={() => setIsCalendar(true)}>
                <AntDesign name="search1" size={30} />
              </TouchableOpacity>
            </View>
          ),
        }}
        component={Message}
      />
      <Tab.Screen
        name="Profile"
        options={{
          headerShown:false,
          tabBarStyle: {
            height: 50,
          },

          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <FontAwesome name="user" color={color} size={30} />
          ),
        }}
        component={Profile}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  activeText: {
    color: "#A044FF",
    textAlign: "center",
    fontSize: 12,
    marginTop: 5,
  },
  inActiveText: {
    color: "gray",
    textAlign: "center",
    fontSize: 12,
    marginTop: 5,
  },
});
