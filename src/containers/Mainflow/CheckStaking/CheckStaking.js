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
import {NormalBoldLabel, NormalLabel} from '../../../components/Label';
import RowView from '../../../components/RowView';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Touchable from '../../../components/Touchable';
import api from '../../../api';
import dayjs from 'dayjs';
import {useSelector} from 'react-redux';

const {width} = Dimensions.get('window');

const CheckStaking = ({navigation}) => {
  const auth = useSelector(state => state.auth);
  const [changingDate, setChangingDate] = useState('21.10.05');
  const [releaseYear, setReleaseYear] = useState('');
  const [releaseMonth, setReleaseMonth] = useState('');
  const ScInventory = [
    {
      id: 1,
      Date: '21.10.05',
      ApplingAmount: '200',
      ExpirationAmount: '200',
    },
    {id: 2, Date: '21.04.05', ApplingAmount: '10', ExpirationAmount: '10'},
    {
      id: 3,
      Date: '21.04.05',
      ApplingAmount: '3,000',
      ExpirationAmount: '3,000',
    },
    {
      id: 4,
      Date: '21.04.05',
      ApplingAmount: '3,000',
      ExpirationAmount: '3,000',
    },
    {
      id: 5,
      Date: '21.04.05',
      ApplingAmount: '3,000',
      ExpirationAmount: '3,000',
    },
    {
      id: 6,
      Date: '21.04.05',
      ApplingAmount: '3,000',
      ExpirationAmount: '3,000',
    },
  ];
  const [historyPosts, setHistoryPosts] = useState(ScInventory);

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
    // fetchTotalCoin();
    chageDate();
  }, []);
  const fetchTotalCoin = async () => {
    let body = {sessionToken: auth.sessionToken};
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await api.post('stakinguser', JSON.stringify(body), config);
      console.log(res);
      if (res?.data?.Result?.length === 0) {
        return;
      }
      setHistoryPosts(res?.data.Result);
      setChangingDate(res?.data.Result.date);
      // navigation.navigate('Wallet');
      // console.log('test', res.data.Result);
    } catch (err) {
      Alert.alert('', '서버와 통신에 실패');
      console.log('err', err);
      console.log('err.res', err.response);
    }
  };

  const chageDate = () => {
    const newDate = changingDate.split('.');
    let yaer = 20 + newDate[0];
    let month = newDate[1];
    yaer = parseInt(yaer);
    month = parseInt(month);

    if (month === 10) {
      yaer = yaer + 1;
      month = 1;
    } else {
      month = month + 3;
    }

    month = Number(month).toString();
    if (Number(month) < 10 && month.length == 1) {
      month = '0' + month;
    }

    console.log('0', yaer);
    console.log('1', month);

    setReleaseYear(yaer);
    setReleaseMonth(month);
  };

  return (
    <WhiteSafeAreaView>
      <ScrollView>
        <HeaderBottomLine />

        <RowView style={styles.listHeaderBack}>
          <Text style={styles.tx1}>신청일자</Text>
          <Text style={styles.tx2}>신청수량</Text>
          <Text style={styles.tx3}>만기시 수량</Text>
        </RowView>
        <ScrollView style={styles.scContainer} nestedScrollEnabled={true}>
          {historyPosts?.map((menu, i) => (
            <ScHistory menu={menu} index={i} key={i} />
          ))}
        </ScrollView>
        <View style={styles.contentBox}>
          <ContextView
            text={'해제일자'}
            textValue={`${releaseYear}.${releaseMonth}.27`}
          />
          <ContextView text={'예치이자'} textValue={'약 3~7% 이내'} />
          <NormalLabel
            text={
              '[유의사항]\n\n' +
              '\t• 해제일자에 예치원금 및 이자가 함께 일괄 지급\n\t\t될 예정입니다.\n\n' +
              '\t• 송금 받는 지갑은 앱에 등록된 지갑을 기준으로\n\t\t전송됩니다.'
            }
            style={{
              marginTop: 47,
              marginBottom: 30,
              color: '#5F408F',
              fontSize: 15,
              lineHeight: 19,
              fontWeight: '700',
            }}
          />
        </View>
      </ScrollView>
    </WhiteSafeAreaView>
  );
};

export default CheckStaking;

const ScHistory = ({menu, index}) => {
  return (
    <RowView
      style={{
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#c4c4c4',
        backgroundColor: index % 2 === 1 ? '#EBEBEB' : '#FFFFFF',
      }}>
      <NormalBoldLabel text={menu?.Date} style={styles.day} />
      <NormalBoldLabel
        text={menu?.ApplingAmount}
        style={styles.applingAmount}
      />
      <NormalBoldLabel text={menu?.ExpirationAmount} style={styles.company} />
    </RowView>
  );
};

const ContextView = ({menu, text, textValue}) => {
  return (
    <>
      <NormalBoldLabel
        text={text}
        style={{
          color: '#000',
          fontWeight: '700',
          marginTop: 15,
        }}
      />
      <NormalBoldLabel text={textValue} style={styles.contentValue} />
    </>
  );
};

const styles = StyleSheet.create({
  applingAmount: {
    color: '#FD7F36',
    textAlign: 'center',
    position: 'relative',
    left: -27,
  },
  contentValue: {
    borderRadius: 5,
    color: '#000',
    borderWidth: 1,
    paddingVertical: 14,
    paddingLeft: 28,
    marginVertical: 15,
    borderColor: '#C4C4C4',
    fontWeight: '400',
  },
  contentBox: {marginHorizontal: 16},
  company: {
    width: 60,
    position: 'relative',
    left: -45,
    color: '#FD7F36',
    textAlign: 'center',
  },
  scContainer: {
    marginHorizontal: 16,
    height: 225,
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
  day: {marginVertical: 17, marginLeft: 38, color: '#000'},
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
