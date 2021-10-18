import React, {useState} from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

function Signup(props) {
  const [allagree, setAllagree] = useState(false);
  const [ser_agree, setSer_agree] = useState(false);
  const [per_agree, setPer_agree] = useState(false);
  const [mark_agree, setMark_agree] = useState(false);
  const [warnning, setWarnnig] = useState(false);
  const [email, onChangeEmail] = React.useState('');
  const [code, onChangeCode] = React.useState('');

  const chg_ser = () => {
    setSer_agree(!ser_agree);
    if (ser_agree === true) {
      setAllagree(false);
    }
  };
  const chg_per = () => {
    setPer_agree(!per_agree);
    if (per_agree === true) {
      setAllagree(false);
    }
  };
  const chg_mark = () => {
    setMark_agree(!mark_agree);
    if (mark_agree === true) {
      setAllagree(false);
    }
  };
  const chg_all = () => {
    if (allagree === false) {
      setMark_agree(true);
      setPer_agree(true);
      setSer_agree(true);
      setAllagree(true);
    }
  };
  const gobtn = () => {
    if (per_agree === true && ser_agree === true) {
      setWarnnig(false);
      props.navigation.navigate('Intro1');
    } else {
      setWarnnig(true);
    }
  };
  return (
    <View style={styles.signup_container}>
      <View style={{marginLeft: width * 0.05}}>
        <Image
          source={require('../../../assets/images/signup_title2.png')}
          style={{
            marginTop: height * 0.08,
            height: height * 0.08,
            width: width * 0.7,
            resizeMode: 'contain',
            marginLeft: width * 0.02,
          }}
        />
        <Image
          source={require('../../../assets/images/signup_title.png')}
          style={{
            height: height * 0.05,
            width: width * 0.7,
            resizeMode: 'contain',
            marginBottom: height * 0.02,
            marginLeft: width * 0.02,
          }}
        />
      </View>
      {/* <Button onPress={chg_all} title="test button" /> */}
      {/* 약관 동의 */}
      <View style={{marginLeft: width * 0.05}}>
        <ImageBackground
          source={require('../../../assets/images/rectangle12.png')}
          style={{
            width: width * 0.9,
            height: height * 0.035,
            resizeMode: 'cover',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          {allagree ? (
            <TouchableOpacity onPress={chg_all}>
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
            <TouchableOpacity onPress={chg_all}>
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
            onPress={chg_all}
            style={{width: width * 0.75, height: height * 0.03}}>
            <Image
              source={require('../../../assets/images/nobutton.png')}
              style={{
                width: width * 0.28,
                height: height * 0.03,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={{marginLeft: width * 0.05}}>
        <ImageBackground
          source={require('../../../assets/images/rectangle13.png')}
          style={{
            width: width * 0.9,
            resizeMode: 'contain',
            height: height * 0.2087,
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
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
            <TouchableOpacity
              onPress={chg_ser}
              style={{
                width: width * 0.6,
                height: height * 0.03,
                resizeMode: 'contain',
                justifyContent: 'center',
              }}>
              <View style={{flexDirection: 'column'}}>
                <Image
                  source={require('../../../assets/images/service_agree.png')}
                  style={{
                    width: width * 0.48,
                    height: height * 0.03,
                    resizeMode: 'contain',
                  }}
                />
                {warnning ? (
                  <Image
                    source={require('../../../assets/images/warn_ser.png')}
                    style={{
                      width: width * 0.44,
                      height: height * 0.03,
                      resizeMode: 'contain',
                      position: 'absolute',
                      marginTop: height * 0.03,
                    }}
                  />
                ) : null}
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
            }}>
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
              }}>
              <View style={{flexDirection: 'column'}}>
                <Image
                  source={require('../../../assets/images/personal_agree.png')}
                  style={{
                    width: width * 0.6,
                    height: height * 0.03,
                    resizeMode: 'contain',
                  }}
                />
                {warnning ? (
                  <Image
                    source={require('../../../assets/images/warn_per.png')}
                    style={{
                      width: width * 0.56,
                      height: height * 0.03,
                      resizeMode: 'contain',
                      position: 'absolute',
                      marginTop: height * 0.03,
                    }}
                  />
                ) : null}
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
            }}>
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
            <TouchableOpacity
              onPress={chg_mark}
              style={{
                width: width * 0.6,
                height: height * 0.03,
                resizeMode: 'contain',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../../assets/images/marketing_agree.png')}
                style={{
                  width: width * 0.45,
                  height: height * 0.03,
                  resizeMode: 'contain',
                }}
              />
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
        </ImageBackground>
      </View>
      {/* 이메일 입력창 */}
      <View style={{marginLeft: width * 0.05}}>
        <ImageBackground
          source={require('../../../assets/images/email_inputn.png')}
          style={{
            marginTop: height * 0.035,
            width: width * 0.86,
            resizeMode: 'contain',
            height: height * 0.055,
          }}>
          <TextInput
            onChangeText={onChangeEmail}
            value={email}
            placeholder="이메일 주소"
            keyboardType="email-address"
          />
        </ImageBackground>
      </View>
      {/* 인증번호 입력창 */}
      <View style={styles.signup_code}>
        <ImageBackground
          source={require('../../../assets/images/input_coden.png')}
          style={{
            width: width * 0.5,
            resizeMode: 'contain',
            height: height * 0.055,
          }}>
          <TextInput
            onChangeText={onChangeCode}
            value={code}
            placeholder="인증코드 입력"
            keyboardType="numeric"
          />
        </ImageBackground>

        <Image
          source={require('../../../assets/images/code_button.png')}
          style={{
            marginRight: width * 0.13,
            width: width * 0.3,
            resizeMode: 'contain',
            height: height * 0.055,
          }}
        />
      </View>
      {/* 주의사항 */}
      <View style={{marginLeft: width * 0.05}}>
        <Image
          source={require('../../../assets/images/caution.png')}
          style={{
            width: width * 0.85,
            resizeMode: 'contain',
            height: height * 0.14,
            marginTop: height * 0.03,
          }}
        />
      </View>
      {/* 다음 버튼 */}
      <View style={{marginLeft: width * 0.05}}>
        <TouchableOpacity onPress={gobtn}>
          <Image
            source={require('../../../assets/images/next_button.png')}
            style={{
              width: width * 0.85,
              resizeMode: 'contain',
              height: height * 0.06,
              marginTop: height * 0.03,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  signup_container: {
    width: width,
    height: height,

    backgroundColor: 'white',
  },
  signup_code: {
    marginTop: height * 0.035,
    width: width * 0.9,
    display: 'flex',
    flexDirection: 'row',
    width: width,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: width * 0.05,
  },
});

export default Signup;
