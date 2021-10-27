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
  TextInput,
} from 'react-native';
import {HeaderWalletBottomLine} from '../../../components/HeaderBottomLine';
import {LongButton} from '../../../components/Botton';
import {NormalLabel} from '../../../components/Label';

const view = () => {
  return (
    <View>
      <HeaderWalletBottomLine />
      <TextInput style={{borderWidth: 1, marginTop: 35}} />
      <LongButton
        text={'전환하기'}
        tcStyle={{
          marginTop: 35,
          marginLeft: 35,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <NormalLabel
        text={
          '[유의사항]\n' +
          '개인정보 입력에 유의해 주세요.\n' +
          '터치토큰 이외의 주소로는 공금되지 않아요.\n' +
          '터치토큰을 전송할 경우에는 이더리움 가스비가\n' +
          '필요합니다.\n' +
          '미리 이더리움을 충전해 놓으시길 바랍니다.'
        }
        style={{marginTop: 35, alignSelf: 'center'}}
      />
    </View>
  );
};

export default view;
