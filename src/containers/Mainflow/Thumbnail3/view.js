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
        source={require('../../../assets/images/thumbnail3.png')}
        style={{
          resizeMode: 'contain',
          width: width * 1,
          position: 'absolute',
          top: height * 0.01,
        }}
      />
      <Image
        source={require('../../../assets/images/stacking_back.png')}
        style={{
          resizeMode: 'contain',
          width: width * 0.9,
          position: 'absolute',
          top: height * 0.23,
          right: width * 0.05,
        }}
      />
      <TouchableOpacity>
        <Image
          source={require('../../../assets/images/btn_stacking.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.2,
            height: height * 0.04,
            position: 'absolute',
            top: height * 0.19,
            right: width * 0.05,
          }}
        />
      </TouchableOpacity>

      <Image
        source={require('../../../assets/images/stacking_title.png')}
        style={{
          resizeMode: 'contain',
          width: width * 1,
          height: height * 0.05,
          position: 'absolute',
          top: height * 0.35,
          right: width * 0.25,
        }}
      />
      <TouchableOpacity>
        <Image
          source={require('../../../assets/images/stacking_text.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.9,
            position: 'absolute',
            top: height * 0.2,
            right: width * 0.05,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default view;
