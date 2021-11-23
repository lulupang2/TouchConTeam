import {useNavigation} from '@react-navigation/native';
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
  ScrollViewBase,
  ScrollView,
  Alert,
} from 'react-native';
import HeaderBottomLine from '../../../components/HeaderBottomLine';
import {NormalBoldLabel} from '../../../components/Label';
import RowView from '../../../components/RowView';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Touchable from '../../../components/Touchable';
import api from '../../../api';
import {useSelector} from 'react-redux';
import {ModalPoup} from '../../../components/Modals';
import ColumnView from '../../../components/ColumnView';
import BottomButton from '../../../components/BottomButton';
import QRCode from 'react-native-qrcode-svg';

const ScInventory = [
  {id: 1, Date: '21.04.05', Amount: '200', Company: '카오리온', Qr: 'klsdjfjd'},
  {id: 2, Date: '21.04.05', Amount: '10', Company: '메가', Qr: 'klsdjfjd'},
  {id: 3, Date: '21.04.05', Amount: '3,300', Company: '안동국밥'},
  {id: 4, Date: '21.04.05', Amount: '3,000', Company: '안동국밥'},
  {id: 5, Date: '21.04.05', Amount: '3,000', Company: '안동국밥'},
  {id: 6, Date: '21.04.05', Amount: '2,000', Company: '안동국밥'},
  {id: 7, Date: '21.04.05', Amount: '3,000', Company: '안동국밥'},
  {id: 8, Date: '21.04.05', Amount: '3,000', Company: '안동국밥'},
  {id: 9, Date: '21.04.05', Amount: '3,000', Company: '안동국밥'},
];

const view = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [company, setCompany] = useState('');
  const auth = useSelector(state => state.auth);
  const [historyPosts, setHistoryPosts] = useState([]);
  const [qrNum, setQrNum] = useState('');

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
  useEffect(() => {
    getData();
  }, []);

  //Result={Date: 날짜, Amount: 쿠폰금액, Company: 업체명, Qr: 쿠폰id값}
  const getData = async () => {
    let body = {
      sessionToken: auth.sessionToken,
    };
    api
      .post('usercouponlist', JSON.stringify(body), {
        headers: {'Content-Type': 'application/json'},
      })
      .then(res => {
        if (res.status !== 200) {
          return;
        }
        console.log('ddd:', res);
        setHistoryPosts(res.data.Result);
      })
      .catch(err => console.log('에러메세지', err));
  };
  return (
    <WhiteSafeAreaView>
      {/* 모달 부분 */}
      <ModalPoup visible={visible}>
        <RowView
          style={{
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <View style={{width: 10}} />
          <NormalBoldLabel text={'스캔내역을 확인해 주세요'} />
          <TouchableOpacity onPress={() => setVisible(false)}>
            <Image
              source={require('../../../assets/images/x.png')}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
              }}
            />
          </TouchableOpacity>
        </RowView>

        <RowView
          style={{
            backgroundColor: 'red',
            marginHorizontal: 30,
            justifyContent: 'space-between',
          }}>
          <ColumnView style={{backgroundColor: 'blue', marginLeft: 70}}>
            <NormalBoldLabel text={date} />
            <NormalBoldLabel text={amount} />
            <NormalBoldLabel text={company} />
          </ColumnView>
          <QRCode value={qrNum} />
        </RowView>
        <BottomButton
          text={'확인'}
          style={{marginTop: 20}}
          onPress={() => {
            setVisible(false);
          }}
        />
      </ModalPoup>
      {/* 모달 부분 */}
      <HeaderBottomLine />
      <RowView style={styles.listHeaderBack}>
        <Text style={styles.tx1}>날짜</Text>
        <Text style={styles.tx2}>수량</Text>
        <Text style={styles.tx3}>회사</Text>
      </RowView>

      <ScrollView style={styles.scContainer}>
        {historyPosts.map((menu, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setVisible(true);
              setQrNum(menu.Qr);
              setDate(menu.Date);
              setAmount(menu.Amount);
              setCompany(menu.Company);
            }}>
            <ScHistory menu={menu} index={index} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </WhiteSafeAreaView>
  );
};

export default view;

const ScHistory = ({menu, index}) => {
  const navigation = useNavigation();

  //Result={Date: 날짜, Amount: 쿠폰금액, Company: 업체명, Qr: 쿠폰id값}x
  return (
    <View>
      <RowView
        style={{
          justifyContent: 'space-between',
          width: 359,
          borderWidth: 1,
          borderColor: '#c4c4c4',
          backgroundColor: index % 2 === 1 ? '#EBEBEB' : '#FFFFFF',
        }}>
        <RowView
          style={{justifyContent: 'space-between', width: 166, marginLeft: 22}}>
          <NormalBoldLabel text={menu?.Date} style={styles.day} />

          <NormalBoldLabel text={menu?.Amount} style={{color: '#FD7F36'}} />
        </RowView>
        <NormalBoldLabel text={menu?.Company} style={styles.company} />
      </RowView>
    </View>
  );
};

const styles = StyleSheet.create({
  company: {width: 60, position: 'relative', left: -30},
  scContainer: {
    marginHorizontal: 17,
  },
  listHeaderBack: {
    backgroundColor: 'rgba(14, 15, 15, 0.8)',
    marginTop: 13,
    marginHorizontal: 16,
    justifyContent: 'space-between',
    height: 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  day: {marginVertical: 17},
  tx1: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 38,
    fontWeight: 'bold',
  },
  tx2: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  tx3: {color: '#fff', fontSize: 15, marginRight: 38, fontWeight: 'bold'},

  adContent: {
    backgroundColor: '#fff',
    borderColor: '#c4c4c4',
    justifyContent: 'space-between',
  },
});
