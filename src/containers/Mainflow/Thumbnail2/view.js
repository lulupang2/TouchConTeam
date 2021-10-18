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
      <View style={{flexDirection: 'row'}}>
        <View style={{width: width * 0.88}}></View>
        {/*  플렉스 or 상위 view에 의해서 버튼 적용이 되지 않는다. 확인 필요 start*/}
        <TouchableNativeFeedback onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../assets/images/btn_close_thum.png')}
            style={{
              resizeMode: 'contain',
              width: width * 0.1,
            }}
          />
        </TouchableNativeFeedback>
        {/*  플렉스 or 상위 view에 의해서 버튼 적용이 되지 않는다. 확인 필요 end*/}
      </View>
      <Image
        source={require('../../../assets/images/thumbnail2.png')}
        style={{
          resizeMode: 'contain',
          width: width * 1,
          position: 'absolute',
          top: height * 0.01,
        }}
      />

      <TouchableOpacity>
        <Image
          source={require('../../../assets/images/btn_attend.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.8,
            position: 'absolute',
            top: height * 0.16,
            right: width * 0.1,
          }}
        />
      </TouchableOpacity>

      <Image
        source={require('../../../assets/images/count_attend_text.png')}
        style={{
          resizeMode: 'contain',
          width: width * 0.3,
          position: 'absolute',
          top: height * 0.4,
          right: width * 0.35,
        }}
      />

      <Image
        source={require('../../../assets/images/thumnail_calendar.png')}
        style={{
          resizeMode: 'contain',
          width: width * 0.9,
          position: 'absolute',
          top: height * 0.3,
          right: width * 0.05,
        }}
      />
    </View>
  );
};

export default view;
