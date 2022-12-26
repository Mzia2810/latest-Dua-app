import { StyleSheet,Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const {width,height}=Dimensions.get('window')
export const styles = StyleSheet.create({
    buttonView:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        
        borderBottomWidth:1,
        borderBottomColor:'rgba(196, 196, 196, 1)',
    },
    inactiveButton:{
        color:'#C4C4C4',
        // backgroundColor:'#fff',
        // fontSize:1
        fontWeight:'bold',
        paddingBottom:15,
    },
    activeButton:{
        color:'#000',
        // backgroundColor:'#fff',
        // fontSize:1
        fontWeight:'bold',
        borderBottomWidth:1,
        paddingBottom:15,
    }
})