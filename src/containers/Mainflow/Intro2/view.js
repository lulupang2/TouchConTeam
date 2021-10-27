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
      style={{width: '100%', height: '100%'}}
    >
      <Image
        source={require('../../../assets/images/intro2_h2.png')}
        style={styles.h2}
      />
      <Text
        style={{
          color: '#FFFFFF',
          width: 200,
          height: 225,
          fontSize: 36,
          fontWeight: 'bold',
          marginLeft: 47,
          position: 'relative',
          top: -50,
        }}
      >
        터치콘에서 세로운 보상의 세계를 만나보세요!
      </Text>
      <Image
        source={require('../../../assets/images/intro2_cat.png')}
        style={styles.cat}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  cat: {
    resizeMode: 'contain',
    width: '100%',
    height: 384,
    alignSelf: 'center',
    position: 'relative',
    top: -60,
  },
  h2: {
    resizeMode: 'contain',
    width: '80%',
    alignSelf: 'center',
    position: 'relative',
    top: -20,
  },
});
