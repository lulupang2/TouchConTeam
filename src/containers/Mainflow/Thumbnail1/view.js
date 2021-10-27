import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Touch,
  Button,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const view = ({navigation}) => {
  return (
    <View>
      {/* 닫기 버튼 구현 못함 추후 확인 start */}
      <View style={{flexDirection: 'row'}}>
        <View style={{width: width * 0.88}}></View>
        <TouchableNativeFeedback onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../assets/images/btn_close_thum.png')}
            style={{
              resizeMode: 'contain',
              width: width * 0.1,
            }}
          />
          {/* 닫기 버튼 구현 x end */}
        </TouchableNativeFeedback>
      </View>
      <Image
        source={require('../../../assets/images/thumnail1.png')}
        style={{
          resizeMode: 'contain',
          width: width * 1,
          position: 'absolute',
          top: height * 0.01,
        }}
      />
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default view;
