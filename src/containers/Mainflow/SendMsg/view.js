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
  TouchableNativeFeedback,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const view = ({navigation}) => {
  return (
    <View>
      {/* 1:1 문의하기 타이틀 및 언더 바 start */}
      <Image
        source={require('../../../assets/images/send_msg.png')}
        style={{
          resizeMode: 'contain',
          width: width * 1,
          position: 'absolute',
          top: height * 0.007,
        }}
      />
      {/* 1:1 문의하기 타이틀 및 언더 바 end */}
      {/* 1:1문의하기 뒤로가기 버튼 start */}
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
      {/* 1:1 문의하기 뒤로가기 버튼 end */}

      {/* 제목 이미지 start */}
      <Image
        source={require('../../../assets/images/sned_msg_st.png')}
        style={{
          resizeMode: 'contain',
          width: width * 0.15,
          position: 'absolute',
          top: height * 0.075,
          right: width * 0.8,
        }}
      />
      {/* 제목 이미지 end
      
      */}
      {/* 1:1 문의하기 등록 버튼 start */}
      <TouchableNativeFeedback
        onPress={() => navigation.navigate('TestButton')}>
        <Image
          source={require('../../../assets/images/btn_apply.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.8,
            position: 'absolute',
            right: width * 0.1,
            top: height * 0.75,
          }}
        />
      </TouchableNativeFeedback>
      {/* 1:1 문의하기 등록 버튼 end */}
    </View>
  );
};

export default view;
