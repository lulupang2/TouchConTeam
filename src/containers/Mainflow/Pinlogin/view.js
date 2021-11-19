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
import {pinLogin} from '../../../redux/authSlice';
import axios from 'axios';
import api from '../../../api';

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

export default function Pinlogin({navigation}) {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const {pin, sessionToken, loginSuccess} = auth; // pin 현재 기본값 0000000
  const [pwd, onChangePwd] = React.useState('');
  const [test, setTest] = useState('0000000');
  const [pwdbool, setPwdbool] = useState(0); // pwErrCount

  useEffect(() => {
    getPinRegister();
  });

  const getPinRegister = async Email => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await api.post('pinregister', {Email}, config);
    } catch (err) {
      Alert.alert('', '서버와 통신에 실패하였습니다.');
      console.log('err', err);
      console.log('err.res', err.response);
    }
  };

  const handleKeyPress = e => {
    console.log('pwdErrorCount', pwdbool);
    if (pwd === pin) {
      dispatch(pinLogin(pwd, sessionToken));
      console.log('login success');
      // navigation.navigate('Main');
    } else {
      setPwdbool(pwdbool + 1);
      console.log('login fail');
      console.log('pwd = ', pwd);
      console.log('pwdbool= ', pwdbool);
      onChangePwd('');
    }
  };
  return (
    <View style={styles.pinglogin_container}>
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
        <NormalBoldLabel
          text={pwdbool === 0 ? 'PIN 번호 간편 로그인' : '다시 입력해 주세요'}
        />
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

      {pwdbool > 0 && (
        <Text style={styles.errMsg}>
          {`5회 오류 시 PIN번호를\n재설정 해야 합니다. `}
          <Text style={{color: '#fd7f36'}}>{`(${5 - pwdbool}회남음)`}</Text>
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
