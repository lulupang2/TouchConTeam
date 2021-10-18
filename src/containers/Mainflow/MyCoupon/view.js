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

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const view = ({navigation}) => {
  return (
    <View>
      {/* ------배경 color 주황 start------ */}
      <Image
        source={require('../../../assets/images/my_cp_back_color.png')}
        style={{
          resizeMode: 'contain',
          width: width * 1,
          position: 'absolute',
          top: height * -0.08,
        }}
      />
      {/* ------배경 color 주황 end------ */}

      {/*------ < 내쿠폰 전환X 시작---- */}
      <View
        style={{
          resizeMode: 'contain',
          position: 'absolute',
          top: height * 0.03,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'center',
        }}>
        <TouchableOpacity>
          <Image
            source={require('../../../assets/images/btn_back.png')}
            style={{
              resizeMode: 'contain',
              width: width * 0.1,
            }}
          />
        </TouchableOpacity>
        <View style={{width: width * 0.3}}></View>
        <Image
          source={require('../../../assets/images/my_cp_title.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.1,
            padding: height * 0.045,
          }}
        />
        <View style={{width: width * 0.3}}></View>
        <TouchableOpacity onPress={() => navigation.popToTop()}>
          <Image
            source={require('../../../assets/images/btn_close_thum.png')}
            style={{
              resizeMode: 'contain',
              width: width * 0.1,
            }}
          />
        </TouchableOpacity>
      </View>
      {/*------ < 내 쿠폰 X 끝---- */}
      <View style={{display: 'flex', alignSelf: 'center'}}>
        <Image
          source={require('../../../assets/images/my_cp_scan.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.8,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.push('RandomSc')}
        style={{
          resizeMode: 'contain',
          width: width * 0.9,
          position: 'absolute',
          top: height * 0.75,
          right: width * 0.05,
        }}>
        <Image
          source={require('../../../assets/images/btn_now_scan.png')}
          style={{resizeMode: 'contain', width: width * 0.9}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default view;
