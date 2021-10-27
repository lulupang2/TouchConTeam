import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

export default function Intro3({navigation}) {
  return (
    <ImageBackground
      source={require('../../../assets/images/intro2_back.png')}
      resizeMode="cover"
      style={{width: '100%', height: '100%'}}>
      <Image
        source={require('../../../assets/images/intro2_clover.png')}
        style={{resizeMode: 'contain'}}
      />
      <Text
        style={{
          color: '#FFFFFF',
          width: '50%',
          height: '30%',
          fontSize: 14,
          fontWeight: 'bold',
          marginLeft: 47,
        }}>
        터치콘 시스템은 특허등록 인증된 디지털 자산 전용 리워드 게임입니다.
        글로벌 브랜드 파트너가 드리는 리워드콘을 잊지말고 꼭 획득하세요! 터치콘
        얼라이언스 RAP 광고주와 함께 잭팟 행운의 주인공이 되세요!
      </Text>
      <Image
        source={require('../../../assets/images/intro4_bottom.png')}
        style={{resizeMode: 'contain', width: '100%', height: '50%'}}
      />
    </ImageBackground>
  );
}
