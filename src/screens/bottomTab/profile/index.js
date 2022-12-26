import * as React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Button,
  Image,
  TextInput,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
const { width, height } = Dimensions.get("window");
import styles from "./styles.js";
import TabViewExample from "./TabView/index";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 20,marginTop:25 }}>
        <View
          style={{ paddingLeft: 10, width: wp("90%"), alignSelf: "center" }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingRight: 10,
            }}
          >
            <Image
              style={{ height: 50, width: 35 }}
              source={require("../../../../assets/boy.png")}
            />
            <Feather name="bell" size={30} color="#FFFFFF" />
          </View>
          <Text style={styles.text}>Hello Ali</Text>
          <Text style={styles.caption}>Get your awards by completing task</Text>
        </View>
      </View>
      <View style={styles.form}>
        <View >
          <TabViewExample />
        </View>
      </View>
    </View>
  );
};

export default Profile;
