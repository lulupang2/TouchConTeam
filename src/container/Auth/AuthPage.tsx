import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import TouchableNoFeedback from '../../component/TouchableNoFeedback';

import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../util/ResponsiveSize';
import {StackParamList} from '../../RootStack';
import {LargeButton, LargeOutLineButton} from '../../component/UI/button';
type Props = NativeStackScreenProps<StackParamList, 'Auth'>;

function AuthPage({navigation}: Props) {
  return (
    <TouchableNoFeedback style={styles.flex}>
      <View style={styles.ContentsBox}>
        <View style={styles.TextBox}>
          <View>
            <Text style={styles.MainText}>{`소비에`}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.PointText}>{`스마트함`}</Text>
            <Text style={styles.MainText}>{`을`}</Text>
          </View>
          <View>
            <Text style={styles.MainText}>{`더하다.`}</Text>
          </View>
        </View>
        <View style={styles.IconBox}>
          <Image
            style={styles.decoImg}
            source={require('../../../assets/images/auth/deco_login.png')}
          />
        </View>
      </View>
      <View style={styles.ImageBox}>
        <Image
          source={require('../../../assets/images/auth/LoginImg.png')}
          style={{width: '100%'}}
          resizeMode="contain"
        />
      </View>
      <View style={styles.ButtonBox}>
        <LargeOutLineButton
          style={{flex: 1, marginVertical: 10}}
          title={'기존 회원 로그인'}
          color="#FA5C00"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <LargeButton
          onPress={() => {
            navigation.navigate('SignUp');
          }}
          color={'#FA5C00'}
          style={{flex: 1, marginVertical: 10}}
          title="터치콘 회원가입"
        />
      </View>
    </TouchableNoFeedback>
  );
}
const styles = StyleSheet.create({
  flex: {
    flex: 1,
    position: 'relative',
    padding: widthPercentage(30),
    backgroundColor: '#FFF',
  },
  ContentsBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextBox: {
    flex: 2,
    color: '#333',
  },
  MainText: {
    fontFamily: 'GmarketSansTTFBold',
    color: '#000000',
    fontSize: fontPercentage(30),
    letterSpacing: -3,
    lineHeight: heightPercentage(42),
  },
  PointText: {
    fontFamily: 'GmarketSansTTFBold',
    color: '#FA5C00',
    fontSize: fontPercentage(30),
  },
  IconBox: {
    flex: 1,
    justifyContent: 'flex-end',
    height: '100%',
  },
  decoImg: {
    resizeMode: 'contain',
    width: widthPercentage(143),
    alignSelf: 'flex-end',
    paddingVertical: heightPercentage(30),
  },
  ImageBox: {
    flex: 2,
    marginBottom: heightPercentage(60),
    justifyContent: 'center',
  },
  ButtonBox: {flex: 1},
  ButtonOutline: {
    borderColor: '#FA5C00',
    borderWidth: widthPercentage(1),
    margin: 0,
    padding: 0,
    fontFamily: 'GmarketSansTTFMedium',
    fontSize: fontPercentage(17),
    fontWeight: '400',
    height: heightPercentage(56),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: heightPercentage(15),
  },
  ButtonInline: {
    backgroundColor: '#FA5C00',
    fontFamily: 'GmarketSansTTFMedium',
    fontSize: fontPercentage(17),
    fontWeight: '400',
    height: heightPercentage(56),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default AuthPage;
