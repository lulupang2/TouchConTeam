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
      {/*------ < 터치콘 전환 X 시작---- */}
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
          source={require('../../../assets/images/tc_ch_title.png')}
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
      {/*------ < 터치콘 전환 X 끝---- */}
      <View
        style={{
          resizeMode: 'contain',
          position: 'absolute',
          top: height * -0.07,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignSelf: 'center',
        }}>
        <Image
          source={require('../../../assets/images/tc_ch_background.png')}
          style={{
            resizeMode: 'contain',
            width: width * 1,
          }}
        />
        <Image
          source={require('../../../assets/images/tc_ch_post.png')}
          style={{
            resizeMode: 'contain',
            width: width * 1,
            position: 'relative',
            top: height * -0.13,
          }}
        />
        {/* 전환하기 버튼 start */}
        <TouchableOpacity>
          <Image
            source={require('../../../assets/images/btn_exchange.png')}
            style={{
              resizeMode: 'contain',
              width: width * 0.9,
              position: 'relative',
              top: height * -0.14,
              right: width * -0.05,
            }}
          />
        </TouchableOpacity>
        {/* 전환하기 버튼 end */}
        <Image
          source={require('../../../assets/images/signup_caution.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.8,
            position: 'relative',
            top: height * -0.18,
            right: width * -0.08,
          }}
        />
      </View>
    </View>
  );
};

export default view;
