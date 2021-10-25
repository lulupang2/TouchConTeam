import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
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
        }}
      >
        {/* 최상단 터치콘 박스 로고와 함께 있음 start */}
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
        {/* 최상단 터치콘 박스 로고와 함께 있음 end */}

        {/* 우측 스켄 이미지 start */}
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
        {/* 우측 스켄 이미지 end*/}
      </View>

      <ImageBackground
        source={require('../../../assets/images/bulletin.png')}
        style={{width: width, height: height * 0.035}}
      >
        {/* 공지 글 들어올 자리 */}

        <Text style={{textAlign: 'center', fontWeight: '900'}}>
          [공지] 신규 광고주 제휴안내 2021.04.20
        </Text>
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
      {/* 터치 쇼핑몰 쇼핑하기 start */}
      <TouchableNativeFeedback>
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
      </TouchableNativeFeedback>
      {/* 터치 쇼핑몰 쇼핑하기 end */}

      {/* 최하단 : 나의 리워드 text start */}
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
      {/* 최하단 : 나의 리워드 text */}
    </View>
  );
}

const styles = StyleSheet.create({});
