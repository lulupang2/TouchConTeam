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
        source={require('../../../assets/images/mi_title.png')}
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
        source={require('../../../assets/images/mi_explain.png')}
        style={{
          resizeMode: 'contain',
          width: width * 0.7,
          position: 'absolute',
          right: width * 0.15,
          top: height * 0.1,
        }}
      />
    </View>
  );
};

export default view;
