import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styles from './styles';
import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  ImageBackground,
} from 'react-native';
//const {width,height}=Dimensions.get('window');
const ModalPoup = ({visible, children, }) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const Pop = ({navigation}) => {
  const [visible, setVisible] = React.useState(true);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'red'}}>
      <ModalPoup visible={visible} style={{backgroundColor:'green'}}>
        <ImageBackground
        style={{width:wp('70%'), height:hp('25%')}}
        source={require('../../../../assets/111.png')}
        >
        <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
            {/* <TouchableOpacity onPress={() => setVisible(false)}> */}
            <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Image
                source={require('../../../../assets/cross.png')}
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
          </View>
        </View>
        </ImageBackground>
        <Text style={{ fontSize: 20, textAlign: 'center', padding:hp('1%')}}>Enjoying our App?</Text>
        <Text style={{ fontSize: 20, textAlign: 'center', color:'#AFAFB0' , padding:hp('1%')}}>Rate Your Experience With Us</Text>
        <View style={{padding:hp('2%')}}>
        <TouchableOpacity style={{backgroundColor:'#A044FF', alignSelf:'center',width:wp('20%'),height:hp('5%'),padding:10}}>
                            <Text style={{color:'white',textAlign:'center'}}>Rate Us</Text>
        </TouchableOpacity>
        </View>
      </ModalPoup>
      {/* <Button title="Open Modal" onPress={() => setVisible(true)} /> */}
    </View>
  );
};


export default Pop;
// export default ModalPoup;