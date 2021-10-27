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
import {LongButton} from '../../../components/Botton';

const view = ({navigation}) => {
  return (
    <View>
      {/*------ < 내 쿠폰 X 끝---- */}
      <View style={{display: 'flex', alignSelf: 'center'}}>
        <Image
          source={require('../../../assets/images/my_cp_scan.png')}
          style={{
            resizeMode: 'contain',
            width: 300,
            height: 300,
            marginTop: 88,
          }}
        />
      </View>

      <LongButton text={'지금 스캔하기'} tcStyle={{marginTop: 93}} />
    </View>
  );
};

export default view;
