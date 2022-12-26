import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import {styles} from '../HomeScreen/styles'
import Header from "../../../components/Header";


const {width,height}=Dimensions.get('window')



const data = [
  {
    category:'older',
    category:'Little',
    title: " Importance of Allah",
    image: require("../../../../assets/little-kids/imp.png"),
  },
  {
    category:'grown',
    category:'Little',
    title: "wake Up ",
    image: require("../../../../assets/little-kids/wakeup.png"),
  },
  {
    category:'Little',
    title: "Wakes Up During Sleep",
    image: require("../../../../assets/little-kids/wakeUpDuringSleep.png"),
  },
  {
    category:'grown',
    category:'Little',
    title: "Can’t get to sleep at night",
    image: require("../../../../assets/little-kids/cantGetToSleep.png"),
  },
  {
    category:'Little',
    title: " Waking up with fear or bad dream",
    image: require("../../../../assets/little-kids/badDream.png"),
  },
  {
    category:'older',
    title: " Dreaming Up",
    image: require("../../../../assets/little-kids/puttingOn.png"),
  },
  {
    category:'older',
    title: " Putting on new cloths",
    image: require("../../../../assets/little-kids/wearNewDress.png"),
  },
  {
    category:'grown',
    category:'older',
    title: " When someone wears new dress",
    image: require("../../../../assets/little-kids/takeOff.png"),
  },
  {
    category:'older',
    title: "Taking off Dress",
    image: require("../../../../assets/little-kids/goingWashroom.png"),
  },
  {
    category:'older',
    title: "Going to Toilet",
    image: require("../../../../assets/little-kids/comingFrom.png"),
  },
  {
    category:'grown',
    title: "Coming out of Toilet",
    image: require("../../../../assets/little-kids/brushteeth.png"),
  },
  {
    category:'grown',
    title: "Miswak or Brushing Teeth",
    image: require("../../../../assets/little-kids/brushteeth.png"),
  },
];

const HomeScreen = ({navigation}) => {
  const [filter,setFilter] = useState(data)
  const [isActive, setIsActive] = useState('Little')

  const LittleKids = () =>{
    const little = data.filter((item) => item.category == 'Little');
    setFilter(little)
    setIsActive('Little')


  }
  const olderKids = () =>{
    const older = data.filter((item) => item.category == 'older');
    setFilter(older)
    setIsActive('older')
  }
  const GrownKids = () =>{
    const Grown = data.filter((item) => item.category == 'grown');
    setFilter(Grown)
    setIsActive('grown')
  }
  

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      {/* <Image source={require('../../../assets/L1.png')}/> */}
      <Header />
      <View style={styles.buttonView}>
        <TouchableOpacity onPress={LittleKids}>
          <Text style={isActive =='Little' ? styles.activeButton :styles.inactiveButton}>Little Kids</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={olderKids}>
          <Text style={isActive =='older' ? styles.activeButton :styles.inactiveButton}>Older Kids</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={GrownKids}>
          <Text style={isActive =='grown' ? styles.activeButton :styles.inactiveButton}>Grown Up’s</Text>
        </TouchableOpacity>
      </View>


      <ScrollView style={{ margin: 5 }}>
        <FlatList
          data={filter}
          numColumns={3}
          renderItem={({ item, index, separators }) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('AllDua')}
              // onShowUnderlay={separators.highlight}
              // onHideUnderlay={separators.unhighlight}
              style={{ padding: 10,}}
            >
              <View
                style={{
                  width: wp('27%'),
                  height: hp('17%'),
                  borderColor: "#C4C4C4",
                  borderWidth: 0.5,
                  borderRadius:10,
                }}
              >
                <View
                  style={{
                    width: wp('26%'),
                    height: hp('15%'),
                    // backgroundColor: "red",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{ width: 45, height: 48, }}
                  >
                    <Image
                      source={item.image}
                    />
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: hp('1.5%'),
                    position: "absolute",
                    marginTop: hp('12%'),
                    // marginLeft: 5,
                    // backgroundColor:'green',
                    width:'100%',
                    textAlign:'center'
                  }}
                >
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;




export const styles = StyleSheet.create({
  buttonView:{
      flexDirection:'row',
      justifyContent:'space-evenly',
      marginTop:hp('2%'),
      borderBottomWidth:1,
      
      borderBottomColor:'rgba(196, 196, 196, 1)',
  },
  inactiveButton:{
      color:'#ABABAB',
      // backgroundColor:'#fff',
      // fontSize:1
      fontWeight:'bold',
      paddingBottom:15,
      fontSize:hp('2.3%'),
  },
  activeButton:{
      color:'#0F0702',
      // backgroundColor:'#fff',
      // fontSize:1
      fontWeight:'bold',
      borderBottomWidth:1,
      borderBottomColor:'#0F0702',
      paddingBottom:17,
      fontSize:hp('2.3%'),
  },

  modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
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
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
      marginTop: 15,
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  
    countrtyItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: width / 1.2,
      // height: '30%',
      backgroundColor: 'rgba(203,193,219,0.2)',
      borderWidth: 1,
      borderColor: 'rgba(203,193,219,0.2)',
      paddingHorizontal: 30,
      paddingVertical: 5,
      marginBottom: 20,
    },
    modalText: {
      // backgroundColor: 'red',
      width: '70%',
      color: '#000',
      fontSize: 15,
    },
})