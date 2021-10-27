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
import {LongButton} from '../../../components/Botton';

export default function Intro3({navigation}) {
  return (
    <ImageBackground
      source={require('../../../assets/images/intro2_back.png')}
      resizeMode="cover"
      style={{width: '100%', height: '100%'}}
    >
      <Image
        source={require('../../../assets/images/intro4_h2.png')}
        style={styles.h2}
      />
      <Text style={styles.content}>
        터치콘 시스템은 특허등록 인증된 디지털 자산 전용 리워드 게임입니다.
      </Text>
      <Text style={styles.content}>
        글로벌 브랜드 파트너가 드리는 리워드콘을 잊지말고 꼭 획득하세요!
      </Text>
      <Text style={styles.content}>
        터치콘 얼라이언스 RAP 광고주와 함께 잭팟 행운의 주인공이 되세요!
      </Text>
      <Text style={styles.h3}>Anyone, Anytime, Anywhere</Text>

      {/* 하단 이미지 부분 */}
      {/* <Image
        source={require('../../../assets/images/intro4_bottom.png')}
        style={{
          resizeMode: 'contain',
          width: '100%',
          position: 'relative',
          top: 500,
        }}
      /> */}

      <LongButton text={'시작하기'} tcStyle={styles.btn} txStyle={styles.tx} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  h2: {
    resizeMode: 'contain',
    width: '80%',
    alignSelf: 'center',
    position: 'relative',
    top: -20,
  },
  content: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center',
    width: 262,
    position: 'relative',
    top: -30,
  },
  h3: {
    width: 245,
    height: 18,
    alignSelf: 'center',
    color: '#ffffff',
    marginTop: 40,
    fontSize: 18,
    position: 'relative',
    top: -50,
  },
  btn: {
    position: 'relative',
    top: 270,
    left: 60,
  },
  tx: {paddingTop: 10},
});
