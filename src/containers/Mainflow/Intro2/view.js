import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

export default function Intro2() {
  return (
    <View style={styles.two_conatiner}>
      <Image
        source={require('../../../assets/images/pic2_2.png')}
        style={{
          marginTop: height * 0.1,
          height: height * 0.03,
          width: width * 0.24,
          resizeMode: 'contain',
        }}
      />
      <Image
        source={require('../../../assets/images/pic2_3.png')}
        style={{
          marginTop: height * 0.05,
          height: height * 0.1,
          width: width * 0.7,
          resizeMode: 'contain',
        }}
      />
      <Image
        source={require('../../../assets/images/pic2_1.png')}
        style={{
          height: height * 0.25,
          width: width * 0.6,
          resizeMode: 'contain',
        }}
      />
      <Image
        source={require('../../../assets/images/pic2_4.png')}
        style={{
          height: height * 0.05,
          width: width * 0.73,
          resizeMode: 'contain',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  two_conatiner: {
    width: width,
    height: height,
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
