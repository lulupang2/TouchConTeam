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

const view = () => {
  return (
    <View>
      <Image
        source={require('../../../assets/images/tc_wallet_title.png')}
        style={{
          resizeMode: 'contain',
          width: width * 0.3,
          position: 'absolute',
          top: height * 0.02,
          right: width * 0.35,
        }}
      />
      <Image
        source={require('../../../assets/images/btn_back.png')}
        style={{
          resizeMode: 'contain',
          width: width * 0.1,
          position: 'absolute',
          top: height * 0.001,
          right: width * 0.85,
        }}
      />
      <TouchableOpacity>
        <Image
          source={require('../../../assets/images/btn_close_thum.png')}
          style={{
            resizeMode: 'contain',
            position: 'absolute',
            right: width * 0.05,
            top: height * 0.01,
            width: width * 0.1,
          }}
        />
      </TouchableOpacity>
      <ImageBackground
        source={require('../../../assets/images/btn_back.png')}
        style={{
          resizeMode: 'contain',
          width: width * 0.1,
          position: 'absolute',
          right: width * 0.85,
        }}>
        <Image
          source={require('../../../assets/images/tc_wallet_title.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.2,
            position: 'absolute',
            top: height * 0.45,
            right: width * 0.7,
          }}
        />
      </ImageBackground>
      <Image
        source={require('../../../assets/images/tc_btn_back.png')}
        style={{
          resizeMode: 'contain',
          width: width * 1,
          position: 'absolute',
          top: height * -0.05,
        }}
      />
      <Image
        source={require('../../../assets/images/tc_wallet_title.png')}
        style={{
          resizeMode: 'contain',
          width: width * 0.2,
          position: 'absolute',
          top: height * 0.45,
          right: width * 0.7,
        }}
      />
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
        <Image
          source={require('../../../assets/images/btn_touch_pay.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.2,
          }}
        />

        <Image
          source={require('../../../assets/images/btn_create_wallet.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.2,
          }}
        />

        <Image
          source={require('../../../assets/images/btn_ch_touchcon.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.2,
          }}
        />

        <Image
          source={require('../../../assets/images/btn_watch_scan.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.2,
          }}
        />
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
        <Image
          source={require('../../../assets/images/wallet_qr_code.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.4,
          }}
        />
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
        <Image
          source={require('../../../assets/images/btn_copy.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.25,
          }}
        />
        <View style={{width: width * 0.06}}></View>
        <Image
          source={require('../../../assets/images/btn_pass.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.25,
          }}
        />
      </View>
    </View>
  );
};

export default view;
