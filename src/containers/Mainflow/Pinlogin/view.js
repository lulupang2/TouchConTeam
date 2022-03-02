import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Alert,
  Modal,
  Image,
  TouchableOpacity,
} from 'react-native';
import Touchable from '../../../components/Touchable';
import {NormalBoldLabel, NormalLabel} from '../../../components/Label';
import RowView from '../../../components/RowView';
import {useDispatch, useSelector} from 'react-redux';
import {
  addCount,
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
//     />x
//   );
// }

const Circle = ({isOrange}) => {
  return (
    <View
      style={{
        backgroundColor: isOrange ? '#5F408F' : '#c4c4c4',
        width: isOrange ? 10 : 7,
        height: isOrange ? 10 : 7,
        borderRadius: isOrange ? 5 : 3.5,
        marginHorizontal: 10,
      }}
    />
  );
};

export default function Pinlogin({route}) {
  console.log('PinLogin', route);
  const dispatch = useDispatch();

  const {count} = useSelector(state => state.auth);
  const auth = useSelector(state => state.auth);
  const {pin, sessionToken, loginSuccess, email} = auth; // pin 현재 기본값 0000000
  const [pwd, onChangePwd] = React.useState('');
  const [test, setTest] = useState('0000000');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pwdbool, setPwdbool] = useState(0); // pwErrCount
  // const email = route.params.Email ? route.params.Email : auth.email;
  const navigation = useNavigation();
  const [tempEmail, setTempEmail] = useState('');

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
      // Alert.alert('', '서버와 통신에 실패');
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
        // Alert.alert('서버와의 접속이 실패하였습니다');
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
  const sendEmail = async () => {
    if (tempEmail === '') {
      Alert.alert('', '이메일을 입력해주세요.');
      return;
    }

    try {
      let body = {
        email: tempEmail,
      };
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      console.log('body', body);
      let res = await api.post(
        'sendtemppassword',
        JSON.stringify(body),
        config,
      );
      if (res?.data?.Result === 'success') {
        Alert.alert('임시 비밀번호가 전송 되었습니다.');
        setIsModalVisible(false);
      }
      if (res?.data?.Result === 'No email') {
        Alert.alert('회원가입이 안되어있는 이메일 입니다.');
      }
      if (res?.data?.Result === 'failed') {
        Alert.alert('유효하지 않는 이메일 입니다.');
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  //
  return (
    <View style={styles.pinglogin_container}>
      <Modal visible={isModalVisible}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.4)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 10,
              paddingHorizontal: 7,
              paddingBottom: 13,
              paddingTop: 37,
              width: width / 1.0997,
            }}>
            <TouchableOpacity
              onPress={() => {
                setIsModalVisible(false);
              }}
              style={{position: 'absolute', right: 20, top: 20}}>
              <Image
                source={require('../../../assets/X.png')}
                style={{width: 20, height: 20}}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
            <NormalLabel
              text={'입력하신 이메일로\n임시 PIN번호가 전송됩니다.'}
              style={{
                fontSize: 20,
                lineHeight: 24,
                textAlign: 'center',
                fontWeight: '700',
              }}
            />
            <TextInput
              value={tempEmail}
              onChangeText={text => setTempEmail(text)}
              style={{
                // paddingVertical: 15,
                paddingHorizontal: 20,
                borderWidth: 0.8,
                borderColor: '#C4C4C4',
                borderRadius: 5,
                marginTop: 25,
                marginHorizontal: 21,
                height: 50,
                color: '#000000',
                // flex: 1,
              }}
              placeholder="이메일 주소"
              placeholderTextColor={'#C4C4C4'}
            />

            <Touchable
              onPress={sendEmail}
              style={{
                paddingVertical: 15,
                backgroundColor: '#FD7F36',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 53,
                marginTop: 39,
              }}>
              <NormalLabel
                style={{
                  fontSize: 20,
                  lineHeight: 24,
                  fontWeight: '700',
                  color: '#fff',
                }}
                text={'전송'}
              />
            </Touchable>
          </View>
        </View>
      </Modal>
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
        style={{
          width: width * 0.6,
          color: 'transparent',
          marginTop: -32,
        }}
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
          <Text style={{color: '#5F408F'}}>{`(${5 - count}회남음)`}</Text>
        </Text>
      )}
      <Touchable
        onPress={() => setIsModalVisible(true)}
        style={{marginTop: 14}}>
        <NormalBoldLabel text={'PIN 번호 분실'} style={{color: '#0068D9'}} />
      </Touchable>

      <NormalBoldLabel
        text={'(주의)'}
        style={{
          color: '#FF0000',
          marginTop: 40,
          // textAlign: 'left',
          width: 320,
          // paddingHorizontal: 50,
          paddingLeft: 20,
          fontSize: 13,
        }}
      />

      <NormalBoldLabel
        text={
          '이미 회원으로 가입한 이메일로 재가입을 할 경우에는 마지막에 가입한 비밀번호가 적용됩니다'
        }
        style={{
          width: 320,
          fontSize: 12,
          marginTop: 10,
          textAlign: 'left',
          paddingHorizontal: 20,
        }}
      />

      {/*<NormalBoldLabel*/}
      {/*  text={*/}
      {/*    '한번 회원가입 된 이메일로 다시 회원가입을 할 경우,마지막에 시도한 비밀번호만 적용 됩니다.'*/}
      {/*  }*/}
      {/*  style={{*/}
      {/*    fontSize: 12,*/}
      {/*    marginTop: 10,*/}
      {/*    marginHorizontal: 50,*/}
      {/*    textAlign: 'left',*/}
      {/*  }}*/}
      {/*/>*/}
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
