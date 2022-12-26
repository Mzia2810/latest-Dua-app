import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Button,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { AntDesign, EvilIcons, Octicons, SimpleLineIcons } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");
// import styles from "./styles.js";

// const FirstRoute = () => (
//   <View style={{ height: height }}>
//     <View style={styles.card}>
//       <Text style={styles.text}>Listen 5 Dua</Text>
//       <View style={{ flexDirection: "row" }}>
//         <Text style={styles.caption}>Everyday listen 10 Duas</Text>
//       </View>
//     </View>
//   </View>
// );

// const SecondRoute = () => (
//   <View style={{ height: height }}>
//     <View style={styles.card}>
//       <Text style={styles.text2}>One Certificate</Text>
//       <Text style={styles.caption}>100</Text>
//     </View>
//   </View>
// );

// const ThirdRoute = () => (
//   <View style={{ height: height, width: width, alignContent: "center" }}>
//     <View style={{}}>
//       <View style={styles.view}>
//         <View style={{ flexDirection: "row" }}>
//           <View style={{ padding: wp("2%") }}>
//             <AntDesign name="user" size={20} color="grey" />
//           </View>
//           <Text style={styles.text3}>Nick Name</Text>
//         </View>

//         <View style={{ flexDirection: "row" }}>
//           <TextInput style={styles.input} />
//         </View>
//         <View style={{ flexDirection: "row" }}>
//           <View style={{ padding: wp("2%") }}>
//             <Fontisto name="email" size={20} color="grey" />
//           </View>
//           <Text style={styles.text3}>Email</Text>
//         </View>

//         <View style={{ flexDirection: "row" }}>
//           <TextInput style={styles.input} />
//         </View>
//         <View style={{ flexDirection: "row" }}>
//           <View style={{ padding: wp("2%") }}>
//             <AntDesign name="lock" size={20} color="grey" />
//           </View>
//           <Text style={styles.text3}>Password</Text>
//         </View>

//         <View style={{ flexDirection: "row" }}>
//           <TextInput style={styles.input} />
//         </View>
//         <View style={{ alignSelf: "center", paddingTop: hp("5%") }}>
//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.buttontxt}>Update</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   </View>
// );

// const initialLayout = { width: Dimensions.get("window").width };

// const renderScene = SceneMap({
//   task: FirstRoute,
//   reward: SecondRoute,
//   account: ThirdRoute,
// });

const TabViewExample = () => {
  // const [index, setIndex] = React.useState(0);
  // const [routes] = React.useState([
  //   { key: "task", title: "task" },
  //   { key: "reward", title: "reward" },
  //   { key: "account", title: "account" },
  // ]);

  const [isDua, setIsDua] = useState(true);
  const [isRewards, setIsRewards] = useState(false);
  const [isBenefits, setIsBenefits] = useState(false);
  const [isActive, setIsActive] = useState("Task");
  const [isActiveDate, setIsActiveDate] = useState("Thu");

  const ActiveTime = () => {
    setIsActive("Task");
  };

  // const [countries, setmyCountries] = useState([{}]);
  // const [modalVisible, setModalVisible] = useState(false);
  // const [isloading, setIsloading] = useState(true);
  // const [search, setSearch] = useState();
  // const [copyList, setCopyList] = useState();
  // const [color, setColor] = useState({ color: "black" });

  const handleDua = () => {
    setIsDua(true);
    setIsBenefits(false);
    setIsRewards(false);
  };
  const handleRewards = () => {
    setIsRewards(true);
    setIsDua(false);
    setIsBenefits(false);
  };
  const handleBenefits = () => {
    setIsDua(false);
    setIsBenefits(true);
    setIsRewards(false);
  };

  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: hp("1.7%"),
          marginBottom: hp("1.7%"),
        }}
      >
        <View>
          <TouchableOpacity onPress={handleDua}>
            <Text style={isDua ? styles.activeButton : styles.inactiveButton}>
              Tasks
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={handleRewards}>
            <Text
              style={isRewards ? styles.activeButton : styles.inactiveButton}
            >
              Rewards
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={handleBenefits}>
            <Text
              style={isBenefits ? styles.activeButton : styles.inactiveButton}
            >
              Account Settings
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {isDua == true && (
        <>
          <View style={{ marginHorizontal: hp("2%"), marginVertical: "2%" }}>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: hp("1%"),
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => setIsActiveDate("Thu")}
                style={[
                  styles.dateBtn,
                  isActiveDate == "Thu"
                    ? styles.activeDate
                    : styles.inActiveDate,
                ]}
              >
                <Text
                  style={[
                    styles.dateText,
                    isActiveDate == "Thu"
                      ? styles.activeDateText
                      : styles.inActiveDateText,
                  ]}
                >
                  Thu
                </Text>
                <Text
                  style={[
                    isActiveDate == "Thu"
                      ? styles.activeDateText
                      : styles.inActiveDateText,
                  ]}
                >
                  26{" "}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsActiveDate("Fri")}
                style={[
                  styles.dateBtn,
                  isActiveDate == "Fri"
                    ? styles.activeDate
                    : styles.inActiveDate,
                ]}
              >
                <Text
                  style={[
                    styles.dateText,
                    isActiveDate == "Fri"
                      ? styles.activeDateText
                      : styles.inActiveDateText,
                  ]}
                >
                  Fri
                </Text>
                <Text
                  style={[
                    isActiveDate == "Fri"
                      ? styles.activeDateText
                      : styles.inActiveDateText,
                  ]}
                >
                  27{" "}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsActiveDate("Sat")}
                style={[
                  styles.dateBtn,
                  isActiveDate == "Sat"
                    ? styles.activeDate
                    : styles.inActiveDate,
                ]}
              >
                <Text
                  style={[
                    styles.dateText,
                    isActiveDate == "Sat"
                      ? styles.activeDateText
                      : styles.inActiveDateText,
                  ]}
                >
                  Sat
                </Text>
                <Text
                  style={[
                    isActiveDate == "Sat"
                      ? styles.activeDateText
                      : styles.inActiveDateText,
                  ]}
                >
                  28{" "}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsActiveDate("Sun")}
                style={[
                  styles.dateBtn,
                  isActiveDate == "Sun"
                    ? styles.activeDate
                    : styles.inActiveDate,
                ]}
              >
                <Text
                  style={[
                    styles.dateText,
                    isActiveDate == "Sun"
                      ? styles.activeDateText
                      : styles.inActiveDateText,
                  ]}
                >
                  Sun
                </Text>
                <Text
                  style={[
                    isActiveDate == "Sun"
                      ? styles.activeDateText
                      : styles.inActiveDateText,
                  ]}
                >
                  29{" "}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsActiveDate("Mon")}
                style={[
                  styles.dateBtn,
                  isActiveDate == "Mon"
                    ? styles.activeDate
                    : styles.inActiveDate,
                ]}
              >
                <Text
                  style={[
                    styles.dateText,
                    isActiveDate == "Mon"
                      ? styles.activeDateText
                      : styles.inActiveDateText,
                  ]}
                >
                  Mon
                </Text>
                <Text
                  style={[
                    isActiveDate == "Mon"
                      ? styles.activeDateText
                      : styles.inActiveDateText,
                  ]}
                >
                  30{" "}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsActiveDate("Tue")}
                style={[
                  styles.dateBtn,
                  isActiveDate == "Tue"
                    ? styles.activeDate
                    : styles.inActiveDate,
                ]}
              >
                <Text
                  style={[
                    styles.dateText,
                    isActiveDate == "Tue"
                      ? styles.activeDateText
                      : styles.inActiveDateText,
                  ]}
                >
                  Tue
                </Text>
                <Text
                  style={[
                    isActiveDate == "Tue"
                      ? styles.activeDateText
                      : styles.inActiveDateText,
                  ]}
                >
                  31{" "}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsActiveDate("Wed")}
                style={[
                  styles.dateBtn,
                  isActiveDate == "Wed"
                    ? styles.activeDate
                    : styles.inActiveDate,
                ]}
              >
                <Text
                  style={[
                    styles.dateText,
                    isActiveDate == "Wed"
                      ? styles.activeDateText
                      : styles.inActiveDateText,
                  ]}
                >
                  Wed
                </Text>
                <Text
                  style={[
                    isActiveDate == "Wed"
                      ? styles.activeDateText
                      : styles.inActiveDateText,
                  ]}
                >
                  01{" "}
                </Text>
              </TouchableOpacity>
            </View>

            {/* ........................................................... */}

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                // backgroundColor: "green",
                marginTop: hp("5%"),
                padding: 20,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: "#ABABAB",
              }}
            >
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "500",
                    lineHeight: 15,
                    marginBottom: 10,
                  }}
                >
                  Listen 5 Dua
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <AntDesign
                    name="staro"
                    style={{ marginRight: 7 }}
                    size={20}
                    color="#ABABAB"
                  />
                  <Text
                    style={{
                      color: "#ABABAB",
                      marginTop: 4,
                      fontSize: 10,
                      fontWeight: "400",
                      lineHeight: 15,
                    }}
                  >
                    10 Everyday listen 10 Duas
                  </Text>
                </View>
              </View>
              <View>
                <MaterialCommunityIcons
                  name="checkbox-marked-circle-outline"
                  size={30}
                  color="#ABABAB"
                />
              </View>
            </View>
          </View>
        </>
      )}

      {/* .............................. */}
      {isRewards == true && (
        <View style={{ marginHorizontal: wp("3%") }}>
          {/* ........................................................... */}

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              // backgroundColor: "green",
              marginTop: hp("5%"),
              padding: 20,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#ABABAB",
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "500",
                    lineHeight: 15,
                    marginBottom: 10,
                  }}
                >
                  One Certificate
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <AntDesign
                    name="staro"
                    style={{ marginRight: 7 }}
                    size={20}
                    color="#ABABAB"
                  />
                  <Text
                    style={{
                      color: "#ABABAB",
                      marginTop: 4,
                      fontSize: 10,
                      fontWeight: "400",
                      lineHeight: 15,
                    }}
                  >
                    100
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <MaterialCommunityIcons
                name="checkbox-marked-circle-outline"
                size={30}
                color="#ABABAB"
              />
            </View>
          </View>
        </View>
      )}
      {/* .......................... */}
      {isBenefits && (
        <>
          <View
            style={{ height: height, width: width, alignContent: "center" }}
          >
            <View style={{ backgroundColor: "#ffff" }}>
              <View style={styles.view}>
                {/* ............................ */}
                <View style={{ marginTop: hp("2%") }}>
                  <View style={{ flexDirection: "row", }}>
                    <View
                      style={{
                       
                        marginRight: wp("3%"),
                        padding: hp("0.5%"),
                      }}
                    >
                      <Octicons
                      
                        name="person"
                        size={15}
                        color="#979797"
                      />
                    </View>
                    <Text style={styles.text}>Name</Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <TextInput
                    style={styles.input}
                    placeholder='Muhammad'
                    keyboardType="email"
                  />
                   <SimpleLineIcons
                      style={{position:'absolute',marginLeft:hp('44%'),marginTop:5}}
                        name="pencil"
                        size={15}
                        color="#979797"
                      />
                </View>
                {/* ........................ */}
                {/* ............................ */}
                <View style={{ marginTop: hp("4%") }}>
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={{
                       
                        marginRight: wp("3%"),
                        padding: hp("0.5%"),
                      }}
                    >
                      <Fontisto
                      
                        name="email"
                        size={13}
                        color="#979797"
                      />
                    </View>
                    <Text style={styles.text}>Email</Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <TextInput
                    style={styles.input}
                    placeholder='muhammad@gmail.com'
                    keyboardType="email"
                  />
                   <SimpleLineIcons
                      style={{position:'absolute',marginLeft:hp('44%'),marginTop:5}}
                        name="pencil"
                        size={15}
                        color="#979797"
                      />
                </View>
                {/* ........................ */}
                {/* ............................ */}
                <View style={{ marginTop: hp("4%") }}>
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={{
                       
                        marginRight: wp("2%"),
                        padding: hp("0.5%"),
                      }}
                    >
                      <AntDesign
                      
                        name="lock"
                        size={15}
                        color="#979797"
                      />
                    
                    </View>
                    <Text style={styles.text}>Password</Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <TextInput
                    style={styles.input}
                    placeholder='Password'
                    keyboardType="password"
                  />
                    <SimpleLineIcons
                      style={{position:'absolute',marginLeft:hp('44%'),marginTop:5}}
                        name="pencil"
                        size={15}
                        color="#979797"
                      />
                </View>
                {/* ........................ */}
               
                <View style={{ alignSelf: "center", marginTop: hp("10%") }}>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttontxt}>Update</Text>
                  </TouchableOpacity>
                </View>
              
              </View>
            </View>
          </View>
        </>
      )}
    </ScrollView>

    // <TabView
    //   activeColor="#A044FF"
    //   inactiveColor="#CBD5E1"
    //   renderLabel={({ focused, route }) => {
    //     return (
    //       <TextView
    //         size={20}
    //         category="Medium"
    //         color={focused ? "RED" : "GRAY3"}
    //       >
    //         {route.title}
    //       </TextView>
    //     );
    //   }}
    //   navigationState={{ index, routes }}
    //   renderScene={renderScene}
    //   onIndexChange={setIndex}
    //   initialLayout={initialLayout}
    //   style={styles.container}
    //   renderTabBar={(props) => (
    //     <TabBar
    //       {...props}
    //       style={styles.tabBar}
    //       indicatorStyle={{ backgroundColor: "#A044FF", padding: 1 }}
    //     />
    //   )}
    // />
  );
};

export default TabViewExample;

const styles = StyleSheet.create({
  input: {
    // marginTop:hp('2%'),
    height: hp("5%"),
    //margin: 12,
    // borderBottomWidth:1,
    width: wp("80%"),
    //borderBottomColor:'red',
    borderBottomColor: "#939393",
    //marginLeft: wp('2%'),
    marginLeft: hp("4%"),
    // marginRight:hp('3%'),
    fontSize: 14,
    fontWeight: "400",
    // color:'#222222',
    paddingLeft: hp("5%"),
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    color: "#979797",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: wp("0%"),
      height: hp("2%"),
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
    backgroundColor: "#2196F3",
    marginTop: 15,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  countrtyItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: width / 1.2,
    // height: '30%',
    backgroundColor: "rgba(203,193,219,0.2)",
    borderWidth: 1,
    borderColor: "rgba(203,193,219,0.2)",
    paddingHorizontal: 30,
    paddingVertical: 5,
    marginBottom: 20,
  },
  modalText: {
    // backgroundColor: 'red',
    width: wp("70%"),
    color: "#000",
    fontSize: 15,
  },

  buttonView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: hp("2%"),
    borderBottomWidth: 1,

    borderBottomColor: "rgba(196, 196, 196, 1)",
  },
  inactiveButton: {
    color: "#ABABAB",
    // backgroundColor:'#fff',
    // fontSize:1
    fontWeight: "bold",
    // paddingBottom:15,
    fontSize: hp("2.3%"),
    marginTop: hp("2%"),
  },
  activeButton: {
    color: "#A044FF",
    // backgroundColor:'#fff',
    // fontSize:1
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "#A044FF",
    paddingBottom: hp("1%"),
    fontSize: hp("2.3%"),
    marginTop: hp("2%"),
  },
  activeDate: {
    color: "white",
    backgroundColor: "#A044FF",
    // fontSize:1
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  inActiveDate: {
    backgroundColor: "#fff",
    // fontSize:1
    borderBottomWidth: 1,
    // borderBottomColor: "#A044FF",
    color: "#A044FF",
  },
  activeDateText: {
    color: "white",
  },
  inActiveDateText: {
    color: "#A044FF",
  },
  dateText: { marginBottom: hp("3%") },

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
    backgroundColor: "#2196F3",
    marginTop: 15,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  countrtyItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: width / 1.2,
    // height: '30%',
    backgroundColor: "rgba(203,193,219,0.2)",
    borderWidth: 1,
    borderColor: "rgba(203,193,219,0.2)",
    paddingHorizontal: 30,
    paddingVertical: 5,
    marginBottom: 20,
  },
  modalText: {
    // backgroundColor: 'red',
    width: "70%",
    color: "#000",
    fontSize: 15,
  },

  dateBtn: {
    width: 45,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#ABABAB",
    flexDirection: "column",
    paddingVertical: hp("1.5%"),
    // paddingHorizontal: wp("0.5%"),
    alignItems: "center",
    marginRight: hp("1%"),
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 4,
  },

  container: {
    //marginTop: StatusBar.currentHeight,
    //backgroundColor:'#O3OAO4',
    color: "#A044FF",
    //backgroundColor:'black',
    //position:'fixed'
  },
  scene: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: "black",
    color: "red",
  },
  card: {
    width: wp("90%"),
    backgroundColor: "#fff",
    height: hp("10%"),
    alignSelf: "center",
    top: hp("5%"),
    //borderWidth:0.3,
    padding: 10,
    paddingLeft: 25,
    borderRadius: 4,
    shadowOpacity: 0.5,
    shadowColor: `rgba(0, 0, 0, 0.15)`,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 3.84,
    elevation: 3,
  },
  // text: {
  //   width: 86,
  //   height: 21,
  //   fontWeight: "500",
  //   fontSize: 14,
  //   color: "#0F0702",
  // },
  caption: {
    width: 115,
    height: 15,
    fontSize: 10,
    fontWeight: "400",
    color: "#ABABAB",
  },
  text2: {
    width: 107,
    height: 21,
    fontWeight: "500",
    fontSize: 14,
    color: "#0F0702",
  },
  view: {
    //marginLeft:30,
    padding: hp("2%"),
    //backgroundColor:'yellow',
    //width:wp('80%'),
    //height:hp('40%'),
    //top:hp('5%'),
    alignSelf: "center",
  },
  text3: {
    fontSize: 14,
    fontWeight: "400",
    color: "#979797",
    paddingTop: wp("3%"),
  },
  input: {
    height: hp("5%"),
    //margin: 12,
    borderBottomWidth:0.5,
    width: wp("85%"),
    borderColor: "#939393",
    padding: hp("1%"),
  },
  login: {
    color: "#828282",
    //color:'yellow',
    fontSize: 14,
    fontWeight: "400",
    //left:190,
    //paddingLeft:92,
    alignSelf: "center",
    top: 30,
    paddingTop: 5,
  },

  button: {
    backgroundColor: "#A044FF",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignContent: "center",
    width: wp("60%"),
    height: hp("7%"),
  },
  buttontxt: {
    color: "white",
    padding: 3,
    alignSelf: "center",
  },
});
