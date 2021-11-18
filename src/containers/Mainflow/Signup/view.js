import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import BottomButton from '../../../components/BottomButton';
import {NormalBoldLabel, NormalLabel} from '../../../components/Label';
import RowView from '../../../components/RowView';
import {useDispatch, useSelector} from 'react-redux';
import {checkVerifyCode} from '../../../redux/authSlice';
import api from '../../../api';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

let interval;

function Signup({props, navigation}) {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const {isVerified} = auth;

  const [verti, setVerti] = useState('');
  const [allagree, setAllagree] = useState(false);
  const [ser_agree, setSer_agree] = useState(false);
  const [per_agree, setPer_agree] = useState(false);
  const [mark_agree, setMark_agree] = useState(false);
  const [email, onChangeEmail] = React.useState('');
  const [code, onChangeCode] = React.useState('');
  const [remaining, setRemaining] = useState(0);
  const [hasSent, setHasSent] = useState(false);

  {
    console.log('인증번호: ', verti);
  }
  useEffect(() => {
    if (isVerified) {
      navigation.navigate('Pinlogin');
    }
  }, [dispatch]);

  // axios 테스트
  const getVerifyCode = async Email => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await api.post('emailverification', {Email}, config);
      setVerti(res.Result);
      setHasSent(true);
      countDown();
    } catch (err) {
      Alert.alert('', '서버와 통신에 실패하였습니다.');
      console.log('err', err);
      console.log('err.res', err.response);
    }
    // fetch('http://3.35.210.171:5055/emailverification', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         Email: email,
    //     }),
    // })
    //     .then(res => res.json())
    //     .then(res => {
    //         // console.log('res', res);
    //         setVerti(res.Result);
    //         // console.log('코드 verti에 담기', verti);
    //     });
  };

  const onCheckVerifyCode = () => {
    let errMsg = null;

    if (!allagree) {
      errMsg = '서비스 이용 약관에 동의해 주세요.';
    } else if (email === '' || code === '') {
      errMsg = '이메일과 인증번호를 꼭 입력해주세요.';
    } else if (remaining === 0) {
      errMsg = '인증시간이 초과되었습니다.';
    } else if (code !== verti) {
      errMsg = '인증번호가 틀립니다.';
    }

    if (errMsg) {
      Alert.alert('', errMsg);
      return;
    }
    dispatch(checkVerifyCode(email, code));
  };

  const onCheckAllAgree = (ser_agree, per_agree, mark_agree) => {
    if (!allagree && ser_agree && per_agree && mark_agree) {
      setAllagree(true);
    } else {
      setAllagree(false);
    }
  };

  const chg_ser = () => {
    setSer_agree(!ser_agree);
    onCheckAllAgree(!ser_agree, per_agree, mark_agree);
    // if (ser_agree === true) {
    //   setAllagree(false);
    // }
  };
  const chg_per = () => {
    setPer_agree(!per_agree);
    onCheckAllAgree(ser_agree, !per_agree, mark_agree);
    // if (per_agree === true) {
    //   setAllagree(false);
    // }
  };
  const chg_mark = () => {
    setMark_agree(!mark_agree);
    onCheckAllAgree(ser_agree, per_agree, !mark_agree);
    // if (mark_agree === true) {
    //   setAllagree(false);
    // }
  };

  const chg_all = () => {
    if (allagree === false) {
      setMark_agree(true);
      setPer_agree(true);
      setSer_agree(true);
      setAllagree(true);
    } else {
      setMark_agree(false);
      setPer_agree(false);
      setSer_agree(false);
      setAllagree(false);
    }
  };

  const countDown = () => {
    let time = 300;
    if (interval) {
      clearInterval(interval);
    }
    interval = setInterval(() => {
      time = time - 1;
      setRemaining(time);
      if (time <= 0) {
        clearInterval(interval);
      }
    }, 1000);
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{paddingLeft: 24}}>
        <NormalBoldLabel
          keyboardType="email-address"
          style={{marginTop: 51, fontSize: 20, lineHeight: 24}}
          text={'약관에 동의하고\n' + '이메일 주소를 입력해 주세요.'}
        />

        <NormalLabel
          style={{marginTop: 9, marginBottom: 19}}
          text={
            '기존 계정으로  사용을 원하시면\n기존 가입 이메일 주소를  입력해 주세요'
          }
        />
      </View>

      {/* <Button onPress={chg_all} title="test button" /> */}
      {/* 약관 동의 */}
      <View
        style={{
          // marginLeft: width * 0.05,
          paddingHorizontal: width * 0.05,
        }}
      >
        <View
          style={{
            // width: width * 0.9,
            // height: 40,
            borderWidth: 0.8,
            borderColor: '#c4c4c4',
            backgroundColor: '#f7f7f7',
            resizeMode: 'cover',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <TouchableOpacity onPress={chg_all}>
            <Image
              source={
                allagree
                  ? require('../../../assets/images/chk_square.png')
                  : require('../../../assets/images/square.png')
              }
              style={{
                width: width * 0.06,
                height: height * 0.06,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={chg_all}
            style={{width: width * 0.75, height: height * 0.03}}
          >
            <Image
              source={require('../../../assets/images/nobutton.png')}
              style={{
                width: width * 0.28,
                height: height * 0.03,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/*<View style={{marginLeft: width * 0.05}}>*/}
      <View style={{marginHorizontal: width * 0.05}}>
        <ImageBackground
          source={require('../../../assets/images/rectangle13.png')}
          style={{
            width: 353,
            resizeMode: 'contain',
            height: 152,
            justifyContent: 'space-evenly',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            {ser_agree ? (
              <TouchableOpacity onPress={chg_ser}>
                <Image
                  source={require('../../../assets/images/chk_square.png')}
                  style={{
                    width: width * 0.06,
                    height: height * 0.06,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={chg_ser}>
                <Image
                  source={require('../../../assets/images/square.png')}
                  style={{
                    width: width * 0.06,
                    height: height * 0.06,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
            )}
            {/*   서비스 이용 약관 동의 Text */}
            <TouchableOpacity
              onPress={chg_ser}
              style={{
                width: width * 0.6,
                height: height * 0.03,
                resizeMode: 'contain',
                justifyContent: 'center',
                // 글간 간격
                marginTop: 24,
              }}
            >
              <View style={{flexDirection: 'column'}}>
                <Image
                  source={require('../../../assets/images/service_agree.png')}
                  style={{
                    width: width * 0.48,
                    height: height * 0.03,
                    resizeMode: 'contain',
                  }}
                />

                {/* 중간 확인 */}

                <Text style={styles.warn_text}>
                  {ser_agree ? null : '서비스 이용 약관 동의해 주세요.'}
                </Text>

                {/* 중간 확인 */}
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/images/detailview.png')}
                style={{
                  width: width * 0.13,
                  height: height * 0.03,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            {per_agree ? (
              <TouchableOpacity onPress={chg_per}>
                <Image
                  source={require('../../../assets/images/chk_square.png')}
                  style={{
                    width: width * 0.06,
                    height: height * 0.06,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={chg_per}>
                <Image
                  source={require('../../../assets/images/square.png')}
                  style={{
                    width: width * 0.06,
                    height: height * 0.06,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={chg_per}
              style={{
                width: width * 0.6,
                height: height * 0.03,
                resizeMode: 'contain',
                justifyContent: 'center',
              }}
            >
              {/* 개인 정보 수집 및 이용 동의 Text */}
              {/*<View style={{flexDirection: 'column'}}>*/}
              <View style={{}}>
                <Image
                  source={require('../../../assets/images/personal_agree.png')}
                  style={{
                    width: width * 0.6,
                    height: height * 0.03,
                    marginTop: 24,
                    resizeMode: 'contain',
                  }}
                />

                {/* 중간 확인 */}

                <Text style={styles.warn_text}>
                  {per_agree ? null : '개인 정보 수집 및 이용에 동의해 주세요.'}
                </Text>

                {/* 중간 확인 */}
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/images/detailview.png')}
                style={{
                  width: width * 0.13,
                  height: height * 0.03,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              paddingBottom: 23,
              borderBottomWidth: 0.8,
              borderColor: '#c4c4c4',
            }}
          >
            {mark_agree ? (
              <TouchableOpacity onPress={chg_mark}>
                <Image
                  source={require('../../../assets/images/chk_square.png')}
                  style={{
                    width: width * 0.06,
                    height: height * 0.06,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={chg_mark}>
                <Image
                  source={require('../../../assets/images/square.png')}
                  style={{
                    width: width * 0.06,
                    height: height * 0.06,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
            )}

            <View style={{flexDirection: 'column'}}>
              <TouchableOpacity
                onPress={chg_mark}
                style={{
                  width: width * 0.6,
                  height: height * 0.03,
                  resizeMode: 'contain',
                  justifyContent: 'center',
                  marginTop: 14,
                }}
              >
                {/* 마케팅 정보 알람 동의 Text  */}
                <Image
                  source={require('../../../assets/images/marketing_agree.png')}
                  style={{
                    width: width * 0.45,
                    height: height * 0.03,
                    resizeMode: 'contain',
                    marginTop: 5,
                  }}
                />
                <Text style={styles.warn_text}>
                  {mark_agree ? null : '마케팅 정보 알람에 동의해 주세요.'}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <Image
                source={require('../../../assets/images/detailview.png')}
                style={{
                  width: width * 0.13,
                  height: height * 0.03,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      {/* 이메일 입력창 */}
      <View style={{marginHorizontal: 25, marginVertical: 24}}>
        <TextInput
          onChangeText={onChangeEmail}
          value={email}
          placeholder="이메일 주소"
          placeholderTextColor={'#c4c4c4'}
          keyboardType="email-address"
          style={{
            paddingHorizontal: 11,
            fontSize: 15,
            paddingVertical: 11,
            borderWidth: 0.8,
            borderColor: '#c4c4c4',
            borderRadius: 5,
          }}
        />
      </View>
      {/* 인증번호 입력창 */}
      <View style={styles.signup_code}>
        <RowView style={styles.code_input}>
          <TextInput
            onChangeText={onChangeCode}
            value={code}
            placeholder="인증코드 입력"
            placeholderTextColor={'#c4c4c4'}
            keyboardType="numeric"
            style={{fontSize: 15}}
          />
          {hasSent && (
            <Text style={styles.remaining}>
              {parseInt(remaining / 60)
                .toString()
                .padStart(1, '0')}
              :
              {parseInt(remaining % 60)
                .toString()
                .padStart(2, '0')}
            </Text>
          )}
        </RowView>

        {/* 인증코드 발송 버튼 */}
        <TouchableOpacity
          onPress={() => {
            if (email === '') {
              Alert.alert('', '이메일을 입력해주세요.');
              return;
            }
            getVerifyCode(email);
          }}
          style={styles.verifySendBtn}
        >
          <NormalBoldLabel
            text={'인증코드 발송'}
            style={{fontSize: 18, lineHeight: 22, color: '#fff'}}
          />
        </TouchableOpacity>
      </View>
      {/* 전화번호 입력란 */}
      <Text
        style={{
          color: '#000000',
          fontSize: 15,
          marginLeft: 26,
          marginTop: 28,
          fontWeight: 'bold',
        }}
      >
        전화번호
      </Text>
      <View
        style={{
          marginTop: 8,
          marginHorizontal: 24,
          minHeight: 40,
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
      >
        {/* 전화번호 picker : 010,011,017 */}

        <Text
          style={{
            borderWidth: 1,
            borderColor: '#E3E5E5',
            borderRadius: 10,
            minWidth: 79,
            fontSize: 15,
            textAlign: 'center',
            paddingVertical: 11.5,
            color: '#000',
          }}
        >
          010
        </Text>
        {/* 전화번호 picker : 010,011,017 */}

        <TextInput
          keyboardType="phone-pad"
          maxLength={8}
          style={{
            flex: 1,
            marginLeft: 7,
            borderWidth: 1,
            borderColor: '#E3E5E5',
            borderRadius: 10,
            paddingHorizontal: 11,
          }}
        />
      </View>
      {/* 주의사항 */}
      <View style={{marginLeft: width * 0.05}}>
        <Image
          source={require('../../../assets/images/signup_caution.png')}
          style={{
            width: width * 0.85,
            resizeMode: 'contain',
            height: height * 0.14,
            marginTop: height * 0.03,
            marginBottom: 25,
          }}
        />
      </View>

      {/* 다음 버튼 */}
      {/* PinLogin으로 가야하나 지금은 바로 Main으로 가게  */}
      <BottomButton text={'다음'} onPress={onCheckVerifyCode} />

      {/* <View style={{marginLeft: width * 0.05}}>
        <TouchableOpacity onPress={gobtn}>
          <Image
            source={require('../../../assets/images/btn_next.png')}
            style={{
              width: width * 0.85,
              resizeMode: 'contain',
              height: height * 0.06,
              marginTop: height * 0.03,
            }}
          />
        </TouchableOpacity>
      </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  signup_code: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: width * 0.05,
  },
  warn_text: {fontSize: 12, color: '#ff0000', marginTop: 2},
  code_input: {
    flex: 1,
    borderWidth: 0.8,
    paddingLeft: 11,
    paddingRight: 15,
    borderColor: '#c4c4c4',
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 15,
  },
  verifySendBtn: {
    borderRadius: 53,
    backgroundColor: '#fd7f36',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginRight: 25,
  },
  remaining: {
    fontSize: 12,
    color: '#FD7F36',
  },
});

export default Signup;
