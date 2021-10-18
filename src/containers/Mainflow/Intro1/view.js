import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  StatusBar,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

export default function Intro1() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Image
        source={require('../../../assets/images/group28.png')}
        style={{
          marginTop: height * 0.1,
          height: height * 0.03,
          width: width * 0.24,
          resizeMode: 'contain',
        }}
      />
      <Image
        source={require('../../../assets/images/touch_reward.png')}
        style={{
          marginTop: height * 0.05,
          height: height * 0.1,
          width: width * 0.7,
          resizeMode: 'contain',
        }}
      />
      <Image
        source={require('../../../assets/images/logo_o.png')}
        style={{
          height: height * 0.25,
          width: width * 0.25,
          resizeMode: 'contain',
        }}
      />
      <Image
        source={require('../../../assets/images/random_reward.png')}
        style={{
          height: height * 0.03,
          width: width * 0.3,
          resizeMode: 'contain',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
