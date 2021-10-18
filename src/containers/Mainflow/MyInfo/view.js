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
        source={require('../../../assets/images/myInfo_title.png')}
        style={{
          resizeMode: 'contain',
          width: width * 1,
        }}
      />
      {/* 최상단 뒤로가기 버튼 start */}
      <TouchableNativeFeedback onPress={() => navigation.goBack()}>
        <Image
          source={require('../../../assets/images/btn_back.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.1,
            position: 'absolute',
            top: height * 0.001,
            right: width * 0.85,
          }}
        />
      </TouchableNativeFeedback>
      {/* 최상단 뒤로가기 버튼 end*/}
      <Image
        source={require('../../../assets/images/myInfo_email.png')}
        style={{
          resizeMode: 'contain',
          width: width * 1,
        }}
      />
      {/* 터치토큰(터치콘인듯함) 연결 관리 start */}
      <TouchableNativeFeedback
        onPress={() => navigation.navigate('TcConnMana')}>
        <Image
          source={require('../../../assets/images/btn_tc_conn_ma.png')}
          style={{
            resizeMode: 'contain',
            width: width * 1,
            position: 'absolute',
            top: height * 0.17,
          }}
        />
      </TouchableNativeFeedback>
      {/* 터치토큰 연결 관리 end*/}
      {/* PIN번호 변경 버튼 start (버튼이동 미해결)*/}
      <TouchableNativeFeedback onPress={() => navigation.navigate('Pinchg')}>
        <Image
          source={require('../../../assets/images/btn_ipn_ch.png')}
          style={{
            resizeMode: 'contain',
            width: width * 1,
            position: 'absolute',
            top: height * 0.24,
          }}
        />
      </TouchableNativeFeedback>
      {/* PIN번로 변경 버튼 end */}
      {/* 마케팅 정보 알림 버튼 가기 start */}
      <TouchableNativeFeedback
        onPress={() => navigation.navigate('MarketingInfo')}>
        <Image
          source={require('../../../assets/images/btn_to_marketing_bell.png')}
          style={{
            resizeMode: 'contain',
            width: width * 1,
            position: 'absolute',
            top: height * 0.32,
          }}
        />
      </TouchableNativeFeedback>
      {/* 마케팅 정보 알림 가기 버튼 end*/}
      {/* 회원 탈퇴러 가기 버튼 start */}
      <TouchableNativeFeedback onPress={() => navigation.navigate('SignOut')}>
        <Image
          source={require('../../../assets/images/btn_to_sign_out.png')}
          style={{
            resizeMode: 'contain',
            width: width * 1,
            position: 'absolute',
            top: height * 0.39,
          }}
        />
      </TouchableNativeFeedback>
      {/* 회원 탈퇴하러 가기 버튼 startt */}
    </View>
  );
};

export default view;
