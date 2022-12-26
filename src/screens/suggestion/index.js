import  React, {useState} from "react";
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
  ImageBackground,
} from "react-native";
import Checkbox from "expo-checkbox";
import Ionicons from "@expo/vector-icons/Entypo";
// import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
const { width, height } = Dimensions.get("window");
const Suggestions = ({ navigation }) => {
  const [isChecked, setChecked] = useState(true);
  const [secChecked, setSecChecked] = useState(true);
  const [thirdCheck, setThirdCheck] = useState(true);
  const [forthCheck, setForthCheck] = useState(true);
  const [fifthCheck, setFifthCheck] = useState(true);



  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.heading}>Please select the type of Feedback</Text>
        <View style={{ flexDirection: "row" ,marginTop:20 }}>
          <TouchableOpacity onPress={() => setChecked(true)}>
            <Checkbox
              style={{
                borderWidth:1,
                borderColor: "#ffff",
                width: 16,
                height: 16,
                marginTop: 9,
              }}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked == true ? "#A044FF" : "#E5E5E5"}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Reading Problem</Text>
        </View>
        <View style={{ flexDirection: "row",marginVertical:10, }}>
          <TouchableOpacity onPress={() => setSecChecked(true)}>
            <Checkbox
              style={{
                borderWidth:1,
                borderColor: "#ffff",
                width: 16,
                height: 16,
                marginTop: 9,
              }}
              value={secChecked}
              onValueChange={setSecChecked}
              color={secChecked == true ? "#A044FF" : "#E5E5E5"}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Overall Service</Text>
        </View>
        <View style={{ flexDirection: "row",marginVertical:10, }}>
          <TouchableOpacity onPress={() => setThirdCheck(true)}>
            <Checkbox
              style={{
                borderWidth:1,
                borderColor: "#ffff",
                width: 16,
                height: 16,
                marginTop: 9,
              }}
              value={thirdCheck}
              onValueChange={setThirdCheck}
              color={thirdCheck == true ? "#A044FF" : "#E5E5E5"}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Quality Related</Text>
        </View>
        <View style={{ flexDirection: "row",marginVertical:10, }}>
          <TouchableOpacity onPress={() => setForthCheck(true)}>
            <Checkbox
              style={{
                borderWidth:1,
                borderColor: "#ffff",
                width: 16,
                height: 16,
                marginTop: 9,
              }}
              value={forthCheck}
              onValueChange={setForthCheck}
              color={forthCheck == true ? "#A044FF" : "#E5E5E5"}
            />
          </TouchableOpacity>
          <Text style={styles.text}>App Crash</Text>
        </View>
        <View style={{ flexDirection: "row",marginVertical:10, }}>
          <TouchableOpacity onPress={() => setFifthCheck(true)}>
            <Checkbox
              style={{
                borderWidth:1,
                borderColor: "#ffff",
                width: 16,
                height: 16,
                marginTop: 9,
              }}
              value={fifthCheck}
              onValueChange={setFifthCheck}
              color={fifthCheck == true ? "#A044FF" : "#E5E5E5"}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Other Issues</Text>
        </View>
      
        <TextInput
          placeholder="Type your suggestions for the app.."
          placeholderTextColor={"#B1B1B1"}
          style={styles.input}
        />
        <View
          style={{
            flexDirection: "row",
            alignSelf: "flex-end",
            marginRight: hp("2%"),
            marginTop: hp("2.5%"),
          }}
        >
          <TouchableOpacity>
            <Text style={{ color: "#B1B1B1" ,marginRight:20}}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ color: "#A044FF", marginLeft: hp("2%") }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Suggestions;

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'yellow',
    flex: 1,
    // justifyContent:'center',
    // alignContent:'center',
    //position:'fixed',
    backgroundColor: "#fff",
  },
  heading: {
    color: "#000000",
    fontWeight: "500",
    fontStyle: "medium",
    fontSize: 15,
    lineHeight: 23,
    marginTop: hp("4%"),
    //alignSelf:'center',
    //backgroundColor:'red'
  },
  view: {
    //marginLeft:30,
    // marginLeft:25,
    // marginRight:25,
    //backgroundColor:'yellow',
    width: wp("90%"),
    height: hp("90%"),
    alignSelf: "center",
    // backgrounColor:'pink',
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 12,
    fontWeight: "400",
    color: "#000000",
    lineHeight: 18,
    fontStyle: "normal",
    marginLeft: hp("3%"),
    marginTop: hp("1%"),
  },
  input: {
    marginTop: hp("2%"),
    height: hp("25%"),
    // //margin: 12,
    // borderBottomWidth:0.25,
    width: wp("85%"),
    borderColor: "#939393",
    // //marginLeft: wp('2%'),
    marginLeft: hp("1%"),
    // // marginRight:hp('3%'),
    // fontSize:14,
    // fontWeight:"400",
    // color:'#222222',
    paddingBottom: hp("18%"),
    paddingLeft: hp("3%"),
    paddingRight: hp("3%"),
    backgroundColor: "#F4F4F4",
    // placeholderColor:'#F4F4F4'
    borderRadius: 4,
  },
  forgot: {
    //position:'absolute',
    fontSize: 14,
    fontWeight: "400",
    alignSelf: "flex-end",
    marginRight: wp("17%"),
    margin: hp("1%"),
  },
});
