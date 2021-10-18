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
      {/* 타이틀 start */}
      <Image
        source={require('../../../assets/images/tc_conn_mana_title.png')}
        style={{
          resizeMode: 'contain',
          width: width * 1,
          position: 'absolute',
          top: height * 0.007,
        }}
      />
      {/* 타이틀 end */}

      {/* 터치콘 연결 관리 뒤로가기 버튼 start */}
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

      {/* 터치콘 연결 관리 뒤로가기 버튼 end */}

      {/*---calion button start---  */}
      <TouchableNativeFeedback onPress={() => navigation.navigate('Gift')}>
        <Image
          source={require('../../../assets/images/tc_mana_caolion_text.png')}
          style={{
            resizeMode: 'contain',
            width: width * 1,
            position: 'absolute',
            top: height * 0.09,
          }}
        />
      </TouchableNativeFeedback>

      <TouchableOpacity>
        <Image
          source={require('../../../assets/images/btn_con_mana.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.2,
            position: 'absolute',
            top: height * 0.075,
            right: width * 0.05,
          }}
        />
      </TouchableOpacity>
      {/*---calion button end---  */}

      {/*--- megam button start---  */}
      <Image
        source={require('../../../assets/images/tc_mana_megam_text.png')}
        style={{
          resizeMode: 'contain',
          width: width * 1,
          position: 'absolute',
          top: height * 0.17,
        }}
      />

      <TouchableOpacity>
        <Image
          source={require('../../../assets/images/btn_con_mana.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.2,
            position: 'absolute',
            top: height * 0.155,
            right: width * 0.05,
          }}
        />
      </TouchableOpacity>

      {/*--- megam button end---  */}

      {/*--- 안동국밥 button start---  */}
      <Image
        source={require('../../../assets/images/tc_mana_gukbab_text.png')}
        style={{
          resizeMode: 'contain',
          width: width * 0.17,
          height: height * 0.17,
          position: 'absolute',
          top: height * 0.2,
          right: width * 0.77,
        }}
      />

      <TouchableOpacity onPress={() => navigation.navigate('Gift')}>
        <Image
          source={require('../../../assets/images/btn_con_mana.png')}
          style={{
            resizeMode: 'contain',
            width: width * 0.2,
            position: 'absolute',
            top: height * 0.24,
            right: width * 0.05,
          }}
        />
      </TouchableOpacity>

      {/*--- 안동국밥 button end---  */}
    </View>
  );
};

export default view;
