import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const view = ({navigation}) => {
  return (
    <View>
      <Image
        source={require('../../../assets/images/sign_out_title.png')}
        style={{
          resizeMode: 'contain',
          width: width * 1,
          position: 'absolute',
          top: height * 0.007,
        }}
      />

      {/* 뒤로가가 버튼 start */}
      <TouchableNativeFeedback onPress={() => navigation.goBack()}>
        <Image
          source={require('../../../assets/images/btn_back.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.1,
            position: 'absolute',
            right: width * 0.85,
          }}
        />
      </TouchableNativeFeedback>
      {/* 뒤로가기 버튼 end */}
      <Image
        source={require('../../../assets/images/sign_out_text.png')}
        style={{
          resizeMode: 'contain',
          width: width * 0.7,
          position: 'relative',
          right: width * -0.15,
          top: height * -0.1,
        }}
      />

      <Image
        source={require('../../../assets/images/asign_check.png')}
        style={{
          resizeMode: 'contain',
          width: width * 0.7,
          position: 'relative',
          right: width * -0.15,
          top: height * -0.3,
        }}
      />
      <TouchableOpacity>
        <Image
          source={require('../../../assets/images/btn_sign_out.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.7,
            position: 'relative',
            right: width * -0.15,
            top: height * -0.1,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default view;
