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
      <Image
        source={require('../../../assets/images/qna_title.png')}
        style={{
          resizeMode: 'contain',
          width: width * 1,
          position: 'absolute',
          top: height * 0.007,
        }}
      />
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

      <Image
        source={require('../../../assets/images/btn_qna.png')}
        style={{
          resizeMode: 'contain',
          width: width * 0.8,
          position: 'absolute',
          right: width * 0.1,
        }}
      />
      {/* 터치토큰으로 무엇을 할 수 있나요? start */}
      <Image
        source={require('../../../assets/images/qna_detail.png')}
        style={{
          resizeMode: 'contain',
          width: width * 0.9,
          position: 'absolute',
          top: height * 0.26,
          right: width * 0.05,
        }}
      />
      {/* 터치토큰으로 무엇을 할 수 있나요? end */}

      
      <Image
        source={require('../../../assets/images/qna_gas.png')}
        style={{
          resizeMode: 'contain',
          width: width * 0.9,
          position: 'absolute',
          top: height * 0.56,
          right: width * 0.05,
        }}
      />
      <Image
        source={require('../../../assets/images/qna_quality_fee.png')}
        style={{
          resizeMode: 'contain',
          width: width * 0.9,
          position: 'absolute',
          top: height * 0.63,
          right: width * 0.05,
        }}
      />

      <Image
        source={require('../../../assets/images/qna_quality_fee.png')}
        style={{
          resizeMode: 'contain',
          width: width * 0.9,
          position: 'absolute',
          top: height * 0.63,
          right: width * 0.05,
        }}
      />
      <Image
        source={require('../../../assets/images/qna_shop_mall.png')}
        style={{
          resizeMode: 'contain',
          width: width * 0.9,
          position: 'absolute',
          top: height * 0.7,
          right: width * 0.05,
        }}
      />
      {/* 1:1 문의하기 botton start */}
      <TouchableNativeFeedback onPress={() => navigation.navigate('SendMsg')}>
        <Image
          source={require('../../../assets/images/qna_one_to_one.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.7,
            position: 'absolute',
            top: height * 0.85,
            right: width * 0.15,
          }}
        />
      </TouchableNativeFeedback>
    </View>
  );
};

export default view;
