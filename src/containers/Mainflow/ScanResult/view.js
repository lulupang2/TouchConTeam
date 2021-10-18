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
  TouchableNativeFeedback,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const view = ({navigation}) => {
  return (
    <View>
      {/* 축하합니다! 배경화면 start */}
      <View
        style={{
          position: 'absolute',
          top: height * -0.05,
          right: width * 0.05,
        }}>
        <Image
          source={require('../../../assets/images/sc_result_background.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.9,
            height: height * 0.65,
          }}
        />
        {/* 축하합니다. 배경확면 end */}

        {/* 적립하기 버튼 start */}
        <TouchableNativeFeedback>
          <Image
            source={require('../../../assets/images/btn_sc_result_save.png')}
            style={{
              resizeMode: 'contain',
              width: width * 0.8,
              height: height * 0.1,
              position: 'relative',
              top: height * -0.15,
              right: width * -0.05,
            }}
          />
        </TouchableNativeFeedback>
        {/* 적립하기 버튼 end */}
      </View>

      {/* 화면 닫기 버튼 start */}
      <TouchableNativeFeedback onPress={() => navigation.popToTop()}>
        <Image
          source={require('../../../assets/images/btn_close_thum.png')}
          style={{
            resizeMode: 'contain',
            position: 'absolute',
            right: width * 0.1,
            width: width * 0.1,
          }}
        />
      </TouchableNativeFeedback>
      {/* 화면 닫기 버튼 end */}

      {/* 현재 적립액 start */}
      <Image
        source={require('../../../assets/images/sc_result_save_money.png')}
        style={{
          resizeMode: 'contain',
          position: 'absolute',
          width: width * 0.7,
          top: height * 0.55,
          right: width * 0.14,
        }}
      />
      {/* 현재 적립액 end */}

      {/* 나의 지갑가기 버튼 start */}
      <TouchableNativeFeedback onPress={() => navigation.push('Wallet')}>
        <Image
          source={require('../../../assets/images/btn_wallet_go.png')}
          style={{
            resizeMode: 'contain',
            position: 'absolute',
            right: width * 0.1,
            width: width * 0.75,
            top: height * 0.8,
            right: width * 0.12,
          }}
        />
      </TouchableNativeFeedback>

      {/* 나의 지갑 버튼 end*/}
    </View>
  );
};

export default view;
