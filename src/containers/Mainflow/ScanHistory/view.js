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
import HeaderBottomLine from '../../../components/HeaderBottomLine';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const view = () => {
  return (
    <View>
      <HeaderBottomLine />
      <View
        style={{
          resizeMode: 'contain',
          position: 'absolute',
          top: height * 0.09,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignSelf: 'center',
        }}
      >
        <Image
          source={require('../../../assets/images/tc_hi_under_bar.png')}
          style={{
            resizeMode: 'contain',
            width: width * 1,
          }}
        />
        {/*---------- 스캔 보기 리스트 시작------------ */}
        <Image
          source={require('../../../assets/images/sc_hi_list.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.9,
            position: 'absolute',
            top: height * -0.2,
            right: width * 0.05,
          }}
        />
        {/*---------- 스캔 보기 리스트 끝------------ */}
      </View>
    </View>
  );
};

export default view;
