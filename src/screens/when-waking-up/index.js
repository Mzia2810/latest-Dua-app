import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
  Modal,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
// import AudioPlayer from "../../components/audioPlayer/AudioPlayer";
import Ionicons from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AudioPlayer from "../../components/audioPlayer/AudioPlayer";
import DrawerComponent from "./Drawer";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Benefits from "./Benefits";

const { width, height } = Dimensions.get("window");

const allDuaData = [
  {
    id: 1,
    arabic:
      "اَلْحَمْدُلِلّٰہِ الَّذِیْ اَحْیَانَا بَعْدَ مَااَمَاتَنَا وَاِلَیْہِ النُّشُوْرُ",
    eng: "Alhamdulillahilladzi ahyana ba’dama amatana wa ilaihinnushur",
    urdu: "شکر ہے اللہ کا جس نے ہمیں موت کے بعد زندہ کیا اور اسی کی  طرف جانا ہے.",
  },
  {
    id: 2,
    arabic:"اَلْحَمْدُلِلّٰہِ الَّذِیْ اَحْیَانَا بَعْدَ مَااَمَاتَنَا وَاِلَیْہِ النُّشُوْرُ",
    eng: "Alhamdulillahilladzi ahyana ba’dama amatana wa ilaihinnushur",
    urdu: "شکر ہے اللہ کا جس نے ہمیں موت کے بعد زندہ کیا اور اسی کی  طرف جانا ہے.",
  },

  {
    id: 3,
    arabic:
      "اَلْحَمْدُلِلّٰہِ الَّذِیْ اَحْیَانَا بَعْدَ مَااَمَاتَنَا وَاِلَیْہِ النُّشُوْرُ",
    eng: "Alhamdulillahilladzi ahyana ba’dama amatana wa ilaihinnushur",
    urdu: "شکر ہے اللہ کا جس نے ہمیں موت کے بعد زندہ کیا اور اسی کی  طرف جانا ہے.",
  },
];

const WhenWakeUp = ({ navigation }) => {
  const [isDua, setIsDua] = useState(true);
  const [isBenefits, setIsBenefits] = useState(false);
  const [isActive, setIsActive] = useState("Little");
  const [showDrawer, setShowDrawer] = useState(false);

  const CallDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  const [showValumeBox, setShowValumeBox] = useState(false);

  const handleVolumeBox = () => {
    setShowValumeBox(!showValumeBox);
  };

  const handleDua = () => {
    setIsDua(true);
    setIsBenefits(false);
  };
  const handleBenefits = () => {
    setIsDua(false);
    setIsBenefits(true);
  };

  return (
    <View
      style={{
        backgroundColor: "#FAF9FC",
        height: hp("100%"),
      }}
    >
      {showDrawer && (
        <DrawerComponent show={showDrawer} setShow={setShowDrawer} />
      )}

      {/* .......................................................................... */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: hp("1%"),
          marginBottom: hp("1.7%"),
        }}
      >
        <TouchableOpacity
          style={{ marginTop: hp("1.1%") }}
          onPress={CallDrawer}
        >
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 50,
              borderColor: "lightgray",
              borderWidth: 1.5,
              borderBottomRightRadius: 50,
              padding: hp("0.5%"),
            }}
          >
            <Ionicons name="menu" size={25} />
          </View>
        </TouchableOpacity>
        <View>
          <TouchableOpacity onPress={handleDua}>
            <Text
              style={
                isActive && isDua ? styles.activeButton : styles.inactiveButton
              }
            >
              All Dua's
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={handleBenefits}>
            <Text
              style={
                isActive && isBenefits
                  ? styles.activeButton
                  : styles.inactiveButton
              }
            >
              Benefits
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image
            style={{
              marginTop: hp("1%"),
              width: wp("10%"),
              height: hp("5.5%"),
              borderRadius: 50,
              borderColor: "lightgray",
              borderWidth: 1.5,
            }}
            source={require("../../../assets/pic.jpeg")}
          />
        </View>
      </View>
      {/* ......................Card........................................ */}
      <View>
        {isDua == true ? (
          <>
            <ImageBackground
              source={require("../../../assets/little-kids/dreamingUp.png")}
              style={{ height: hp("62%") }}
            >
              <FlatList
              style={{height:hp('20%')}}
                data={allDuaData}
                renderItem={({ item }) => (
                  <View
                    key={item.id}
                    style={{
                      backgroundColor: "#ffff",
                      marginHorizontal: wp("5%"),
                      marginVertical: hp("1%"),
                      shadowColor: "#000",
                      shadowOffset: {
                        width: wp("0%"),
                        height: hp("1%"),
                      },
                      shadowOpacity: 0.2,
                      shadowRadius: 1.41,

                      elevation: 2,
                      marginBottom: hp("1%"),
                      // backgroundColor: "#ffff",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "column",
                        padding: 3,

                        // borderBottomWidth: 1,
                        // borderBottomColor: "#C4C4C4",
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity style={{ marginLeft: 15 }}>
                          <View
                            style={{
                              padding: 5,
                            }}
                          >
                            <MaterialCommunityIcons
                              name="cards-heart-outline"
                              size={20}
                            />
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <View
                            style={{
                              padding: 5,
                            }}
                          >
                            <AntDesign name="sharealt" size={20} />
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                    {/* .............Arabic............ */}
                    <View
                      style={{
                        flexDirection: "row",
                        padding: 7,
                        justifyContent: "space-between",
                        borderBottomWidth: 1,
                        borderBottomColor: "#C4C4C4",
                        paddingVertical: 7,
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity>
                          <View
                            style={{
                              marginTop: 3,
                              padding: 5,
                            }}
                          >
                            <Entypo name="controller-play" size={20} />
                          </View>
                        </TouchableOpacity>
                        <View style={{ marginTop: 8 }}>
                          <Text
                            style={{
                              fontSize: 10,
                              fontWeight: "400",
                              padding: 3,
                              paddingLeft: 14,
                              borderLeftWidth: 2,
                              borderLeftColor: "#FFD27B",
                            }}
                          >
                            Arabic
                          </Text>
                        </View>
                      </View>
                      <View>
                        <Text
                          style={{
                            marginTop: hp("1%"),
                            color: "#800000",
                            fontSize: 14,
                            lineHeight: 19,
                            fontWeight: "400",
                          }}
                        >
                          {item.arabic}
                        </Text>
                      </View>
                    </View>
                    {/* End Aracbic */}
                    <View
                      style={{
                        flexDirection: "row",
                        padding: 5,
                        justifyContent: "space-between",
                        // backgroundColor:'red',
                        paddingBottom: 10,
                        // backgroundColor:'green',
                        marginTop: 15,
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity
                          style={{
                            backgroundColor: "#A044FF",
                            marginRight: hp("1%"),
                            justifyContent: "center",
                            width: 85,
                            height: 25,
                            // marginTop:2,
                            marginLeft: 5,
                          }}
                        >
                          <Text
                            style={{
                              color: "#fff",
                              textAlign: "center",
                              fontWeight: "400",
                              fontSize: 10,
                              paddingHorizontal: 2,
                              lineHeight: 15,
                            }}
                          >
                            Transliteration
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{ width: wp("60%") }}>
                        <Text
                          style={{
                            textAlign: "center",
                            fontSize: 10,
                            lineHeight: 15,
                            fontWeight: "400",
                          }}
                        >
                          {item.eng}
                        </Text>
                      </View>
                    </View>
                    {/* ................. */}
                    <View
                      style={{
                        flexDirection: "row",
                        padding: 5,
                        justifyContent: "space-between",
                        marginTop: hp("4%"),
                        // backgroundColor:'red',
                        marginTop: 15,
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderTopWidth: 1,
                        borderTopColor: "#C4C4C4",
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity>
                          <View
                            style={{
                              marginTop: 3,
                              padding: 5,
                            }}
                          >
                            <Entypo name="controller-play" size={20} />
                          </View>
                        </TouchableOpacity>
                        <View style={{ marginTop: 8 }}>
                          <Text
                            style={{
                              fontSize: 10,
                              fontWeight: "400",
                              padding: 3,
                              paddingLeft: 14,
                              borderLeftWidth: 2,
                              borderLeftColor: "#FFD27B",
                            }}
                          >
                            urdu
                          </Text>
                        </View>
                      </View>
                      <View style={{ width: wp("60%"), marginTop: 7 }}>
                        <Text
                          style={{
                            textAlign: "center",
                            fontSize: 12,
                            lineHeight: 15,
                            fontWeight: "400",
                          }}
                        >
                          {item.urdu}
                        </Text>
                      </View>
                    </View>
                  </View>
                )}
              />

              {/* ................End Card...................................... */}
            </ImageBackground>
            <AudioPlayer onPress={handleVolumeBox} />
          </>
        ) : (
          <>
            <Benefits />
          </>
        )}
      </View>
    </View>
  );
};

export default WhenWakeUp;

const styles = StyleSheet.create({
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
    // color: "#C4C4C4",
    color: "#ABABAB",

    // backgroundColor:'#fff',
    // fontSize:1
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 21,
    marginTop: hp("2%"),
  },
  activeButton: {
    color: "#A044FF",
    // backgroundColor:'#fff',
    // fontSize:1
    borderBottomWidth: 1,
    borderBottomColor: "#A044FF",
    paddingBottom: hp("1%"),
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 21,
    marginTop: hp("2%"),
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
});
