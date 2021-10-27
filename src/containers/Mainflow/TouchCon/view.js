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
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const view = () => {
  return (
    <WhiteSafeAreaView>
      <HeaderBottomLine />
      {/* 상단 배경 start  */}
      <Image
        source={require('../../../assets/images/tc_btn_back.png')}
        style={{
          resizeMode: 'contain',
          width,
        }}
      />
      {/* 상단 배경 end */}

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          position: 'absolute',
          top: height * 0.25,
          justifyContent: 'space-around',
          alignSelf: 'center',
          width: width * 0.94,
        }}>
        {/* Touch 결제 start */}
        <Image
          source={require('../../../assets/images/btn_touch_pay.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.2,
          }}
        />

        {/* Touch 결제 end */}
        {/* 지갑생성 start*/}

        <Image
          source={require('../../../assets/images/btn_create_wallet.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.2,
          }}
        />
        {/* 지갑생성 end */}
        {/* 터치콘 전환 start */}
        <Image
          source={require('../../../assets/images/btn_ch_touchcon.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.2,
          }}
        />
        {/* 터치콘 전환 end */}

        {/* 스캔보기 start */}
        <Image
          source={require('../../../assets/images/btn_watch_scan.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.2,
          }}
        />
        {/* 스캔보기 end */}
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          position: 'absolute',
          top: height * 0.37,

          justifyContent: 'space-around',
          alignSelf: 'center',
        }}>
        <View
          style={{
            width: width * 0.5,
          }}></View>

        {/* 가운데 qr 이미지 start */}
        <Image
          source={require('../../../assets/images/wallet_qr_code.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.4,
          }}
        />
        {/* 가운데 qr 이미지 start */}
        <View
          style={{
            width: width * 0.5,
          }}></View>
      </View>

      <Image
        source={require('../../../assets/images/qr_num.png')}
        style={{
          resizeMode: 'contain',
          position: 'absolute',
          height: height * 1.6,
          width: width * 1,
        }}
      />

      <View
        style={{
          position: 'absolute',
          top: height * 0.83,
          display: 'flex',
          flexDirection: 'row',
          alignSelf: 'center',
        }}>
        {/* bottom 복사 버튼 start */}
        <Image
          source={require('../../../assets/images/btn_copy.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.25,
          }}
        />
        {/* bottom 복사 버튼 end */}
        <View style={{width: width * 0.06}}></View>

        {/* bottom 전달 버튼 start */}
        <Image
          source={require('../../../assets/images/btn_pass.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.25,
          }}
        />
        {/* bottom 전달 버튼 end */}
      </View>
    </WhiteSafeAreaView>
  );
};

export default view;
