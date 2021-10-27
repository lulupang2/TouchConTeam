import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const view = () => {
  return (
    <View>
      <Image
        source={require('../../../assets/images/notice_title.png')}
        style={{
          resizeMode: 'contain',
          width: width * 1,
          position: 'absolute',
          top: height * 0.0001,
        }}
      />

      <Image
        source={require('../../../assets/images/btn_back.png')}
        style={{
          resizeMode: 'contain',
          width: width * 0.1,
          position: 'absolute',
          top: height * 0.02,
          right: width * 0.85,
        }}
      />

      <Image
        source={require('../../../assets/images/btn_back.png')}
        style={{
          resizeMode: 'contain',
          width: width * 0.1,
          position: 'absolute',
          top: height * 0.02,
          right: width * 0.85,
        }}
      />
      <Image
        source={require('../../../assets/images/notice_list.png')}
        style={{
          resizeMode: 'contain',
          width: width * 1,
          position: 'absolute',
          top: height * 0.1,
        }}
      />
      <Image
        source={require('../../../assets/images/notice_list.png')}
        style={{
          resizeMode: 'contain',
          width: width * 1,
          position: 'absolute',
          top: height * 0.1,
        }}
      />
      <Image
        source={require('../../../assets/images/notice_detail.png')}
        style={{
          resizeMode: 'contain',
          width: width * 1,
          position: 'absolute',
          top: height * 0.005,
        }}
      />
      <Image
        source={require('../../../assets/images/notice_list.png')}
        style={{
          resizeMode: 'contain',
          width: width * 1,
          position: 'absolute',
          top: height * 0.65,
        }}
      />
    </View>
  );
};

export default view;
