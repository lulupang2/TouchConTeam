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
      <View style={{flexDirection: 'row'}}>
        <View style={{width: width * 0.88}}></View>
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
      <Image
        source={require('../../../assets/images/thumbnail4.png')}
        style={{
          resizeMode: 'contain',
          width: width * 1,
          position: 'absolute',
          top: height * 0.01,
        }}
      />
      <Image
        source={require('../../../assets/images/thumb4_line1.png')}
        style={{
          resizeMode: 'contain',
          width: width * 0.9,
          position: 'absolute',
          top: height * 0.2,
          right: width * 0.05,
        }}
      />
      <Image
        source={require('../../../assets/images/thumb4_line2.png')}
        style={{
          resizeMode: 'contain',
          width: width * 0.9,
          position: 'absolute',
          top: height * 0.4,
          right: width * 0.05,
        }}
      />
    </View>
  );
};

export default view;
