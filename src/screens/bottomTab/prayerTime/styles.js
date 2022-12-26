import { StyleSheet,Dimensions } from 'react-native'
const {width,height}=Dimensions.get('window')
export const styles = StyleSheet.create({
    buttonView:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:15,
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
        color:'white',
        backgroundColor:'#A044FF',
    },
    activeText:{
        color:'white',
    }
})