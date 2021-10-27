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

      {/* 지금 스캔하기 버튼 start */}
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
      {/* 지금 스캔하기 버튼 end */}
    </View>
  );
};

export default view;
