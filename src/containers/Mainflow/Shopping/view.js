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
        source={require('../../../assets/images/shopping_title.png')}
        style={{
          resizeMode: 'contain',
          width: width * 1,
        }}
      />

      <Image
        source={require('../../../assets/images/btn_close_thum.png')}
        style={{
          resizeMode: 'contain',
          width: width * 0.1,
          position: 'absolute',
          top: height * 0.001,
          right: width * 0.05,
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
      <View
        style={{display: 'flex', flexDirection: 'row', alignSelf: 'center'}}>
        <Image
          source={require('../../../assets/images/shopping_val.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.4,
          }}
        />
        <View
          style={{
            width: width * 0.05,
          }}></View>
        <Image
          source={require('../../../assets/images/shopping_val.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.4,
          }}
        />
      </View>

      <TouchableOpacity>
        <Image
          source={require('../../../assets/images/btn_add.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.9,
            position: 'absolute',
            height: height * 0.7,
            right: width * 0.05,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default view;
