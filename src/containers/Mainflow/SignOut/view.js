import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import BottomButton from '../../../components/BottomButton';
import {LongButton} from '../../../components/Botton';
import HeaderBottomLine from '../../../components/HeaderBottomLine';
import {NormalLabel} from '../../../components/Label';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';

const view = ({navigation}) => {
  return (
    <WhiteSafeAreaView>
      <HeaderBottomLine />
      <Text style={styles.SubTilte}>탈퇴하시겠습니까?</Text>
      <NormalLabel
        style={{paddingVertical: 30, paddingHorizontal: 23}}
        text={
          '1. 서비스를 탈퇴하면 월렛에 보유한 모든 터치 토\n' +
          '    큰의 권한이 소멸되어 복구가 되지 않습니다.\n' +
          '\n' +
          '2. 서비스를 탈퇴하면 스테이킹에 참여한 터치토큰\n' +
          '    을 비롯한 모든 권한 및 정보가 소멸되어 복구가\n' +
          '    불가능합니다.\n' +
          '\n' +
          '3. 탈퇴를 인한 모든 정보는 재가입을 해도 복구되\n' +
          '    지 않습니다. 만약 탈퇴를 하실 경우에는 사전에\n' +
          '    모든 자산에 대한 사용,전송 등을 하신 후에 탈\n' +
          '    퇴하시기를 권장합니다.\n' +
          '\n' +
          '4. 본인의 탈퇴로 인해 모든 권한과 서비스는 종료\n' +
          '    및 소멸되어니 이 점 참고하시어 신중히 결정하\n' +
          '    시기 바랍니다.'
        }
      />
      <Text>마크기능 필요</Text>

      <BottomButton text={'탈퇴하기'} style={{marginTop: 150}} />

      {/* <LongButton
        text={'탈퇴하기'}
        tcStyle={{marginLeft: 60, position: 'absolute', top: 550}}
        txStyle={{paddingTop: 10}}
      /> */}
    </WhiteSafeAreaView>
  );
};

const styles = StyleSheet.create({
  SubTilte: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 28,
    marginLeft: 20,
  },
});

export default view;
