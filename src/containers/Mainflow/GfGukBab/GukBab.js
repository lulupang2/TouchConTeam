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
import Navbar from '../../../components/Navbar/view';
import Swiper from 'react-native-swiper';

const {width, height} = Dimensions.get('window');

const vw = width / 100;
const vh = height / 100;

const GukBab = () => {
  return (
    <View>
      <Navbar />

      <View style={{height: height * 0.2}}></View>
      <View
        style={{
          alignItems: 'center',
          alignContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            width: width * 1,
          }}>
          <Image
            source={require('../../../assets/images/gukbab_title.png')}
            style={{
              width: width * 0.5,
              resizeMode: 'contain',
            }}
          />
          <TouchableOpacity>
            <View>
              <Image
                source={require('../../../assets/images/btn_go.png')}
                style={{
                  width: width * 0.25,
                  resizeMode: 'contain',
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Image
          source={require('../../../assets/images/gukbab_explain.png')}
          style={{
            width: width * 0.7,
            resizeMode: 'contain',
          }}
        />
      </View>
    </View>
  );
};

export default GukBab;
