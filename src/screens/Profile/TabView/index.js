import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { View,Text,  StyleSheet, Dimensions, StatusBar,Button,TextInput, TouchableOpacity,ScrollView, Image } from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
const {width,height}=Dimensions.get('window');
import styles from './styles';


   

const FirstRoute = () => (
    <View style={{height:height}}>
      <View style={styles.card}>
        <Text style={styles.text}>Listen 5 Dua</Text>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.caption}>Everyday listen 10 Duas</Text>
        </View>
      </View>
    </View>
);

const SecondRoute = () => (
  <View style={{height:height}}>
      <View style={styles.card}>
        <Text style={styles.text2}>One Certificate</Text>
        <Text style={styles.caption}>100</Text>
        
      </View>
  </View>
);

const ThirdRoute = () => (
  <View style={{height:height,width:width, alignContent:'center',}}>
            <View style={{width:wp('90%'), height:height, alignSelf:'center'}}>
                <View style={{flexDirection:'row'}}>
                <View style={{paddingRight:10}}>
                <Text>mughammad</Text>
                </View>
                <Text style={styles.text}>Email</Text>
                </View>
            </View>
            <View style= {{flexDirection:'row'}}>
                <TextInput
                style={styles.input}
                />
                <Text>mughammad</Text>
                
            </View>

  </View>
);


const initialLayout = { width: Dimensions.get('window').width, };

const renderScene = SceneMap({
  task: FirstRoute,
  reward: SecondRoute,
  account:ThirdRoute
});

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'task', title: 'task' },
    { key: 'reward', title: 'reward' },
    { key: 'account', title: 'account' },
  ]);

  return (
    <TabView
    renderLabel={({ focused, route }) => {
      return (
        <TextView
          size={20}
          category="Medium"
          color={focused ? 'RED' : 'GRAY3'}>
          {route.title}
        </TextView>
        );
        }}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.container}
      renderTabBar={props => <TabBar {...props} style={styles.tabBar} indicatorStyle={{backgroundColor:'#A044FF', padding:1, }}/>}
    />
  );
}
  

