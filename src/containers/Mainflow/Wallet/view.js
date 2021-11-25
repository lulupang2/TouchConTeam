import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';

import {HeaderThickBottomLine} from '../../../components/HeaderBottomLine';
import RowView from '../../../components/RowView';
import ColumnView from '../../../components/ColumnView';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';
import BottomButton from '../../../components/BottomButton';
import {ModalPoup2} from '../../../components/Modals';
import Touchable from '../../../components/Touchable';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {NormalBoldLabel, NormalLabel} from '../../../components/Label';
import QRCode from 'react-native-qrcode-svg';
import Clipboard from '@react-native-clipboard/clipboard';
import api from '../../../api';

const view = ({navigation, sendmodal, route}) => {
  let coins = route.params.coins;
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const {walletAddress, walletURL} = auth;

  // let coins = route.params.coins;
  const [visible, setVisible] = useState(false);
  const [coin, setCoin] = useState(0);
  const [coinPrice, setCoinPrice] = useState([]);
  const [eth, setEth] = useState(0);
  const [add, setAdd] = useState('0x45fe5c2a4b30239b3d5b0a3d4170B0E8e45FF449');
  const [divide, setDivide] = useState(true);

  const copyClipboard = () => {
    Clipboard.setString(walletAddress);
  };

  useEffect(() => {
    fetchTotalCoin();
  }, []);
  useEffect(() => {
    // console.log(route.params);
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

  const fetchTotalCoin = async () => {
    let body = {Type: 'exchangerate'};
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await api.post('exchangerate', JSON.stringify(body), config);
      // console.log(res?.data?.Result);
      setCoinPrice(res?.data?.Result);
    } catch (err) {
      Alert.alert('', '서버와 통신에 실패');
      console.log('err', err);
    }
  };
  const clickedTouchCon = () => {
    setVisible(true);
    setDivide(true);
    console.log(' 터치콘 클릭함');
  };

  const clickedEthereum = () => {
    setVisible(true);
    setDivide(false);
    console.log(' 이더리움 클릭함');
  };

  // sessionToken= 토큰, Coin="TouchCon"||"Ethereum, Amount="수량", Address= "출금주소"
  // /sendcoin
  const clickCoinSend = () => {
    let body = {
      sessionToken: auth.sessionToken,
      Coin: 'TouchCon',
      Amount: coin,
      Address: add,
    };
    if (coin > 5001) {
      Alert.alert('TouchCon의 출금 수량은 5000 TOP를 넘을 수 없습니다.');
      return;
    }
    api
      .post('sendcoin', JSON.stringify(body), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        setVisible(false);
        if (res.status !== 200) {
          return;
        } else if (res.data.Result === '유효하지 않은 출금주소입니다.') {
          Alert.alert('유효하지 않는 출금 주소입니다.');
          return;
        } else {
          Alert.alert('출금이 완료 되었습니다.');
        }
        console.log('coin : ', res);
      })
      .catch(err => console.log('에러메세지', err));
  };
  const clickEthereumSend = () => {
    let body = {
      sessionToken: auth.sessionToken,
      Coin: 'Ethereum',
      Amount: eth,
      Address: add,
    };
    if (eth > 5001) {
      Alert.alert('Ethereum의 출금 수량은 5000 ETH를 넘을 수 없습니다.');
      return;
    }
    api
      .post('sendcoin', JSON.stringify(body), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        if (res.status !== 200) {
          return;
        } else if (res.data.Result === '유효하지 않은 출금주소입니다.') {
          Alert.alert('유효하지 않는 출금 주소입니다.');
          return;
        } else {
          Alert.alert('출금이 완료 되었습니다.');
        }
        console.log('eth : ', res);
      })
      .catch(err => console.log('에러메세지', err));
  };

  return (
    <WhiteSafeAreaView>
      <ScrollView>
        <HeaderThickBottomLine />

        {/*{console.log(coins)}*/}
        <ModalPoup2 visible={visible}>
          <ColumnView style={styles.modal_flex}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Image
                source={require('../../../assets/images/x.png')}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  marginTop: 20,
                  marginLeft: 320,
                }}
              />
            </TouchableOpacity>
            <Text style={{color: '#000', fontSize: 30, textAlign: 'center'}}>
              {divide ? 'TouchCon' : 'Ethereum'}
            </Text>
            <Text style={styles.modal_text1}>
              출금을 위한 주소를 입력하세요
            </Text>

            <TextInput
              placeholder="주소"
              style={{
                minHeight: 50,
                minWidth: 285,
                marginHorizontal: 28,
                borderRadius: 5,
                borderWidth: 0.5,
                borderColor: 'gray',
                marginBottom: 14,
                color: '#000000',
              }}
              onChangeText={text => setAdd(text)}
            />
            <TextInput
              placeholder="출금수량"
              style={{
                minHeight: 50,
                minWidth: 285,
                marginHorizontal: 28,
                borderRadius: 5,
                borderWidth: 0.5,
                borderColor: 'gray',
                marginBottom: 45,
                color: '#000000',
              }}
              onChangeText={text => {
                if (divide) {
                  setCoin(text);
                } else {
                  setEth(text);
                }
              }}
              keyboardType="number-pad"
            />
            <BottomButton
              text={'확인'}
              onPress={() => {
                if (divide === true) {
                  clickCoinSend();
                  setVisible(false);
                } else {
                  clickEthereumSend();
                  setVisible(false);
                }
              }}
            />
          </ColumnView>
        </ModalPoup2>

        <View
          style={{
            marginHorizontal: 26,
            maxHeight: 115.69,
            marginVertical: 15,
          }}>
          <RowView style={{justifyContent: 'space-between'}}>
            <ColumnView
              style={{
                justifyContent: 'space-between',
                height: 66,
              }}>
              <NormalBoldLabel text={'터치콘 지갑 주소'} />
              <NormalLabel text={walletAddress} style={{maxWidth: 200}} />
            </ColumnView>
            <QRCode value={walletAddress} />
          </RowView>
        </View>

        <BottomButton
          text={'지갑 주소 복사하기'}
          style={{marginBottom: 15}}
          onPress={copyClipboard}
        />

        <View style={styles.under}>
          <HeaderThickBottomLine />
          {/* 터치콘 */}

          <View style={styles.back1}>
            <RowView style={{justifyContent: 'space-between'}}>
              <Text style={styles.tx1}>터치콘</Text>

              {/* 터치콘 보내기 모달 적용 보내기  */}
              <TouchableOpacity onPress={() => clickedTouchCon()}>
                <RowView
                  style={{
                    backgroundColor: '#FD7F36',
                    width: 104,
                    height: 40,
                    justifyContent: 'space-between',
                    borderRadius: 5,
                    marginRight: 20,
                    marginTop: 20,
                  }}>
                  <Text
                    style={{fontSize: 15, marginLeft: 13, color: '#ffffff'}}>
                    보내기
                  </Text>
                  <Image
                    source={require('../../../assets/icons/pass_wh.png')}
                    style={{width: 26, height: 23, marginRight: 9}}
                  />
                </RowView>
              </TouchableOpacity>
            </RowView>
            <RowView>
              <Image
                source={require('../../../assets/icons/wallet_logo.png')}
                style={styles.logo}
              />

              <ColumnView style={{marginBottom: 26}}>
                <Text style={styles.tx2}>{coins?.TouchCon}</Text>
                <Text
                  style={
                    styles.tx2
                  }>{`1 TOC = ${coinPrice?.TouchCon?.toString().replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ',',
                )}원`}</Text>
              </ColumnView>
            </RowView>
          </View>
          {/*{console.log(coins)}*/}
          {/* 터치콘 */}
          <BottomButton
            text={'거래소 가기'}
            onPress={() => {
              Alert.alert('준비중입니다.');
            }}
          />

          <View style={styles.back2}>
            <RowView style={{justifyContent: 'space-between'}}>
              <Text style={styles.tx1}>이더리움</Text>

              {/* 모달 적용 이더리움 보내기  */}
              <TouchableOpacity onPress={() => clickedEthereum()}>
                <RowView
                  style={{
                    backgroundColor: '#FD7F36',
                    width: 104,
                    height: 40,
                    justifyContent: 'space-between',
                    borderRadius: 5,
                    marginRight: 20,
                    marginTop: 20,
                  }}>
                  <Text
                    style={{fontSize: 15, marginLeft: 13, color: '#ffffff'}}>
                    보내기
                  </Text>
                  <Image
                    source={require('../../../assets/icons/pass_wh.png')}
                    style={{width: 26, height: 23, marginRight: 9}}
                  />
                </RowView>
              </TouchableOpacity>
            </RowView>
            <RowView>
              <Image
                source={require('../../../assets/icons/wallet_logo.png')}
                style={styles.logo}
              />
              <ColumnView style={{marginBottom: 26}}>
                <Text style={styles.tx2}>{coins?.Ethereum}</Text>
                <Text
                  style={
                    styles.tx2
                  }>{`1 ETH = ${coinPrice?.Ethereum?.toString().replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ',',
                )}원`}</Text>
              </ColumnView>
            </RowView>
          </View>

          {/* 이더리움 */}
        </View>
      </ScrollView>
      {/* <HeaderThickBottomLine /> */}
    </WhiteSafeAreaView>
  );
};

export default view;

const styles = StyleSheet.create({
  under: {
    marginTop: 15,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  back1: {
    marginHorizontal: 15,
    marginVertical: 26,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#c4c4c4c',
  },
  back2: {
    marginHorizontal: 15,
    marginBottom: 26,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#c4c4c4c',
  },

  tx1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 26,
  },
  tx2: {
    color: '#000000',
    fontSize: 12,
    margin: 5,
  },

  logo: {
    width: 56,
    height: 50,
    marginLeft: 20,
    marginBottom: 22,
  },
  modal_text1: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
    marginTop: 37,
    marginBottom: 45,
  },
});

const BtnPass = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <RowView
        style={{
          backgroundColor: '#FD7F36',
          width: 104,
          height: 40,
          justifyContent: 'space-between',
          borderRadius: 5,
          marginRight: 20,
          marginTop: 20,
        }}>
        <Text style={{fontSize: 15, marginLeft: 13, color: '#ffffff'}}>
          보내기
        </Text>
        <Image
          source={require('../../../assets/icons/pass_wh.png')}
          style={{width: 26, height: 23, marginRight: 9}}
        />
      </RowView>
    </TouchableOpacity>
  );
};
