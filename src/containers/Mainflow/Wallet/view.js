import React from 'react';
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
} from 'react-native';

import {HeaderThickBottomLine} from '../../../components/HeaderBottomLine';
import RowView from '../../../components/RowView';
import ColumnView from '../../../components/ColumnView';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';
import BottomButton from '../../../components/BottomButton';

const view = () => {
  return (
    <WhiteSafeAreaView>
      <HeaderThickBottomLine />

      <Image
        source={require('../../../assets/images/wallet_tx_qr.png')}
        style={{
          marginHorizontal: 26,
          marginVertical: 15,
          width: 325,
          height: 116,
          resizeMode: 'contain',
        }}
      />

      <BottomButton text={'지갑 주소 복사하기'} />

      <View style={styles.under}>
        <HeaderThickBottomLine />
        {/* 터치콘 */}
        <ScrollView>
          <View style={styles.back1}>
            <RowView style={{justifyContent: 'space-between'}}>
              <Text style={styles.tx1}>터치콘</Text>
              <BtnPass />
            </RowView>
            <RowView>
              <Image
                source={require('../../../assets/icons/wallet_logo.png')}
                style={styles.logo}
              />
              <ColumnView style={{marginBottom: 26}}>
                <Text style={styles.tx2}>0</Text>
                <Text style={styles.tx2}>1 TOC = 100원</Text>
              </ColumnView>
            </RowView>
          </View>

          {/* 터치콘 */}
          <BottomButton text={'거래소 가기'} />
          {/* 이더리움 */}
          <View style={styles.back2}>
            <RowView style={{justifyContent: 'space-between'}}>
              <Text style={styles.tx1}>터치콘</Text>
              <BtnPass />
            </RowView>
            <RowView>
              <Image
                source={require('../../../assets/icons/wallet_logo.png')}
                style={styles.logo}
              />
              <ColumnView style={{marginBottom: 26}}>
                <Text style={styles.tx2}>0</Text>
                <Text style={styles.tx2}>1 TOC = 100원</Text>
              </ColumnView>
            </RowView>
          </View>
        </ScrollView>
        {/* 이더리움 */}
      </View>

      {/* <HeaderThickBottomLine /> */}
    </WhiteSafeAreaView>
  );
};

export default view;

const styles = StyleSheet.create({
  under: {
    marginTop: 15,
    width: '100%',
    height: 350,
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
});

const BtnPass = ({onPress}) => {
  return (
    <TouchableOpacity onPress={() => alert('보내기')}>
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
