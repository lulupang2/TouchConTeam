import React, {useEffect, useState} from 'react';
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
  ScrollView,
  KeyboardAvoidingViewBase,
  Alert,
} from 'react-native';
import BottomButton from '../../../components/BottomButton';
import {LongButton} from '../../../components/Botton';
import HeaderBottomLine from '../../../components/HeaderBottomLine';
import {NormalLabel} from '../../../components/Label';
import RowView from '../../../components/RowView';
import ColumnView from '../../../components/ColumnView';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';
import api from '../../../api';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {checkVerifyCode, resetAuth} from '../../../redux/authSlice';

const view = () => {
  const [mark, setMark] = useState(true);
  const [toc, setToc] = useState();
  const [krw, setKrw] = useState('50,210');
  const [top, setTop] = useState();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const chMark = () => {
    if (mark === false) {
      setMark(true);
    } else {
      setMark(false);
    }
    return mark;
  };
  useEffect(() => {
    getbalance();
    fetchTotalCoin();
  }, []);
  const getbalance = async () => {
    let body = {sessionToken: auth.sessionToken};
    let touchcon;
    let touchPoint;
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await api.post('balance', JSON.stringify(body), config);
      console.log('잔고', res.data.Result.TouchCon);
      console.log('잔고2', res.data.Result.TouchPoint);
      touchcon = res.data.Result.TouchCon;
      touchPoint = res.data.Result.TouchPoint;
      setToc(touchcon);
      setTop(touchPoint);
      // console.log(res);
      // navigation.navigate('Wallet');
      // console.log('test', res.data.Result);
    } catch (err) {
      Alert.alert('', '서버와 통신에 실패');
      console.log('err', err);
    }
  };

  const fetchTotalCoin = async () => {
    let body = {Type: 'exchangerate'};
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await api.post('exchangerate', JSON.stringify(body), config);
      console.log('stx', res.data.Result.TouchCon);
      setKrw(res.data.Result.TouchCon);
    } catch (err) {
      Alert.alert('', '서버와 통신에 실패');
      console.log('err', err);
    }
  };

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
        Alert.alert('회원탈퇴 성공하였습니다');
        // navigation.navigate('Splash');
        navigation.reset({
          routes: [
            {
              name: 'Splash',
            },
          ],
        });
      }
      // console.log(res);
      // navigation.navigate('Wallet');
      // console.log('test', res.data.Result);
    } catch (err) {
      Alert.alert('', '서버와 통신에 실패');
      console.log('err', err);
    }
  };

  return (
    <WhiteSafeAreaView>
      <HeaderBottomLine />
      <ScrollView>
        <View style={styles.Container}>
          <View style={styles.TitleBox}>
            <Text
              style={{
                color: '#fff',
                marginLeft: 21,
                fontSize: 15,
                fontWeight: '700',
              }}>
              디지털 자산의 수량을 체크해 주세요!
            </Text>
          </View>
          <View style={styles.ContentBox}>
            <ColumnView
              style={{
                marginHorizontal: 25,
                justifyContent: 'space-around',
                height: 105,
                borderBottomWidth: 1,
                borderColor: '#c4c4c4',
              }}>
              <Text style={styles.TextSize12}>잔량 TOP 수량</Text>
              <RowView>
                <NormalLabel
                  text={toc?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                />
                <NormalLabel text={'TOC'} style={{marginLeft: 19}} />
              </RowView>

              <RowView>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '400',
                    color: '#000',
                  }}>
                  {(krw * toc).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </Text>
                <Text
                  style={{
                    color: '#c4c4c4',
                    marginLeft: 5,
                    fontWeight: '700',
                    fontSize: 15,
                  }}>
                  KRW
                </Text>
                <Text
                  style={{
                    marginLeft: 5,
                    fontSize: 15,
                    fontWeight: '400',
                    color: '#000',
                  }}>
                  (STEX 거래서 시세연결)
                </Text>
              </RowView>
            </ColumnView>
            <ColumnView
              style={{
                marginHorizontal: 25,
                justifyContent: 'center',
                height: 99,
                borderBottomWidth: 1,
                borderColor: '#c4c4c4',
              }}>
              <Text style={styles.TextSize12}>잔량 TOC 수량</Text>
              <RowView style={{marginTop: 14}}>
                <Text style={{color: '#000', fontSize: 16}}>
                  {top?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </Text>
                <Text style={{marginLeft: 19, color: '#000', fontSize: 16}}>
                  TOP
                </Text>
              </RowView>
            </ColumnView>
            <RowView
              style={{
                justifyContent: 'center',
                marginVertical: 11,
              }}>
              <Text style={{color: '#FF0000', fontSize: 15, fontWeight: '700'}}>
                *아래 주의사항 꼭 읽어주세요!'
              </Text>
            </RowView>
          </View>
        </View>

        <Text
          style={{
            marginHorizontal: 25,
            color: '#FF0000',
            fontSize: 12,
            fontWeight: 'bold',
            marginVertical: 22,
          }}>
          (주의) 터치콘앱에서 탈퇴하시면 모든 디지털 자산이 소멸됩니다.
        </Text>

        {/*<Image*/}
        {/*  source={require('../../../assets/images/signoutContent.png')}*/}
        {/*  resizeMode="contain"*/}
        {/*  style={{marginHorizontal: 24, maxWidth: 326, maxHeight: 364}}*/}
        {/*/>*/}
        <View style={{paddingHorizontal: 24}}>
          <Text style={styles.Information}>
            터치콘앱에서 탈퇴하시면 향후 터치콘 월렛 및 계정에 접근 및 사용이
            불가능합니다. 모든 터치콘 및 다른 디지털 자산에 대한 모든 권한이
            소멸되고 복구되지 않습니다.{'\n\n'}만약 탈퇴하신다면 이미 획득한
            모든 디지털 자산에 대한 전송 및 처분을 하신 후에 탈퇴하시길
            바랍니다.
            {'\n\n'}계정 탈퇴시에는 터치콘에서 시행한 이벤트 및 프로모션에서
            획득한 모든 리워드의 권한 및 이력이 사라지며, 이후로는 전혀 복구되지
            않으니 주의하시기 바랍니다.{'\n\n'}터치콘앱은 계정 탈퇴 이후에는
            모든 정보 내역이 소멸되므로 복구되지 않습니다. 브랜드 파트너의 정보
            및 개인정보도 모두 일괄 폐기됩니다. {'\n\n'}계정을 탈퇴하시면
            개인정보처리방침에 따라 의무적 보관을 제외한 모든 회원의 정보는 즉시
            삭제됩니다.
          </Text>
          <Text style={styles.RedInfor}>
            {'\n\n'}
            본인은 위의 모든 사항에 대해 동의하며 향후 터치콘앱 운영진에게 그
            어떠한 이의도 제기하지 않을 것을 약속드립니다.
          </Text>
        </View>

        {/*<NormalLabel*/}
        {/*  style={{paddingVertical: 30, paddingHorizontal: 23}}*/}
        {/*  text={*/}
        {/*    '1. 서비스를 탈퇴하면 월렛에 보유한 모든 터치 토\n' +*/}
        {/*    '    큰의 권한이 소멸되어 복구가 되지 않습니다.\n' +*/}
        {/*    '\n' +*/}
        {/*    '2. 서비스를 탈퇴하면 스테이킹에 참여한 터치토큰\n' +*/}
        {/*    '    을 비롯한 모든 권한 및 정보가 소멸되어 복구가\n' +*/}
        {/*    '    불가능합니다.\n' +*/}
        {/*    '\n' +*/}
        {/*    '3. 탈퇴를 인한 모든 정보는 재가입을 해도 복구되\n' +*/}
        {/*    '    지 않습니다. 만약 탈퇴를 하실 경우에는 사전에\n' +*/}
        {/*    '    모든 자산에 대한 사용,전송 등을 하신 후에 탈\n' +*/}
        {/*    '    퇴하시기를 권장합니다.\n' +*/}
        {/*    '\n' +*/}
        {/*    '4. 본인의 탈퇴로 인해 모든 권한과 서비스는 종료\n' +*/}
        {/*    '    및 소멸되어니 이 점 참고하시어 신중히 결정하\n' +*/}
        {/*    '    시기 바랍니다.'*/}
        {/*  }*/}
        {/*/>*/}

        <RowView
          style={{
            borderWidth: 1,
            minHeight: 40,
            minWidth: 230,
            marginHorizontal: 25,
            borderColor: '#c4c4c4',
            padding: 11,
            marginTop: 25,
          }}>
          <Text
            style={{
              fontSize: 18,
              lineHeight: 20,
              color: '#000',
              marginLeft: 16,
              fontWeight: 'bold',
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

        <BottomButton
          text={'탈퇴하기'}
          style={{marginTop: 35}}
          onPress={() => {
            if (!mark) {
              fetchWithdrawal();
            } else {
              Alert.alert('약관 동의 후 회원탈퇴를 하실 수있습니다');
            }
          }}
        />

        {/* <LongButton
        text={'탈퇴하기'}
        tcStyle={{marginLeft: 60, position: 'absolute', top: 550}}
        txStyle={{paddingTop: 10}}
      /> */}
      </ScrollView>
    </WhiteSafeAreaView>
  );
};

const styles = StyleSheet.create({
  RedInfor: {
    fontSize: 15,
    lineHeight: 17,
    color: '#FF0000',
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  Information: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 15,
    color: '#000000',
  },
  SubTilte: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 28,
    marginLeft: 20,
  },

  Container: {
    marginTop: 20,
    marginHorizontal: 25,
    height: 287,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#c4c4c4',
  },
  TitleBox: {
    height: 40,
    backgroundColor: '#5F408F',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: 'center',
  },
  ContentBox: {
    height: 105,
  },
  TextSize12: {
    fontSize: 12,
    fontWeight: '700',
    color: '#000',
  },
});

export default view;
