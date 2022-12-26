import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem,
  } from '@react-navigation/drawer';
 
  import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { 
     useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch} from 'react-native-paper';



  
  const DrawerContent =({navigation}) => {

    return (
        <View style={{flex:1, paddingVertical:0,}}>
            <DrawerContentScrollView>
                <View style={styles.drawerContent}>
                  <View style={{}}>
                  <View style={styles.userInfoSection}>
                    <Avatar.Image
                    source={require('./images/avatar2.jpg')} 
                    size={70}
                    />
                    </View>

                    <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Maryam Khan</Title>
                                <Caption style={styles.caption}>maryam@gmail.com</Caption>
                    </View>
                 </View>
                 </View>
                    
               
                <Drawer.Section style={styles.drawerSection}>
                  <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="My Account"
                            onPress={() => {navigation.navigate('Home')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bell" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Notifications"
                            onPress={() => {navigation.navigate('')}}
                        />
                       
                          <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="exclamation" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Terms and Conditions"
                            onPress={() => {props.navigation.navigate('')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="trophy" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Awards"
                            onPress={() => {props.navigation.navigate('')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="shield-lock" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Privacy Policy"
                            onPress={() => {props.navigation.navigate('')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="exit-to-app" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Sign Out"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />



                  </Drawer.Section>


            </DrawerContentScrollView>
        </View>
    );
}

export default DrawerContent;

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
      paddingTop:20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
      border:0,
    },
    
  });


