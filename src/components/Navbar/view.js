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
} from 'react-native';

const {width, height} = Dimensions.get('window');

const vw = width / 100;
const vh = height / 100;

export default function Navbar() {
  return (
    <SafeAreaView style={{width: width, height: height * 0.06}}>
      <ImageBackground
        source={require('../../assets/images/nav_back.png')}
        style={{
          width: width,
          height: height * 0.06,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/images/nav_logo.png')}
          style={{
            width: width * 0.35,
            height: height * 0.06,
            resizeMode: 'contain',
            marginLeft: width * 0.05,
          }}
        />
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/nav_ham.png')}
            style={{
              width: width * 0.15,
              height: height * 0.03,
              resizeMode: 'contain',
              marginLeft: width * 0.43,
            }}
          />
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
