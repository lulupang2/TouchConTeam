import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Navbar from '../../../components/Navbar/view';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const MegaMall = () => {
  return (
    <View>
      <Navbar />
      <View style={{height: height * 0.2}}></View>
      <View
        style={{
          alignItems: 'center',
          alignContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            width: width * 1,
          }}>
          <Image
            source={require('../../../assets/images/mega_mall_title.png')}
            style={{
              width: width * 0.25,

              resizeMode: 'contain',
            }}
          />
          <TouchableOpacity>
            <Image
              source={require('../../../assets/images/btn_go.png')}
              style={{
                width: width * 0.25,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>
        <Image
          source={require('../../../assets/images/mega_mall_explain.png')}
          style={{
            width: width * 0.7,
            resizeMode: 'contain',
          }}
        />
      </View>
      <Image
        source={require('../../../assets/images/mega_mall_bottom.png')}
        style={{
          width: width * 1,
          height: height * 1,
          resizeMode: 'contain',
        }}
      />
    </View>
  );
};

export default MegaMall;
