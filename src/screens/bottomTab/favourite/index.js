import React, { useState } from "react";
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
  Dimensions,
  Button,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
//import { Dropdown } from 'react-native-material-dropdown';
//import Modal from 'react-native-modal';
import Ionicons from "@expo/vector-icons/Entypo";
// import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
const { width, height } = Dimensions.get("window");
// import styles from "./styles.js";
import Checkbox from "expo-checkbox";
import Accordion from "react-native-collapsible/Accordion";

const languages = [
  {
    name: "For Faith",
    // "image":require("../../assets/mishari.png"),
  },
  {
    name: "When Waking Up",
    // "image":require("../../assets/mishari.png"),
  },
  {
    name: "For Forgiveness",
    // "image":require("../../assets/taniji.png"),
  },
  {
    name: "For Seeking Good",
    // "image":require("../../assets/abdurrehman.png"),
  },
  {
    name: "For Heaven",
    // "image":require("../../assets/mishari.png"),
  },
  {
    name: "For Steadfastness",
    // "image":require("../../assets/mishari.png"),
  },
  {
    name: "For Decisions",
    // "image":require("../../assets/mishari.png"),
  },
  {
    name: "For Protection",
  },
  {
    name: "For Light",
  },
];

const Favourite = () => {
  const [viewWidthOne, setViewWidthOne] = useState(false);
  const [viewWidthTwo, setViewWidthTwo] = useState(false);
  const [visibleOne, setVisibleOne] = useState(false);
  const [visibleTwo, setVisibleTwo] = useState(false);
  

  
  const [isChecked, setChecked] = useState(true);
  const [secChecked, setSecChecked] = useState(true);
  const [iconChangeFirst,setIconChangeFirst] = useState(false)
  const [iconChangeSec,setIconChangeSec] = useState(false)

  const handleAccordionOne = () => {
    setViewWidthOne(!viewWidthOne);
    setVisibleOne(!visibleOne);
    setIconChangeFirst(!iconChangeFirst)
  };
  const handleAccordionTwo = () => {
    setViewWidthTwo(!viewWidthTwo);
    setVisibleTwo(!visibleTwo);
    setIconChangeSec(!iconChangeSec)
  };
  // const [activeSections, setActiveSections] = useState([]);

  return (
    <ScrollView style={styles.container}>
      <View style={{ justifyContent: "center", padding: wp("2%") }}>
        <View style={viewWidthOne ? styles.card2 : styles.card1}>
          <View
            style={{
              flexDirection: "row",

              // backgroundColor: "pink",
            }}
          >
            <View style={{ width: wp("50%") }}>
              <Text style={styles.text}>For Faith</Text>
            </View>
            <View style={{ padding: wp("4%"), flexDirection: "row" ,}}>
              <TouchableOpacity onPress={() =>setChecked(true)}>

              <Checkbox
                 style={{borderColor:'#fff', width:18,height:18,marginTop:1.5}}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked == true ? "#A044FF" : 'gray'}
                />
                </TouchableOpacity>
              <TouchableOpacity>
                <EvilIcons
                  name="share-google"
                  size={25}
                  color="#A044FF"
                  style={styles.share}
                />
              </TouchableOpacity>
              <TouchableOpacity >
                <AntDesign
                  name="heart"
                  size={20}
                  color="#A044FF"
                  style={styles.share}
                />
              </TouchableOpacity > 

              <TouchableOpacity style={{marginTop:2}} onPress={handleAccordionOne}>
                <AntDesign
                  name={iconChangeFirst == false ? 'up' : 'down'}
                  size={15}
                  color="#0F0702"
                  style={styles.share}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {visibleOne && (
          <View
            style={{
              // marginRight: wp("20%"),
              // marginVertical: hp("11%"),
              marginLeft: hp("2.4%"),
              // width: hp("49.5%"),
              marginTop: hp("10%"),
              backgroundColor: "#ffff",
              position: "absolute",
              // backgroundColor:'yellow',
              // backgroundColor:'yellow'
            }}
          >
            {/* .............Arabic............ */}
          
            {/* ............................. */}
            <View
              style={{
                flexDirection: "row",
                padding: 7,
                justifyContent: "space-between",
                borderBottomWidth: 1,
                borderBottomColor: "#C4C4C4",

                paddingVertical:10,
                // backgroundColor:'orange',
                
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                 
                >
                  <View
                    style={{
                      padding: 5,
                    }}
                  >
                    <Entypo name="controller-play" size={25} />
                  </View>
                </TouchableOpacity>
                <View style={{marginTop:8}}>
                  <Text
                  style={{
                    fontSize:10,
                    fontWeight:'400',
                    padding: 3,
                 paddingLeft:14,
                      borderLeftWidth: 2,
                      borderLeftColor: "#FFD27B",
                 
                 
                  }}
                  >
                    Arabic
                  </Text>
                </View>
              </View>
              <View>
                <Text style={{ marginTop: hp("1%") ,color:'#800000'}}>
                  اَلْحَمْدُلِلّٰہِ الَّذِیْ اَحْیَانَا بَعْدَ مَااَمَاتَنَا
                  وَاِلَیْہِ النُّشُوْرُ
                </Text>
              </View>
            </View>
            {/* ....................... */}
            <View
              style={{
                flexDirection: "row",
                padding: 5,
                justifyContent: "space-between",
                // backgroundColor:'red',
                paddingBottom:20,
// backgroundColor:'green',
                marginTop:15
              }}
            >
              <View style={{ flexDirection: "row" ,}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#A044FF",
                    marginRight: hp("1%"),
                    justifyContent: "center",
                    width:85,
                    height:25,
                    marginTop:5,
                    marginLeft:5,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      textAlign: "center",
                      fontWeight:'400',
                      fontSize:10,
                      paddingHorizontal:2,
                      lineHeight:15,
                    }}
                  >
                    Transliteration
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ width: wp("60%") }}>
                <Text style={{textAlign:'center',}}>
                  Alhamdulillahilladzi ahyana ba’dama amatana wa ilaihin nushur
                </Text>
              </View>
            </View>
            {/* ............ */}

            <View
              style={{
                flexDirection: "row",
                padding: 5,
                justifyContent: "space-between",
                marginTop: hp("4%"),
                // backgroundColor:'red',
                marginTop:15,
                paddingTop:10,
                borderTopWidth:1,
                borderTopColor:'#C4C4C4'
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  
                >
                  <View
                    style={{
                      padding: 5,
                    }}
                  >
                    <Entypo name="controller-play" size={25} />
                  </View>
                </TouchableOpacity>
                <View style={{marginTop:8}}>
                  <Text
                   style={{
                    fontSize:10,
                    fontWeight:'400',
                    padding: 3,
                 paddingLeft:14,
                      borderLeftWidth: 2,
                      borderLeftColor: "#FFD27B",
                 
                 
                  }}
                  >
                    urdu
                  </Text>
                </View>
              </View>
              <View style={{ width: wp("60%") }}>
                <Text style={{textAlign:'center'}}>
                  شکر ہے اللہ کا جس نے ہمیں موت کے بعد زندہ کیا اور اسی کی طرف
                  جانا ہے.
                </Text>
              </View>
            </View>
          </View>
        ) }

        {/* <SimpleAccordion viewInside={<View/>} title={"My Accordion Title"}/> */}
      </View>
     
      <View style={{ justifyContent: "center", padding: wp("2%") }}>
        <View style={viewWidthTwo ? styles.card2 : styles.card1}>
          <View
            style={{
              flexDirection: "row",

              // backgroundColor: "pink",
            }}
          >
            <View style={{ width: wp("50%") }}>
              <Text style={styles.text}>For Faith</Text>
            </View>
            <View style={{ padding: wp("4%"), flexDirection: "row" }}>
            <Checkbox
               style={{borderColor:'gray', width:18,height:18,marginTop:1}}
                value={secChecked}
                onValueChange={setSecChecked}
                color={secChecked ? "#A044FF" : undefined}
              />
              <TouchableOpacity>
                <EvilIcons
                  name="share-google"
                  size={25}
                  color="#A044FF"
                  style={styles.share}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  name="heart"
                  size={20}
                  color="#A044FF"
                  style={styles.share}
                />
              </TouchableOpacity>

              <TouchableOpacity style={{marginTop:2}} onPress={handleAccordionTwo}>
                <AntDesign
                  name={iconChangeSec == false ? 'up' : 'down'}
                  size={15}
                  color="#0F0702"
                  style={styles.share}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {visibleTwo ? (
          <View
            style={{
              // marginRight: wp("20%"),
              // marginVertical: hp("11%"),
              marginLeft: hp("2.4%"),
              // width: hp("49.5%"),
              marginTop: hp("10%"),
              backgroundColor: "#ffff",
              position: "absolute",
            }}
          >
            {/* .............Arabic............ */}
          
            {/* ............................. */}
            <View
              style={{
                flexDirection: "row",
                padding: 7,
                justifyContent: "space-between",
                borderBottomWidth: 1,
                borderBottomColor: "#C4C4C4",
                paddingVertical:10,
                // backgroundColor:'orange'
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                
                >
                  <View
                    style={{
                      padding: 5,
                    }}
                  >
                    <Entypo name="controller-play" size={25} />
                  </View>
                </TouchableOpacity>
                <View style={{marginTop:8}}>
                  <Text
                    style={{
                      fontSize:10,
                      fontWeight:'400',
                      padding: 3,
                   paddingLeft:14,
                        borderLeftWidth: 2,
                        borderLeftColor: "#FFD27B",
                   
                    }}
                  >
                    Arabic
                  </Text>
                </View>
              </View>
              <View>
                <Text style={{ marginTop: hp("1%"),color:'#800000' }}>
                  اَلْحَمْدُلِلّٰہِ الَّذِیْ اَحْیَانَا بَعْدَ مَااَمَاتَنَا
                  وَاِلَیْہِ النُّشُوْرُ
                </Text>
              </View>
            </View>
            {/* ....................... */}

            <View
              style={{
                flexDirection: "row",
                padding: 5,
                justifyContent: "space-between",
                // backgroundColor:'red',
                paddingBottom:20,
// backgroundColor:'green',
                marginTop:15
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#A044FF",
                    marginRight: hp("1%"),
                    justifyContent: "center",
                    width:85,
                    height:25,
                    marginTop:5,
                    marginLeft:5,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      textAlign: "center",
                      fontWeight:'400',
                      fontSize:10,
                      paddingHorizontal:2,
                      lineHeight:15,
                    }}
                  >
                    Transliteration
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ width: wp("60%") }}>
                <Text style={{textAlign:'center'}}>
                  Alhamdulillahilladzi ahyana ba’dama amatana wa ilaihin nushur
                </Text>
              </View>
            </View>
            {/* ............ */}

            <View
              style={{
                flexDirection: "row",
                padding: 5,
                justifyContent: "space-between",
                marginTop: hp("4%"),
                // backgroundColor:'red',
                marginTop:15,
                paddingTop:10,
                borderTopWidth:1,
                borderTopColor:'#C4C4C4'
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  
                >
                  <View
                    style={{
                      padding: 5,
                    }}
                  >
                    <Entypo name="controller-play" size={25} />
                  </View>
                </TouchableOpacity>
                <View style={{marginTop:8}}>
                  <Text
                     style={{
                      fontSize:10,
                      fontWeight:'400',
                      padding: 3,
                   paddingLeft:14,
                        borderLeftWidth: 2,
                        borderLeftColor: "#FFD27B",
                   
                   
                    }}
                  >
                    urdu
                  </Text>
                </View>
              </View>
              <View style={{ width: wp("60%") }}>
                <Text style={{textAlign:'center'}}>
                  شکر ہے اللہ کا جس نے ہمیں موت کے بعد زندہ کیا اور اسی کی طرف
                  جانا ہے.
                </Text>
              </View>
            </View>
          </View>
        ) : (
          ""
        )}

        {/* <SimpleAccordion viewInside={<View/>} title={"My Accordion Title"}/> */}
      </View>
    </ScrollView>
  );
};
export default Favourite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    //backgroundColor:'yellow',
  },
  card1: {
    flexDirection: "row",
    //backgroundColor:'black',
    width: wp("91%"),
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: hp("8%"),
    borderRadius: 4,
    shadowOpacity: 0.5,
    shadowColor: `rgba(0, 0, 0, 0.1)`,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 3.84,
    elevation: 3,
  },
  card2: {
    flexDirection: "row",
    //backgroundColor:'black',
    width: wp("91%"),
    marginLeft: hp("1.2%"),
    backgroundColor: "#fff",
    height: hp("38%"),
    borderRadius: 4,
    shadowOpacity: 0.5,
    shadowColor: `rgba(0, 0, 0, 0.1)`,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 3.84,
    elevation: 3,
  },
  text: {
    // backgroundColor:'yellow',
    fontSize: 14,
    fontWeight: "500",
    padding: wp("3%"),
    
    //paddingLeft:20,
    //width:200,
    //color:'white'
  },
  share: {
    //position:'absolute',
    paddingLeft: wp("4%"),
    //justifySelf:'flex-end'
  },
  heart: {
    paddingLeft: wp("15%"),
  },
  down: {
    paddingLeft: wp("3%"),
    paddingTop: wp("1%"),
  },
});
