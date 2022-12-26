import { StyleSheet, Dimensions} from 'react-native'

const {width,height}=Dimensions.get('window')

export const styles = StyleSheet.create({
    headerContainer:{
        height:height/4,
        justifyContent:'space-between',
        paddingVertical:15,
        paddingHorizontal:15
    },
    firstContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        // marginHorizontal:10,
        // marginTop:15
    },
    FridayHeading:{
        fontSize:20,
        fontWeight:'bold'
    },
})