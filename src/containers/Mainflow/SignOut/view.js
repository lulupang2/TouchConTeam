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
import RowView from '../../../components/RowView';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';

const view = ({navigation}) => {
  const [mark, setMark] = useState(true);

  const chMark = () => {
    if (mark === false) {
      setMark(true);
    } else {
      setMark(false);
    }
    return mark;
  };

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

      <RowView
        style={{
          borderWidth: 1,
          minHeight: 40,
          minWidth: 230,
          marginLeft: 21,
          marginRight: 51,
          borderColor: '#c4c4c4',
          padding: 11,
        }}>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 20,
            color: '#000',
            marginLeft: 16,
            fontWeight: 'blod',
          }}>
          위 사항에 모두 동의 합니다.
        </Text>
        <TouchableOpacity
          onPress={() => {
            chMark();
          }}>
          {mark ? (
            <Image
              source={require('../../../assets/images/square.png')}
              resizeMode="contain"
              style={{
                width: 18,
                height: 18,
                marginLeft: 40,
              }}
            />
          ) : (
            <Image
              source={require('../../../assets/images/chk_square.png')}
              resizeMode="contain"
              style={{
                width: 18,
                height: 18,
                marginLeft: 40,
              }}
            />
          )}
        </TouchableOpacity>
      </RowView>

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
