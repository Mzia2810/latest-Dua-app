import * as React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import EvilIcons from "react-native-vector-icons/EvilIcons";
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

const { width, height } = Dimensions.get("window");
// import styles from "./styles";
const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View>
          <Image
            style={{ height: height, width: width }}
            source={require("../../../assets/bg.png")}
          />
        </View>
        <View style={styles.form}>
          {/* <ScrollView> */}
          <View>
            <Text style={styles.heading}>Sign Up</Text>
          </View>
          <View style={styles.view}>
            <View style={{ marginTop: hp("2%") }}>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    marginLeft: wp("5%"),
                    marginRight: hp("1%"),
                    padding: hp("0.5%"),
                  }}
                >
                  <AntDesign
                    style={{ marginLeft: hp("2%") }}
                    name="user"
                    size={15}
                    color="#979797"
                  />
                </View>
                <Text style={styles.text}>Full Name</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={[styles.input, { borderBottomWidth: hp("0.07%") }]}
                // placeholder='Muhammad'
                keyboardType="name"
              />
            </View>
            <View style={{ marginTop: hp("2%") }}>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    marginLeft: wp("5%"),
                    marginRight: wp("1%"),
                    padding: hp("0.5%"),
                  }}
                >
                  <Fontisto
                    style={{ marginLeft: hp("2%") }}
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
                // placeholder='mali@gmail.com'
                keyboardType="email"
              />
            </View>
            <View style={{ marginTop: hp("2%") }}>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    marginLeft: wp("5%"),
                    marginRight: wp("1%"),
                    padding: hp("0.5%"),
                  }}
                >
                  <AntDesign
                    style={{ marginLeft: hp("2%") }}
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
                // placeholder='Password'
                keyboardType="password"
              />
              <TouchableOpacity
                style={{ marginLeft: hp("43%"), position: "absolute" }}
              >
                <EvilIcons name="eye" size={27} color="#979797" />
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: hp("2%") }}>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    marginLeft: wp("5%"),
                    marginRight: wp("1%"),
                    padding: hp("0.5%"),
                  }}
                >
                  <AntDesign
                    style={{ marginLeft: hp("2%") }}
                    name="lock"
                    size={15}
                    color="#979797"
                  />
                </View>
                <Text style={styles.text}>Confirm Password</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.input}
                // placeholder='Confirm Password'
                keyboardType="password"
              />
              <TouchableOpacity
                style={{ marginLeft: hp("43%"), position: "absolute" }}
              >
                <EvilIcons name="eye" size={27} color="#979797" />
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: "center",
                alignSelf: "center",
                margin: hp("1%"),
              }}
            >
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontxt}>Sign Up</Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignContent: "center",
                  margin: hp("0.5%"),
                }}
              >
                <Text style={styles.login}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("login")}>
                  <Text style={styles.resend}>Login</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.option}>or sign up with </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <View>
                <TouchableOpacity style={styles.google}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignContent: "center",
                      margin: hp("1%"),
                    }}
                  >
                    <View style={{ marginRight: hp("1.3%") }}>
                      <AntDesign name="google" size={20} color="white" />
                    </View>
                    <View
                      style={
                        {
                          /*margin:wp('2%'), width:wp('30%'), alignContent:'center', justifyContent:'center'*/
                        }
                      }
                    >
                      <Text style={styles.btnText}>Google</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.facebook}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignContent: "center",
                      margin: hp("1%"),
                    }}
                  >
                    <View style={{ marginRight: hp("1.3%") }}>
                      <FontAwesome name="facebook" size={20} color="white" />
                    </View>
                    <View>
                      <Text style={styles.btnText}>Facebook</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* </ScrollView> */}
        </View>
      </View>
    </View>
  );
};
export default SignUp;

const styles = StyleSheet.create({
  container: {
    //backgroundColor:'yellow',
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    //position:'fixed',
  },
  background: {
    backgroundColor: "black",
    flex: 1,
  },
  form: {
    //backgroundColor:'red',
    backgroundColor: "#fff",
    //flex:1,
    width: width,
    height: hp("80%"),
    top: hp("20%"),
    bottom: hp("5%"),
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    position: "absolute",
  },
  heading: {
    color: "#A044FF",
    fontWeight: "500",
    fontSize: 24,
    margin: 10,
    alignSelf: "center",
  },
  view: {
    //marginLeft:30,
    marginLeft: 25,
    marginRight: 25,
    //backgroundColor:'yellow',
    width: width,
    height: hp("70%"),
    alignSelf: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    color: "#979797",
  },
  image: {
    width: 12,
    height: 15,
    //marginRight:10,
  },
  input: {
    // marginTop:hp('2%'),
    height: hp("5%"),
    //margin: 12,
    borderBottomWidth: 0.4,
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
  resend: {
    color: "#4E54C8",
    fontSize: 14,
    fontWeight: "500",
    alignSelf: "center",
    //top:30,
    marginTop: hp("1%"),
  },
  login: {
    color: "#828282",
    //color:'yellow',
    fontSize: 14,
    fontWeight: "400",
    //left:190,
    //marginLeft:92,
    alignSelf: "center",
    //top:hp('30'),
    marginTop: hp("1%"),
  },
  option: {
    color: "#828282",
    //color:'yellow',
    fontSize: 14,
    fontWeight: "400",
    //left:190,
    //marginLeft:92,
    alignSelf: "center",
    //top:150,
    marginTop: hp("1%"),
  },
  google: {
    borderRadius: 12,
    margin: hp("1%"),
    backgroundColor: "#F14432",
    //backgroundColor:'yellow',
    // justifyContent:'center',
    // alignContent:'center',
    // marginLeft:10,
    width: wp("35%"),
    height: hp("5.5%"),
  },
  btnText: {
    color: "white",
    // width:100,
    // height:15,
    //borderRadius:12,
    // marginLeft:wp('10%'),
    //marginRight:wp('2%'),
    alignSelf: "center",
    //backgroundColor:'yellow',
  },
  facebook: {
    borderRadius: 12,
    // margin:10,
    backgroundColor: "#3B5998",
    justifyContent: "center",
    alignContent: "center",
    width: wp("35%"),
    height: hp("5.5%"),
    margin: hp("1%"),
  },
  button: {
    backgroundColor: "#A044FF",
    borderRadius: 10,
    margin: 10,
    justifyContent: "center",
    alignContent: "center",
    width: wp("70%"),
    height: hp("7%"),
  },
  buttontxt: {
    color: "white",
    margin: 3,
    alignSelf: "center",
  },
});
