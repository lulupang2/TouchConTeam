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
import Navbar from '../../../components/Navbar/view';
import Swiper from 'react-native-swiper';

const {width, height} = Dimensions.get('window');

const vw = width / 100;
const vh = height / 100;

export default function Main() {
  return (
    <View>
      <Navbar />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: width,
          height: height * 0.16,
        }}>
        <TouchableOpacity>
          <Image
            source={require('../../../assets/images/touch_wallet.png')}
            style={{
              width: width * 0.6,
              height: height * 0.16,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../../assets/images/scan.png')}
            style={{
              width: width * 0.24,
              height: height * 0.24,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
      </View>

      <ImageBackground
        source={require('../../../assets/images/bulletin.png')}
        style={{width: width, height: height * 0.035}}>
        {/* 공지 글 들어올 자리 */}
      </ImageBackground>
      {/* 이벤트 스와이프 */}
      <Image
        source={require('../../../assets/images/main_swpe.png')}
        style={{
          width: width * 1,
          resizeMode: 'contain',
          position: 'absolute',
          top: height * 0.189,
        }}
      />
      <Image
        source={require('../../../assets/images/stacking_back.png')}
        style={{
          resizeMode: 'contain',
          width: width * 0.9,
          position: 'absolute',
          top: height * 0.38,
          right: width * 0.05,
        }}
      />
      <TouchableOpacity>
        <Image
          source={require('../../../assets/images/btn_stacking.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.2,
            height: height * 0.04,
            position: 'absolute',
            top: height * 0.175,
            right: width * 0.05,
            zIndex: 10,
          }}
        />
      </TouchableOpacity>

      <Image
        source={require('../../../assets/images/main_ad_text.png')}
        style={{
          resizeMode: 'contain',
          width: width * 0.9,
          height: height * 0.5,
          position: 'absolute',
          top: height * 0.4,
          right: width * 0.05,
        }}
      />
      <Image
        source={require('../../../assets/images/main_ad_text.png')}
        style={{
          resizeMode: 'contain',
          width: width * 0.9,
          height: height * 0.5,
          position: 'absolute',
          top: height * 0.4,
          right: width * 0.05,
        }}
      />
      <Image
        source={require('../../../assets/images/btn_shopping_plus.png')}
        style={{
          resizeMode: 'contain',
          width: width * 0.9,
          height: height * 0.5,
          position: 'absolute',
          top: height * 0.6,
          right: width * 0.05,
        }}
      />
      <Image
        source={require('../../../assets/images/main_bottom.png')}
        style={{
          resizeMode: 'contain',
          width: width * 1,
          height: height * 0.5,
          position: 'absolute',
          top: height * 0.716,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
