import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";


// import { styles } from "../../../screens/bottomTab/prayerTime/styles";
// import Header from "../../../components/Header";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const data = [
  {
    title: "Fajar",
    time: "05:14",
  },
  {
    title: "Sunrise",
    time: "06:30",
  },
  {
    title: "Duhur",
    time: "12:30",
  },
  {
    title: "Asr",
    time: "15:18",
  },
  {
    title: "Magrib",
    time: "18:18",
  },
  {
    title: "Isha’a",
    time: "19:36",
  },
];

const Header = () => {
  return (
    <ImageBackground
      source={require("../../../../assets/prayerheader.png")}
      resizeMode="stretch"
      style={{ height: hp("21%") }}
    >
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          // backgroundColor:'red',
          marginHorizontal:wp('2%')
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: hp("1.8%"),
            padding: hp("1.3%"),
            // marginLeft: hp("3%"),
          }}
        >
          Time Zone :
        </Text>
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: hp("1.8%"),
            paddingVertical: hp("1.3%"),
          }}
        >
          Multan Islamic University Karachi Pakistan
        </Text>
      </View>
      <View style={{ flexDirection: "row", textAlign: "center" }}>
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: hp("1.8%"),
            padding: hp("1.3%"),
            marginLeft: hp("16%"),
          }}
        >
          Sunrise Remaining Time
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignContent: "center" }}>
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: hp("1.8%"),
            padding: hp("1.3%"),
            marginLeft: hp("22%"),
          }}
        >
          -00:11:31
        </Text>
      </View>
    </ImageBackground>
  );
};

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
    };
  },
});

const PrayerTiming = () => {
  const [isActive, setIsActive] = useState("Fajar");
  const [bellIcon, setBellIcon] = useState(false);
  const [fajarBell, setFajarBell] = useState(false);
  const [sunBell, setSunBell] = useState(false);
  const [duhurBell, setDuhurBell] = useState(false);
  const [asrBell, setAsrBell] = useState(false);
  const [maghribBell, setMaghribBell] = useState(false);
  const [ishaBell, setIshaBell] = useState(false);
  const [activeBell, setActiveBell] = useState("");

  const ActiveTime = () => {
    setIsActive("fajar");
  };

  const triggerNotifications = async () => {
    // setActiveBell(title)
    setBellIcon(!bellIcon);
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You’ve got mail! 📬",
        body: "Here is the notification body",
        data: { data: "goes here" },
      },
      trigger: { seconds: 2 },
    });
  };

  // const handleClick = () => {
  //   // 👇️ toggle
  //   setIsActive(current => !current);

  //   // 👇️ or set to true
  //   // setIsActive(true);
  // };

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      {/* <Image source={require('../../../assets/L1.png')}/> */}
      <Header />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: wp("1%"),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginVertical: hp("2%"),
            marginHorizontal: wp("2%"),
          }}
        >
          <TouchableOpacity>
            <SimpleLineIcons
              style={{ marginTop: hp("2.9%") }}
              name="arrow-left"
              size={12}
            />
          </TouchableOpacity>
          <View style={{ marginLeft: hp("1.5%"), marginTop: hp("1%") }}>
            <Text
              style={{ fontSize: hp("2%"), fontWeight: "bold", marginLeft: 8 }}
            >
              Friday
            </Text>
            <Text style={{ fontSize: hp("2%") }}>04 March 2022</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginVertical: hp("2%"),
            marginHorizontal: hp("1%"),
          }}
        >
          <View style={{ marginRight: hp("1%"), marginTop: hp("1%") }}>
            <Text style={{ fontSize: hp("2%"), fontWeight: "bold" }}>
              Islamic Date
            </Text>
            <Text style={{ fontSize: hp("1.5%") }}>
              01 Shaban 1443 AD (-1) Day
            </Text>
          </View>
          <TouchableOpacity>
            <SimpleLineIcons
              style={{ marginTop: hp("2.9%") }}
              name="arrow-right"
              size={12}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <FlatList
          // style={{ margin: hp("2%") }}
          data={data}
          // numColumns={3}
          renderItem={({ item, index, separators }) => (
          
            <>
            {isActive==item.title?(
              <TouchableOpacity
              key={index}
              onPress={() => setIsActive(item.title)}
            >
              <LinearGradient
      // Button Linear Gradient
      colors={["#4E54C8", "#A044FF"]}
    >
              
              <View
                style={{
                  width: wp("93%"),
                  height: hp("7%"),
                  borderColor: "#C4C4C4",
                  borderBottomWidth: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginLeft:14,
                }}
              >
                <Text
                  style={
                    isActive == item.title ? styles.title : styles.inactivetitle
                  }
                >
                  {item.title}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    marginHorizontal: hp("1.5%"),
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={
                      isActive == item.title ? styles.time : styles.inactivetime
                    }
                  >
                    {item.time}
                  </Text>
                  <TouchableOpacity>
                  <TouchableOpacity>
                    { bellIcon == true && activeBell == item.title
                          ?(
                            <Ionicons
                            onPress={() => {
                              triggerNotifications();
                              setActiveBell(item.title);
                            }}
                            title="Trigger Local Notifications"
                            color="#000"
                            accessibilityLabel="Trigger Local Notifications"
                            name={
                              "md-notifications-off-circle-outline"
                            }
                            size={20}
                            style={
                              isActive == item.title
                                ? styles.bell
                                : styles.inactivebell
                            }
                          />
                          
                          ):(
                            <MaterialCommunityIcons
                            onPress={() => {
                              triggerNotifications();
                              setActiveBell(item.title);
                            }}
                            title="Trigger Local Notifications"
                            color="#000"
                            accessibilityLabel="Trigger Local Notifications"
                            name={
                              "bell-ring"
                            }
                            size={15}
                            style={
                              isActive == item.title
                                ? styles.bell
                                : styles.inactivebell
                            }
                          />
                          
                          )}
                   
                  </TouchableOpacity>
                  </TouchableOpacity>
                </View>
              </View>
              </LinearGradient>
            </TouchableOpacity>
            ):(<TouchableOpacity
              key={index}
              onPress={() => setIsActive(item.title)}
              style={isActive != item.title && styles.inactivebtn  }
            >
              
              
              <View
                style={{
                  width: wp("93%"),
                  height: hp("7%"),
                  borderColor: "#C4C4C4",
                  borderBottomWidth: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginLeft:14,
                }}
              >
                <Text
                  style={
                    isActive == item.title ? styles.title : styles.inactivetitle
                  }
                >
                  {item.title}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    marginHorizontal: hp("1.5%"),
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={
                      isActive == item.title ? styles.time : styles.inactivetime
                    }
                  >
                    {item.time}
                  </Text>
                  <TouchableOpacity>
                    { bellIcon == true && activeBell == item.title
                          ?(
                            <Ionicons
                            onPress={() => {
                              triggerNotifications();
                              setActiveBell(item.title);
                            }}
                            title="Trigger Local Notifications"
                            color="#000"
                            accessibilityLabel="Trigger Local Notifications"
                            name={
                              "md-notifications-off-circle-outline"
                            }
                            size={20}
                            style={
                              isActive == item.title
                                ? styles.bell
                                : styles.inactivebell
                            }
                          />
                          
                          ):(
                            <MaterialCommunityIcons
                            onPress={() => {
                              triggerNotifications();
                              setActiveBell(item.title);
                            }}
                            title="Trigger Local Notifications"
                            color="#000"
                            accessibilityLabel="Trigger Local Notifications"
                            name={
                              "bell-ring"
                            }
                            size={15}
                            style={
                              isActive == item.title
                                ? styles.bell
                                : styles.inactivebell
                            }
                          />
                          
                          )}
                   
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            )}
            </>
            
          )}
        />
      </View>
    </View>
  );
};

export default PrayerTiming;

const styles = StyleSheet.create({
  time: { marginHorizontal: wp("5%"), color: "white", fontSize: 12 },
  inactivetime: { marginHorizontal: wp("5%"), color: "black", fontSize: 12 },
  title: {
    fontWeight: "500",
    fontSize: 13,
    alignSelf: "center",
    marginHorizontal: wp("2.8%"),
    color: "white",
  },
  inactivetitle: {
    fontWeight: "500",
    fontSize: 13,
    alignSelf: "center",
    marginHorizontal: hp("1.5%"),
    color: "black",
  },
  btn: { backgroundColor: "#A044FF", borderRadius: hp("0.2%") },
  inactivebtn: { backgroundColor: "white", borderRadius: hp("2%") },
  bell: { color: "white" },
  inactbell: { color: "black" },

  inactiveButton: {
    color: "#C4C4C4",
    fontWeight: "bold",
    paddingBottom: hp("2%"),
    fontSize: hp("2.3%"),
  },
  activeButton: {
    color: "#A044FF",
    // backgroundColor:'#fff',
    // fontSize:1
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "#A044FF",
    paddingBottom: hp("2%"),
    fontSize: hp("2.3%"),
  },
});
