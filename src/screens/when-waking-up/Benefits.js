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

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Benefits = () => {
  return (
    <ImageBackground
      source={require("../../../assets/little-kids/dreamingUp.png")}
      style={{ height: hp("100%") }}
    >
      <View
        style={{
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
          backgroundColor: "#fff",
        
        }}
      >
        {/* .............Arabic............ */}
        <View
          style={{
            flexDirection: "row",
            padding: 20,
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderBottomColor: "#C4C4C4",
          
          }}
        >
          <View style={{ width: wp("80%") }}>
            <Text style={{textAlign:'center',color:'#800000',fontSize:14,lineHeight:19,fontWeight:'400'}}>
              مَنْ أصْبَحَ مِنْكُمْ آمِنًا في سربِهِ، مُعَافَىً في جَسَدِهِ،
              عِنْدَهُ قُوتُ يَوْمِهِ، فَكَأنَّمَا حِيزَتْ لَهُ الدُّنْيَا
              بِحَذَافِيرِهَا.
            </Text>
          </View>
        </View>
        {/* End Aracbic */}

        {/* ................. */}
        <View
          style={{
            flexDirection: "row",
            padding: 20,
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderBottomColor: "#C4C4C4",
          }}
        >
          <View style={{ width: wp("80%") }}>
            <Text style={{textAlign:'center',fontSize:12,lineHeight:15,fontWeight:'400'}}>
              تم میں سے جو شخص اس حال میں صبح کرے کہ وہ اپنی جان کی طرف سے بے
              خوف ہو، جسمانی اعتبار سے صحت مند ہو، ایک دن کی خوراک کا سامان اس
              کے پاس ہو، تو گویا اس کے لیے ساری دنیا جمع کردی گئی
            </Text>
          </View>
        </View>
      </View>

      {/* ................End Card...................................... */}
    </ImageBackground>
  );
};

export default Benefits;
