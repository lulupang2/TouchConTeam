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
import {HeaderThickBottomLine} from '../../../components/HeaderBottomLine';

const view = () => {
  return (
    <View>
      <HeaderThickBottomLine />

      <LongButton
        text={'지갑 주소 복사하기'}
        tcStyle={styles.btn1}
        txStyle={{paddingTop: 10}}
      />
      <View style={styles.under}>
        <HeaderThickBottomLine />

        <Image
          source={require('../../../assets/images/tc_current.png')}
          style={{
            resizeMode: 'contain',
            width: 325,
            height: 124,
            alignSelf: 'center',
          }}
        />

        <LongButton
          text={'거래소 가기'}
          tcStyle={styles.btn2}
          txStyle={{paddingTop: 10}}
        />

        <Image
          source={require('../../../assets/images/tc_current.png')}
          style={{
            resizeMode: 'contain',
            width: 325,
            height: 124,
            alignSelf: 'center',
          }}
        />
      </View>
      {/* <HeaderThickBottomLine /> */}
    </View>
  );
};

export default view;

const styles = StyleSheet.create({
  btn1: {
    position: 'absolute',
    top: 230,
    alignSelf: 'center',
  },
  btn2: {
    position: 'relative',
    left: 30,
  },
  under: {
    position: 'absolute',
    top: 290,
    width: '100%',
    height: 350,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
