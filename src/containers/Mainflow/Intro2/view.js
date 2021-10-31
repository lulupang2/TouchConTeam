import React from 'react';
import {StyleSheet, Text, Image, ImageBackground} from 'react-native';
import TouchableNoFeedback from '../../../components/TouchableNoFeedback';

export default function Intro2({navigation}) {
  return (
    <TouchableNoFeedback onPress={() => navigation.navigate('Intro3')}>
      <ImageBackground
        source={require('../../../assets/images/intro2_back.png')}
        resizeMode="cover"
        style={{width: '100%', height: '100%'}}
      >
        <Image
          source={require('../../../assets/images/intro3_h2.png')}
          style={styles.h2}
        />
        <Text style={styles.content}>
          터치콘 브랜드 파트너에서 보내는 리워드콘을 획득하세요!
        </Text>
        <Text style={styles.content}>
          최소 10 코인부터, 최대 30만 코인까지, 랜덤 잭팟이 기다립니다. 10
          코인이상 당첨 확률 무려 100%!!!
        </Text>
        <Text style={styles.content}>
          리워드콘에 있는 QR코드를 확인하세요. 그리고 터치콘앱으로 스캔하세요.
          리워드콘은 “꽝”이 없습니다. 꾸준히 적립만 해도 목돈이 됩니다!!!
        </Text>
        <Image
          source={require('../../../assets/images/intro3_bottom.png')}
          style={{
            resizeMode: 'contain',
            width: '100%',
            height: 334,
            marginTop: 50,
          }}
        />
      </ImageBackground>
    </TouchableNoFeedback>
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
  },
});
