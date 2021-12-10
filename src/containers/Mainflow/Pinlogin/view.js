import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
  Button,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Touchable from '../../../components/Touchable';
import {NormalBoldLabel} from '../../../components/Label';
import RowView from '../../../components/RowView';
import {useDispatch, useSelector} from 'react-redux';
import {
  addCount,
  pinLogin,
  resetAuth,
  resetCount,
  saveEmail,
  saveSessionToken,
} from '../../../redux/authSlice';
import axios from 'axios';
import api from '../../../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');
const vh = height / 100;
const vw = width / 100;

// function Gray() {
//   return (
//     <Image
//       source={require('../../../assets/images/graycircle.png')}
//       style={{
//         width: width * 0.03,
//         height: height * 0.03,
//         resizeMode: 'contain',
//       }}
//     />
//   );
// }

const Circle = ({isOrange}) => {
  return (
    <View
      style={{
        backgroundColor: isOrange ? '#FD7F36' : '#c4c4c4',
        width: isOrange ? 10 : 7,
        height: isOrange ? 10 : 7,
        borderRadius: isOrange ? 5 : 3.5,
        marginHorizontal: 10,
      }}
    />
  );
};

export default function Pinlogin({route}) {
  const dispatch = useDispatch();

  const {count} = useSelector(state => state.auth);
  const auth = useSelector(state => state.auth);
  const {pin, sessionToken, loginSuccess, email} = auth; // pin 현재 기본값 0000000
  const [pwd, onChangePwd] = React.useState('');
  const [test, setTest] = useState('0000000');
  const [pwdbool, setPwdbool] = useState(0); // pwErrCount
  // const email = route.params.Email ? route.params.Email : auth.email;
  const navigation = useNavigation();
  useEffect(() => {
    // getPinRegister();
    // navigation.navigate('Signup');
  }, []);
  useEffect(() => {}, []);
  const fetchWithdrawal = async () => {
    let body = {sessionToken: auth.sessionToken};
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await api.post('unregister', JSON.stringify(body), config);
      if (res?.data?.Result === 'success') {
        dispatch(resetAuth());
        Alert.alert('5회 실패로 인해 회원탈퇴되었습니다');
        // navigation.navigate('Splash');
        navigation.navigate('Signup');
      }
      // console.log(res);
      // navigation.navigate('Wallet');
      // console.log('test', res.data.Result);
    } catch (err) {
      Alert.alert('', '서버와 통신에 실패');
      console.log('err', err);
    }
  };
  const getPinRegister = () => {
    //등록시 사용하는 이벤트입니다
    let Email = route.params.Email;
    let body = {Email, Pin: pwd};
    api
      .post('pinregister', JSON.stringify(body), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        if (res.status !== 200) {
          return;
        }
        dispatch(saveSessionToken(res?.data?.Result));
        dispatch(saveEmail(Email));
        Alert.alert('PIN번호가 등록되었습니다');
        // navigation.navigate('Main');
        navigation.reset({
          routes: [
            {
              name: 'Main',
            },
          ],
        });
        // console.log( res?.data?.Result);
      })
      .catch(err => {
        Alert.alert('서버와의 접속이 실패하였습니다');
        console.log('에러메세지', err);
      });
  };
  const handleKeyPress = e => {
    console.log('pwdErrorCount', pwdbool);
    if (pwd.length !== 7) {
      Alert.alert('PIN 번호는 7자리 입니다.');
      return;
    }
    if (auth.sessionToken) {
      // if (pwd === pin) {
      //   dispatch(pinLogin(pwd, sessionToken));
      //   console.log('login success');
      //   // navigation.navigate('Main');
      // }

      let body = {Pin: pwd, sessionToken: auth.sessionToken};
      console.log(body);
      api
        .post('pinlogin', JSON.stringify(body), {
          headers: {
            'Content-Type': 'application/json',
          },
        })

        .then(res => {
          console.log(body);
          console.log(res);
          if (res.data.Result !== 'success' || res.status !== 200) {
            setPwdbool(pwdbool + 1);
            dispatch(addCount());
            onChangePwd('');
            // console.log('login fail');
            console.log('pwd = ', pwd);
            // console.log('pwdbool= ', pwdbool);
            if (count === 4) {
              fetchWithdrawal();
              return;
            }

            return;
          }
          console.log(res);

          Alert.alert('로그인이 성공하였습니다');
          dispatch(resetCount());
          navigation.navigate('Main');
          // console.log( res?.data?.Result);
        })
        .catch(err => {
          console.log(body);
          console.log('에러메세지', err);
        });

      // else {
      //   setPwdbool(pwdbool + 1);
      //   onChangePwd('');
      //   console.log('login fail');
      //   console.log('pwd = ', pwd);
      //   console.log('pwdbool= ', pwdbool);
      // }
    } else {
      getPinRegister();
    }
  };
  //

  //
  return (
    <View style={styles.pinglogin_container}>
      {/*{console.log(auth.sessionToken)}*/}
      <View style={{marginTop: height * 0.1}}>
        {/* PIN 번호 간편 로그인 */}
        {/*<Image*/}
        {/*  source={require('../../../assets/images/pintext.png')}*/}
        {/*  style={{*/}
        {/*    width: width * 0.4,*/}
        {/*    height: height * 0.03,*/}
        {/*    resizeMode: 'contain',*/}
        {/*  }}*/}
        {/*/>*/}
        {auth.sessionToken && (
          <NormalBoldLabel
            text={pwdbool === 0 ? 'PIN 번호 간편 로그인' : '다시 입력해 주세요'}
          />
        )}
        {!auth.sessionToken && <NormalBoldLabel text={'PIN 번호등록'} />}
        {/* PIN 번호 간편 로그인 */}
      </View>
      <RowView style={styles.password_con}>
        {[1, 2, 3, 4, 5, 6, 7].map((num, i) => (
          <Circle key={i} isOrange={pwd.length >= num} />
        ))}
        {/*{pwd.length >= 1 ? <Orange /> : <Gray />}*/}
        {/*{pwd.length >= 2 ? <Orange /> : <Gray />}*/}
        {/*{pwd.length >= 3 ? <Orange /> : <Gray />}*/}
        {/*{pwd.length >= 4 ? <Orange /> : <Gray />}*/}
        {/*{pwd.length >= 5 ? <Orange /> : <Gray />}*/}
        {/*{pwd.length >= 6 ? <Orange /> : <Gray />}*/}
        {/*{pwd.length >= 7 ? <Orange /> : <Gray />}*/}
      </RowView>
      <TextInput
        style={{width: width * 0.6, color: 'transparent', marginTop: -32}}
        // onKeyPress={handleKeyPress}
        value={pwd}
        onSubmitEditing={handleKeyPress}
        onChangeText={onChangePwd}
        maxLength={7}
        secureTextEntry={true}
        keyboardType={'number-pad'}
        caretHidden={true}
        // onKeyPress 비밀번호 확인 작업
      />
      {count > 0 && (
        <Text style={styles.errMsg}>
          {`5회 오류 시 PIN번호를\n재설정 해야 합니다. `}
          <Text style={{color: '#fd7f36'}}>{`(${5 - count}회남음)`}</Text>
        </Text>
      )}
      <Touchable onPress={() => null} style={{marginTop: 14}}>
        <NormalBoldLabel text={'PIN 번호 분실'} style={{color: '#0068D9'}} />
      </Touchable>
      {/*<View>*/}
      {/*  <TouchableOpacity>*/}
      {/*    /!* PIN 번호 분실 text start *!/*/}
      {/*    <Image*/}
      {/*      source={require('../../../assets/images/pinnumber.png')}*/}
      {/*      style={{*/}
      {/*        width: width * 0.2,*/}
      {/*        height: height * 0.03,*/}
      {/*        resizeMode: 'contain',*/}
      {/*      }}*/}
      {/*    />*/}
      {/*    /!* PIN 번호 분실 text end *!/*/}
      {/*  </TouchableOpacity>*/}
      {/*</View>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  pinglogin_container: {
    width: width,
    height: height,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  password_con: {
    marginTop: 32,
    // marginBottom: 59,
    // width: width * 0.5,
    // height: height * 0.03,
    // justifyContent: 'space-between',
    justifyContent: 'center',
    color: 'white',
  },
  errMsg: {
    fontSize: 12,
    lineHeight: 16,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
