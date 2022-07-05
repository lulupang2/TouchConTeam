import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {heightPercentage, widthPercentage} from '../../util/ResponsiveSize';

export default function SignUpSuccess() {
  return (
    <View style={styles.Container}>
      <Text style={styles.TitleText}>WELCOME!!</Text>
      <Text style={styles.SubText}>회원가입이 완료되었습니다.</Text>
      <Text style={styles.SubText}>터치콘 함께 스마트한 소비를</Text>
      <Text style={styles.SubText}>경험해 보세요!</Text>
      <View style={styles.ImageBox}>
        <Image
          style={styles.MainImage}
          source={require('../../../assets/images/auth/SignUpWelcome.png')}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  TextBox: {},
  TitleText: {
    fontFamily: 'GmarketSansTTFBold',
    fontSize: 28,
    color: '#000',
  },
  SubText: {
    fontFamily: 'GmarketSansTTFMedium',
    fontSize: 13,
    color: '#000',
  },
  ImageBox: {width: widthPercentage(320), alignItems: 'center'},
  MainImage: {
    resizeMode: 'contain',
    height: heightPercentage(320),
  },
});
