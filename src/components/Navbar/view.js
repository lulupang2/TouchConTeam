import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  SafeAreaView,
  TouchableNativeFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const vw = width / 100;
const vh = height / 100;

export default function Navbar() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{width: width, height: height * 0.06}}>
      {/* Navbar 바탕컬러 start */}
      <ImageBackground
        source={require('../../assets/images/nav_back.png')}
        style={{
          width: width,
          height: height * 0.06,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Image
          source={require('../../assets/images/nav_logo.png')}
          style={{
            width: width * 0.35,
            height: height * 0.06,
            resizeMode: 'contain',
            marginLeft: width * 0.05,
          }}
        />
        <TouchableNativeFeedback onPress={() => navigation.openDrawer()}>
          <Image
            source={require('../../assets/images/nav_ham.png')}
            style={{
              width: width * 0.15,
              height: height * 0.03,
              resizeMode: 'contain',
              marginLeft: width * 0.43,
            }}
          />
        </TouchableNativeFeedback>
      </ImageBackground>
      {/* Navbar 바탕컬러 end */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
