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
import Splash from "../screens/SplashScreen";
import Login from "../screens/Login/index";
import SignUp from "../screens/SignUp/index";
import ForgetPassword from "../screens/ForgetPassword";
import Verification from "../screens/Verification";
import Reset from "../screens/ResetPassword";
import NewPassword from "../screens/NewPassword";
import Email from "../screens/Email/index";
import Payment from "../screens/Payment/index";
import GradientHeader from "../components/GradientHeader";
import { MaterialIcons } from "@expo/vector-icons";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Stack = createNativeStackNavigator();

const Auth = () => {
  const DuaHeader = ({ props }) => {
    const { navigation } = props;
    const canGoBack = () => {
      if (navigation.canGoBack()) {
        navigation.goBack();
      }
    };
    return (
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: hp("2%"),
          marginTop: hp("5%"),
          width: wp("90%"),
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={canGoBack}>
            <MaterialIcons name="arrow-back" size={25} color="#fff" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              marginLeft: 35,
              color: "#ffff",
            }}
          >
            Forget Password
          </Text>
        </View>
      </View>
    );
  };

  const VerificationHeader = ({ props }) => {
    const { navigation } = props;
    const canGoBack = () => {
      if (navigation.canGoBack()) {
        navigation.goBack();
      }
    };
    return (
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: hp("2%"),
          marginTop: hp("5%"),
          width: wp("90%"),
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={canGoBack}>
            <MaterialIcons name="arrow-back" size={25} color="#fff" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              marginLeft: 35,
              color: "#ffff",
            }}
          >
            Verification
          </Text>
        </View>
      </View>
    );
  };

  const NewPasswordHeader = ({ props }) => {
    const { navigation } = props;
    const canGoBack = () => {
      if (navigation.canGoBack()) {
        navigation.goBack();
      }
    };
    return (
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: hp("2%"),
          marginTop: hp("5%"),
          width: wp("90%"),
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={canGoBack}>
            <MaterialIcons name="arrow-back" size={25} color="#fff" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              marginLeft: 35,
              color: "#ffff",
            }}
          >
            New Password
          </Text>
        </View>
      </View>
    );
  };

  const EmailHeader = ({ props }) => {
    const { navigation } = props;
    const canGoBack = () => {
      if (navigation.canGoBack()) {
        navigation.goBack();
      }
    };
    return (
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: hp("2%"),
          marginTop: hp("5%"),
          width: wp("90%"),
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={canGoBack}>
            <MaterialIcons name="arrow-back" size={25} color="#fff" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              marginLeft: 35,
              color: "#ffff",
            }}
          >
            Email
          </Text>
        </View>
      </View>
    );
  };
  const PaymentHeader = ({ props }) => {
    const { navigation } = props;
    const canGoBack = () => {
      if (navigation.canGoBack()) {
        navigation.goBack();
      }
    };
    return (
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: hp("2%"),
          marginTop: hp("5%"),
          width: wp("90%"),
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={canGoBack}>
            <MaterialIcons name="arrow-back" size={25} color="#fff" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              marginLeft: 35,
              color: "#ffff",
            }}
          >
            Payment
          </Text>
        </View>
      </View>
    );
  };
  const ResetHeader = ({ props }) => {
    const { navigation } = props;
    const canGoBack = () => {
      if (navigation.canGoBack()) {
        navigation.goBack();
      }
    };
    return (
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: hp("2%"),
          marginTop: hp("5%"),
          width: wp("90%"),
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={canGoBack}>
            <MaterialIcons name="arrow-back" size={25} color="#fff" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              marginLeft: 35,
              color: "#ffff",
            }}
          >
            Reset
          </Text>
        </View>
      </View>
    );
  };

  return (
    <Stack.Navigator initialRouteName="Splash">
      {/*  SplashScreen */}
      <Stack.Screen
        name="Splash"
        options={{
          headerShown: false,
        }}
        component={Splash}
      />
      {/*   Login  */}
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
        }}
        component={Login}
      />
      {/*   Login  */}
      <Stack.Screen
        name="signup"
        options={{
          headerShown: false,
        }}
        component={SignUp}
      />
      <Stack.Screen
        name="ForgetPassword"
        options={(props) => {
          console.log("this my props when wake up =============", props);
          return {
            headerStyle: {
              backgroundColor:
                "linear-gradient(to bottom, #4e54c8 0%, #a044ff 100%)",
            },
            headerTintColor: "#fff",

            // headerLeft: () => <Ionicons name="sun" size={25} color="#fff" />,
            headerTitle: "When Waking up ",
            header: () => (
              <GradientHeader DuaHeader={DuaHeader} props={props} />
            ),
            headerStyle: {
              backgroundColor: "transparent",
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
            },
            headerShown: true,
          };
        }}
        component={ForgetPassword}
      />
      <Stack.Screen
        name="Verification"
        options={(props) => {
          console.log("this my props when wake up =============", props);
          return {
            headerStyle: {
              backgroundColor:
                "linear-gradient(to bottom, #4e54c8 0%, #a044ff 100%)",
            },
            headerTintColor: "#fff",

            // headerLeft: () => <Ionicons name="sun" size={25} color="#fff" />,
            headerTitle: "Verification ",
            header: () => (
              <GradientHeader DuaHeader={VerificationHeader} props={props} />
            ),
            headerStyle: {
              backgroundColor: "transparent",
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
            },
            headerShown: true,
          };
        }}
        component={Verification}
      />
      <Stack.Screen
        name="Reset"
        options={(props) => {
          console.log("this my props when wake up =============", props);
          return {
            headerStyle: {
              backgroundColor:
                "linear-gradient(to bottom, #4e54c8 0%, #a044ff 100%)",
            },
            headerTintColor: "#fff",

            // headerLeft: () => <Ionicons name="sun" size={25} color="#fff" />,
            headerTitle: "When Waking up ",
            header: () => (
              <GradientHeader DuaHeader={ResetHeader} props={props} />
            ),
            headerStyle: {
              backgroundColor: "transparent",
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
            },
            headerShown: true,
          };
        }}
        component={Reset}
      />
      <Stack.Screen
        name="NewPassword"
        options={(props) => {
          console.log("this my props when wake up =============", props);
          return {
            headerStyle: {
              backgroundColor:
                "linear-gradient(to bottom, #4e54c8 0%, #a044ff 100%)",
            },
            headerTintColor: "#fff",

            // headerLeft: () => <Ionicons name="sun" size={25} color="#fff" />,
            headerTitle: "When Waking up ",
            header: () => (
              <GradientHeader DuaHeader={NewPasswordHeader} props={props} />
            ),
            headerStyle: {
              backgroundColor: "transparent",
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
            },
            headerShown: true,
          };
        }}
        component={NewPassword}
      />
      <Stack.Screen
        name="Email"
        options={(props) => {
          console.log("this my props when wake up =============", props);
          return {
            headerStyle: {
              backgroundColor:
                "linear-gradient(to bottom, #4e54c8 0%, #a044ff 100%)",
            },
            headerTintColor: "#fff",

            // headerLeft: () => <Ionicons name="sun" size={25} color="#fff" />,
            headerTitle: "When Waking up ",
            header: () => (
              <GradientHeader DuaHeader={EmailHeader} props={props} />
            ),
            headerStyle: {
              backgroundColor: "transparent",
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
            },
            headerShown: true,
          };
        }}
        component={Email}
      />
      <Stack.Screen
        name="Payment"
        options={(props) => {
          console.log("this my props when wake up =============", props);
          return {
            headerStyle: {
              backgroundColor:
                "linear-gradient(to bottom, #4e54c8 0%, #a044ff 100%)",
            },
            headerTintColor: "#fff",

            // headerLeft: () => <Ionicons name="sun" size={25} color="#fff" />,
            headerTitle: "When Waking up ",
            header: () => (
              <GradientHeader DuaHeader={PaymentHeader} props={props} />
            ),
            headerStyle: {
              backgroundColor: "transparent",
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
            },
            headerShown: true,
          };
        }}
        component={Payment}
      />
      {/*  When Wake up */}
      {/* <Stack.Screen
        name="WhenWakeUp"
        options={{
          headerStyle: {
            backgroundColor:
              "linear-gradient(180deg, #4E54C8 0%, #A044FF 100%)",
          },
          headerTintColor: "#fff",

          // headerLeft: () => <Ionicons name="sun" size={25} color="#fff" />,
          headerTitle: "When Waking up ",
          headerRight: () => (
            <>
              <Image
                style={{
                  backgroundColor: "white",
                  borderRadius: 50,
                  marginBottom: 5,
                }}
                source={require("../../assets/usa.png")}
              />
              <Text style={{ color: "#fff", fontSize: 15, marginBottom: 5 }}>
                English
              </Text>
              <Ionicons name="chevron-down" size={25} color="#fff" />
            </>
          ),
        }}
        component={WhenWakeUp}
      /> */}
      {/* <Stack.Screen
        name="Premium"
        options={{
          headerStyle: {
            backgroundColor:
              "linear-gradient(180deg, #4E54C8 0%, #A044FF 100%)",
          },
          headerTintColor: "#fff",

          // headerLeft: () => <Ionicons name="sun" size={25} color="#fff" />,
          headerTitle: "Premium ",
          headerRight: () => (
            <>
              <Image
                style={{
                  backgroundColor: "white",
                  borderRadius: 50,
                  marginBottom: 5,
                }}
                source={require("../../assets/usa.png")}
              />
              <Text style={{ color: "#fff", fontSize: 15, marginBottom: 5 }}>
                English
              </Text>
              <Ionicons name="chevron-down" size={25} color="#fff" />
            </>
          ),
        }}
        component={Premium}
      /> */}
      {/* <Stack.Screen
        name="Flags"
        options={{
          headerStyle: {
            backgroundColor:
              "linear-gradient(180deg, #4E54C8 0%, #A044FF 100%)",
          },
          headerTintColor: "#fff",

          // headerLeft: () => <Ionicons name="sun" size={25} color="#fff" />,
          headerTitle: "Flags ",
          headerRight: () => (
            <>
              <Image
                style={{
                  backgroundColor: "white",
                  borderRadius: 50,
                  marginBottom: 5,
                }}
                source={require("../../assets/usa.png")}
              />
              <Text style={{ color: "#fff", fontSize: 15, marginBottom: 5 }}>
                English
              </Text>
              <Ionicons name="chevron-down" size={25} color="#fff" />
            </>
          ),
        }}
        component={Flags}
      /> */}

      {/* BottomTabNavigator */}
      {/* <Stack.Screen
        name="Bottom"
        component={BottomTabNavigator}
        options={{
          headerStyle: {
            backgroundColor:
              "linear-gradient(180deg, #4E54C8 0%, #A044FF 100%)",
          },

          headerLeft: () => <Ionicons name="sun" size={25} color="#fff" />,
          headerTitle: " ",
          headerRight: () => (
            <>
              <Image
                style={{
                  backgroundColor: "white",
                  borderRadius: 50,
                  marginBottom: 5,
                }}
                source={require("../../assets/usa.png")}
              />
              <Text style={{ color: "#fff", fontSize: 15, marginBottom: 5 }}>
                English
              </Text>
              <Ionicons name="chevron-down" size={25} color="#fff" />
            </>
          ),
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default Auth;
