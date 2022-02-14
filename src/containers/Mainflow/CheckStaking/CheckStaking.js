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
import {useSelector} from 'react-redux';

const CheckStaking = ({navigation}) => {
  const auth = useSelector(state => state.auth);
  const [historyPosts, setHistoryPosts] = useState([]);
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
    fetchTotalCoin();
  }, []);
  const fetchTotalCoin = async () => {
    let body = {sessionToken: auth.sessionToken};
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await api.post('scanhistory', JSON.stringify(body), config);
      console.log(res);
      if (res?.data?.Result?.length === 0) {
        return;
      }
      setHistoryPosts(res?.data.Result);
      // navigation.navigate('Wallet');
      // console.log('test', res.data.Result);
    } catch (err) {
      Alert.alert('', '서버와 통신에 실패');
      console.log('err', err);
      console.log('err.res', err.response);
    }
  };

  return (
    <WhiteSafeAreaView>
      <HeaderBottomLine />
      <RowView style={styles.listHeaderBack}>
        <Text style={styles.tx1}>신청일자</Text>
        <Text style={styles.tx3}>신청수량</Text>
      </RowView>
      <ScrollView style={styles.scContainer}>
        {historyPosts?.map((menu, i) => (
          <ScHistory menu={menu} index={i} key={i} />
        ))}

        {/* <View style={styles.contentBox}> */}

        <ContextView text={'해제일자'} textValue={'2022.04.27'} />
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
        {/* </View> */}
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
        text={menu?.Amount}
        style={{color: '#5F408F', position: 'relative', left: -40}}
      />
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
  company: {width: 60, position: 'relative', left: -30},
  scContainer: {
    marginHorizontal: 16,
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
  day: {marginVertical: 17, marginLeft: 20},
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
