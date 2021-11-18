import React, {useState, useEffect} from 'react';
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
import {NormalLabel} from '../../../components/Label';
import BottomButton from '../../../components/BottomButton';
import RowView from '../../../components/RowView';
import Touchable from '../../../components/Touchable';
import AntDesign from 'react-native-vector-icons/AntDesign';

const view = ({navigation}) => {
  const [ponit, setPonit] = useState('10000.11');

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Touchable onPress={() => navigation.navigate('Main')} style={{}}>
          <AntDesign
            name="close"
            size={26}
            color={'#000'}
            style={{
              padding: 4,
              alignSelf: 'center',
              color: '#c4c4c4',
              paddingRight: 16,
            }}
          />
        </Touchable>
      ),
    });
  }, []);

  return (
    <View>
      <View style={styles.back}>
        <Text style={styles.tx1}>나의 현재 터치콘</Text>
        <View style={styles.point}>
          <Image
            source={require('../../../assets/icons/coin_icon.png')}
            style={{
              width: 80,
              height: 79,
            }}
          />
          <Text style={styles.tx2}>{ponit}</Text>
          <Image
            source={require('../../../assets/images/tx_touch.png')}
            style={{
              width: 91,
              height: 28,
            }}
          />
        </View>
      </View>

      <RowView
        style={{
          borderWidth: 0.8,
          marginTop: 35,
          borderColor: '#c4c4c4',
          marginHorizontal: 24,
        }}
      >
        <TextInput
          placeholder="    수량"
          style={{width: 205}}
          keyboardType="number-pad"
        />
        {/* Inputext 내의 Touch 글자 */}
        <Image
          source={require('../../../assets/images/signup_touch_text.png')}
          resizeMode="contain"
          style={{width: 89, height: 19, marginHorizontal: 19}}
        />
      </RowView>

      <BottomButton text={'터치콘 전환'} style={{marginVertical: 32}} />
      {/* <LongButton
        text={'전환하기'}
        tcStyle={{
          marginTop: 35,
          marginLeft: 35,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      /> */}
      <NormalLabel
        text={
          '[유의사항]\n' +
          '●  개인정보 입력에 유의해 주세요.\n' +
          '●  터치토큰 이외의 주소로는 공금되지 않아요.\n' +
          '●  터치토큰을 전송할 경우에는 이더리움 가스비가\n' +
          '    필요합니다.\n' +
          '    미리 이더리움을 충전해 놓으시길 바랍니다.'
        }
        style={{marginTop: 35, alignSelf: 'center', color: '#FD7F36'}}
      />
    </View>
  );
};

export default view;

const styles = StyleSheet.create({
  back: {
    // width: 390,
    // height: 230,
    minHeight: 230,
    backgroundColor: '#FD7F36',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
  },
  tx1: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 37,
    marginLeft: 23,
  },
  tx2: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
  },
  point: {
    marginHorizontal: 22,
    height: 97,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 47,
    borderColor: '#ffffff',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
