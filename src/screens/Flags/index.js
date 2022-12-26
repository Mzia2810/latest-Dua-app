import React from "react";
import { View, Text, Image } from "react-native";
import { RadioButton } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";






const MyComponent = () => {
  const [checked, setChecked] = React.useState("america");
  // const [usa, setUsa] = React.useState("USA");
  // const [china, setChina] = React.useState("China");
  // const [japan, setJapan] = React.useState("Japan");
  // const [pak, setPak] = React.useState("Pakistan");
  // const [india, setIndia] = React.useState("Inida");

  return (
    <View style={{width:'100%',height:'100%'}}>


      <View
        style={{
          width: wp("90%"),
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 20,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: wp("8%"), height: hp("4.5%") }}
            source={require("../../../assets/america.png")}
          />
          <Text
            style={{
              textAlign: "center",
              marginLeft: hp("4%"),
              marginTop: hp("0.7%"),
              fontSize: hp("2.5%"),
            }}
          >
            English
          </Text>
          {/* style={{marginTop:5,fontSize:20}} */}
        </View>

        <RadioButton
          color="#A044FF"
        
          value='america'
          status={checked == 'america'? "checked" : "unchecked"}
          onPress={() => setChecked('america')}
        />
      </View>
      <View
        style={{
          width: wp("90%"),
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 20,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: wp("8%"), height: hp("4.5%") }}
            source={require("../../../assets/japan.png")}
          />
          <Text
            style={{
              textAlign: "center",
              marginLeft: hp("4%"),
              marginTop: hp("0.7%"),
              fontSize: hp("2.5%"),
            }}
          >
            Japan
          </Text>
          {/* style={{marginTop:5,fontSize:20}} */}
        </View>

        <RadioButton
          color="#A044FF"
          value='usa'
          status={checked == 'usa'? "checked" : "unchecked"}
          onPress={() => setChecked('usa')}
        />
      </View>
      <View
        style={{
          width: wp("90%"),
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 20,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: wp("8%"), height: hp("4.5%") }}
            source={require("../../../assets/germany.png")}
          />
          <Text
            style={{
              textAlign: "center",
              marginLeft: hp("4%"),
              marginTop: hp("0.7%"),
              fontSize: hp("2.5%"),
            }}
          >
            German
          </Text>
          {/* style={{marginTop:5,fontSize:20}} */}
        </View>

        <RadioButton
          color="#A044FF"
          value='germany'
          status={checked == 'germany'? "checked" : "unchecked"}
          onPress={() => setChecked('germany')}
        />
      </View>
      <View
        style={{
          width: wp("90%"),
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 20,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: wp("8%"), height: hp("4.5%") }}
            source={require("../../../assets/sweden.png")}
          />
          <Text
            style={{
              textAlign: "center",
              marginLeft: hp("4%"),
              marginTop: hp("0.7%"),
              fontSize: hp("2.5%"),
            }}
          >
            Swedish
          </Text>
          {/* style={{marginTop:5,fontSize:20}} */}
        </View>

        <RadioButton
          color="#A044FF"
          value='sweden'
          status={checked == 'sweden'? "checked" : "unchecked"}
          onPress={() => setChecked('sweden')}
        />
      </View>
      <View
        style={{
          width: wp("90%"),
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 20,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: wp("8%"), height: hp("4.5%") }}
            source={require("../../../assets/italy.png")}
          />
          <Text
            style={{
              textAlign: "center",
              marginLeft: hp("4%"),
              marginTop: hp("0.7%"),
              fontSize: hp("2.5%"),
            }}
          >
            Italy
          </Text>
          {/* style={{marginTop:5,fontSize:20}} */}
        </View>

        <RadioButton
          color="#A044FF"
          value='italy'
          status={checked == 'italy'? "checked" : "unchecked"}
          onPress={() => setChecked('italy')}
        />
      </View>
      
    </View>
  );
};

export default MyComponent;



// import * as React from 'react';
// import { View } from 'react-native';
// import { RadioButton } from 'react-native-paper';

// const MyComponent = () => {
//   const [checked, setChecked] = React.useState('first');

//   return (
//     <View>
//       <View
//       <RadioButton
//         value="first"
//         status={ checked === 'first' ? 'checked' : 'unchecked' }
//         onPress={() => setChecked('first')}
//       />
//       <RadioButton
//         value="second"
//         status={ checked === 'second' ? 'checked' : 'unchecked' }
//         onPress={() => setChecked('second')}
//       />
//     </View>
//   );
// };


// export default MyComponent