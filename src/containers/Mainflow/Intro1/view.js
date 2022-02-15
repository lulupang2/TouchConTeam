import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  Alert,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import api from '../../../api';
import TouchableNoFeedback from '../../../components/TouchableNoFeedback';

const {height} = Dimensions.get('window');

export default function Intro1({navigation}) {
  return (
    <SafeAreaView>
      <TouchableNoFeedback onPress={() => navigation.navigate('Intro2')}>
        <ImageBackground
          source={require('../../../assets/images/intro2_back.png')}
          resizeMode="cover"
          style={{width: '100%', height: '100%'}}>
          <Image
            source={require('../../../assets/images/intro2_h2.png')}
            style={styles.h2}
          />
          <Text
            style={{
              color: '#FFFFFF',
              width: '100%',
              height: 225,
              fontSize: 36,
              fontWeight: 'bold',
              marginLeft: 47,
              position: 'relative',
            }}>
            {'터치콘에서\n랜덤 보상의 세계를 \n만나보세요!'}
          </Text>
          <Text
            style={{
              color: '#FFFFFF',
              width: '100%',
              fontSize: 14,
              fontWeight: 'bold',
              position: 'absolute',
              zIndex: 3,
              top: 300,
              right: -50,
            }}>
            글로벌 최초 디지털 자산 랜덤 리워드 - 터치콘
          </Text>

          <Image
            source={require('../../../assets/images/intro2_cat.png')}
            style={styles.cat}
          />
        </ImageBackground>
      </TouchableNoFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cat: {
    resizeMode: 'contain',
    width: '100%',
    height: height * 0.555,
    alignSelf: 'center',
  },
  h2: {
    resizeMode: 'contain',
    width: '80%',
    alignSelf: 'center',
    position: 'relative',
    top: -2,
  },
});
