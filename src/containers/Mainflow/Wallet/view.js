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
      <View
        style={{
          resizeMode: 'contain',
          position: 'absolute',
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
        <View style={{width: width * 0.24}}></View>
        <Image
          source={require('../../../assets/images/tc_wallet_title.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.3,
            padding: height * 0.045,
          }}
        />
        <View style={{width: width * 0.2}}></View>
        <TouchableOpacity>
          <Image
            source={require('../../../assets/images/btn_close_thum.png')}
            style={{
              resizeMode: 'contain',
              width: width * 0.1,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: 'absolute',
          top: height * 0.07,
          resizeMode: 'contain',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignSelf: 'center',
        }}>
        {/* 최상 color bar start */}
        <Image
          source={require('../../../assets/images/wallet_bar.png')}
          style={{
            resizeMode: 'contain',
            width: width * 1,
          }}
        />
        {/* 최상반 color bar end */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            position: 'relative',
            top: height * -0.07,
          }}>
          <View style={{width: width * 0.06}}></View>
          <Image
            source={require('../../../assets/images/qr_addr.png')}
            style={{
              resizeMode: 'contain',
              width: width * 0.9,
            }}
          />
        </View>
        {/* 지갑 주소 복사하기 버튼 start */}
        <TouchableOpacity>
          <Image
            source={require('../../../assets/images/btn_wallet_addr_cp.png')}
            style={{
              resizeMode: 'contain',
              width: width * 0.9,
              position: 'relative',
              right: width * -0.05,
              top: height * -0.16,
            }}
          />
        </TouchableOpacity>
        {/* 지갑 주소 복사하기 버튼 end */}
        <Image
          source={require('../../../assets/images/wallet_bar.png')}
          style={{
            resizeMode: 'contain',
            width: width * 1,
            position: 'relative',
            top: height * -0.18,
          }}
        />
        <Image
          source={require('../../../assets/images/tc_current.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.9,
            position: 'relative',
            top: height * -0.24,
            right: width * -0.05,
          }}
        />
        {/* 거래소 가기 버튼 start */}
        <TouchableOpacity>
          <Image
            source={require('../../../assets/images/btn_mv_exch.png')}
            style={{
              resizeMode: 'contain',
              width: width * 0.9,
              position: 'relative',
              right: width * -0.05,
              top: height * -0.33,
            }}
          />
        </TouchableOpacity>
        {/* 거래소 가기 버튼 end */}

        <Image
          source={require('../../../assets/images/ethereum_current.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.9,
            position: 'relative',
            top: height * -0.42,
            right: width * -0.05,
          }}
        />
      </View>
    </View>
  );
};

export default view;
