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
  Alert,
} from 'react-native';
import {HeaderWalletBottomLine} from '../../../components/HeaderBottomLine';
import {NormalLabel} from '../../../components/Label';
import BottomButton from '../../../components/BottomButton';
import RowView from '../../../components/RowView';
import Touchable from '../../../components/Touchable';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Type} from 'react-native/ReactCommon/hermes/inspector/tools/msggen/src/Type';
import api from '../../../api';
import {useDispatch, useSelector} from 'react-redux';

const PointCh = ({navigation, route}) => {
  const [ponit, setPonit] = useState('10000.11');
  const [tokens, onChangetokens] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  let coins = route.params.coins;
  {
    console.log('lfkasjfk', route);
  }

  const ChangeTokenToPoint = () => {
    if (0 > parseInt(tokens)) {
      Alert.alert('0보다 큰 숫자를 입력해주세요');
      return;
    }
    if (0 === parseInt(tokens) || 0 > parseInt(tokens)) {
      Alert.alert('0보다 큰 숫자를 입력해주세요');
      return;
    }
    if (parseInt(coins.TouchCon) < parseInt(tokens)) {
      Alert.alert('보유하신 터치콘 토큰을 초과 할 수없습니다 ');
      return;
    }
    if (parseInt(coins.TouchCon) > parseInt(tokens)) {
      fetchChangeToken();
    }
  };
  const fetchChangeToken = async () => {
    let body = {sessionToken: auth.sessionToken, Coin: tokens};
    console.log(body);
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await api.post('convert', JSON.stringify(body), config);
      if (res?.data?.Result === 'success') {
        Alert.alert('변환 성공하였습니다');
        navigation.goBack();
      }
    } catch (err) {
      Alert.alert('', '서버와 통신에 실패');
      console.log('err', err);
    }
  };
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
        <Text style={styles.tx1}>전환액 만큼 터치콘이 차감 됩니다.</Text>
        <View style={styles.point}>
          <Image
            source={require('../../../assets/icons/coin_icon.png')}
            style={{
              width: 80,
              height: 79,
            }}
          />
          <Text style={styles.tx2}>{coins?.TouchPoint}</Text>
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
        }}>
        <TextInput
          value={tokens}
          onChangeText={text => onChangetokens(text.replace(/[^0-9]/g, ''))}
          placeholder="    수량"
          style={{width: 205, color: '#000000'}}
          keyboardType="number-pad"
        />
        {/* Inputext 내의 Touch 글자 */}
        <Image
          source={require('../../../assets/images/signup_touch_text.png')}
          resizeMode="contain"
          style={{width: 89, height: 19, marginHorizontal: 19}}
        />
      </RowView>

      <BottomButton
        text={'포인트 전환'}
        style={{marginVertical: 32}}
        onPress={ChangeTokenToPoint}
      />
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

export default PointCh;

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
