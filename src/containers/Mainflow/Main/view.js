import React, {useState} from 'react';
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

export default function Main({navigation}) {
  const [drawer, setDrawer] = useState(null);

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
        <TouchableOpacity
          onPress={() => navigation.navigate('TouchCon')}
        >
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
          // resizeMode: 'contain',
          // position: 'absolute',
          // top: height * 0.189,
          // backgroundColor: 'red',
          height: height * 0.15,
          // margin: 0,
        }}
      />
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../../../assets/images/stacking_back.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.9,
            // position: 'absolute',
            // top: height * 0.38,
            // right: width * 0.05,
            marginLeft: width * 0.05,
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
              top: height * 0.048,
              right: width * 0.05,
            }}
          />
        </TouchableOpacity>
      </View>
      <Image
        source={require('../../../assets/images/main_ad_text.png')}
        style={{
          resizeMode: 'contain',
          width: width * 0.9,
          height: height * 0.3,
          marginLeft: width * 0.05,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      {/* 터치 쇼핑몰 쇼핑하기 start */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Shopping')}
        style={{zIndex: 1,}}
      >
        <Image
          source={require('../../../assets/images/btn_shopping_plus.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.9,
            height: height * 0.1,
            marginLeft: width * 0.05,
          }}
        />
      </TouchableOpacity>
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
