import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';

export default function Intro2() {
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
          fontSize: 36,
          fontWeight: 'bold',
          marginLeft: 47,
        }}>
        터치콘에서 세로운 보상의 세계를 만나보세요!
      </Text>
    </ImageBackground>
  );
}
