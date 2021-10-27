import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  SafeAreaView,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const view = ({navigation}) => {
  return (
    <View>
      <Image
        source={require('../../../assets/images/tc_story_title.png')}
        style={{
          resizeMode: 'contain',
          width: width * 1,
          position: 'absolute',
          top: height * 0.007,
        }}
      />
      {/* 터치콘 이야기 뒤로기가 버튼 start */}
      <TouchableNativeFeedback onPress={() => navigation.goBack()}>
        <Image
          source={require('../../../assets/images/btn_back.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.1,
            position: 'absolute',
            right: width * 0.85,
          }}
        />
      </TouchableNativeFeedback>
      {/* 터치콘 이야기 뒤로가기 버튼 end */}

      <Image
        source={require('../../../assets/images/tc_story_explain.png')}
        style={{
          resizeMode: 'contain',
          width: width * 0.7,
          position: 'absolute',
          right: width * 0.15,
          top: height * -0.4,
        }}
      />
    </View>
  );
};

export default view;
