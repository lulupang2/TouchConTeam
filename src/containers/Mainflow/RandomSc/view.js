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
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'center',
          justifyContent: 'space-between',
          position: 'absolute',
          top: height * 0.1,
        }}>
        <Image
          source={require('../../../assets/images/random_sc.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.5,
            position: 'relative',
            top: height * -0.05,
            right: width * -0.15,
          }}
        />
        {/* -------- 1회 스캔한 큐알코드는~~~ start ------- */}
        <Image
          source={require('../../../assets/images/random_sc_bottom.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.8,
            position: 'relative',
            top: height * -0.15,
          }}
        />
      </View>
      {/* -------- 1회 스캔한 큐알코드는~~~ end ------- */}

      {/* ------------- 외부, 내부, History 버튼 시작--------- */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignSelf: 'center',
          justifyContent: 'space-between',
          position: 'absolute',
          top: height * 0.7,
        }}>
        <TouchableOpacity>
          <Image
            source={require('../../../assets/images/btn_random_sc_out.png')}
            style={{
              resizeMode: 'contain',
              width: width * 0.2,
            }}
          />
          <View
            style={{
              width: width * 0.25,
            }}></View>
        </TouchableOpacity>
        <Image
          source={require('../../../assets/images/random_bar.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.008,
            marginTop: height * 0.1,
          }}
        />
        <View
          style={{
            width: width * 0.05,
          }}></View>
        <TouchableOpacity>
          <View
            style={{
              width: width * 0.25,
            }}></View>
          <Image
            source={require('../../../assets/images/btn_random_sc_in.png')}
            style={{
              resizeMode: 'contain',
              width: width * 0.2,
            }}
          />
        </TouchableOpacity>
        <Image
          source={require('../../../assets/images/random_bar.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.008,
            marginTop: height * 0.1,
          }}
        />
        <View
          style={{
            width: width * 0.05,
          }}></View>
        <TouchableOpacity onPress={() => navigation.navigate('ScanHistory')}>
          <Image
            source={require('../../../assets/images/btn_random_sc_hi.png')}
            style={{
              resizeMode: 'contain',
              width: width * 0.2,
            }}
          />
        </TouchableOpacity>
      </View>
      {/* ------------- 외부, 내부, History 버튼 끝--------- */}
    </View>
  );
};

export default view;
