import React, {useEffect, useState, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import BottomButton from '../../../components/BottomButton';
import CalendarTc from '../../../components/CalendarTc';
import SwiperAd from '../../../components/SwiperAd';
import Touchable from '../../../components/Touchable';
import AntDesign from 'react-native-vector-icons/AntDesign';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';
import {NormalBoldLabel} from '../../../components/Label';
import TouchableNoFeedback from '../../../components/TouchableNoFeedback';
import Swiper from 'react-native-swiper';
import RowView from '../../../components/RowView';
import dayjs from 'dayjs';
import api from '../../../api';
import {useSelector} from 'react-redux';

const {width} = Dimensions.get('window');

const view = ({navigation}) => {
  const auth = useSelector(state => state.auth);
  const [dates, setDates] = useState([]);
  const [coin, setCoin] = useState([]);
  const [isEnable, setIsEnable] = useState(true);

  console.log(isEnable);

  let today = dayjs(new Date()).format('YYYY-MM-DD');
  useEffect(() => {
    fetchTotalCoin();
    AttendanceRecord();
  }, []);
  useEffect(() => {
    // header Main페이지로 이동.
    navigation.setOptions({
      headerLeft: () => null,
      headerRight: () => (
        <Touchable onPress={() => navigation.navigate('Main')}>
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
    //  sesstionToken,Date ='YYYY-MM-DD'
    console.log('today', today);
  }, []);

  const Attendance = async () => {
    if (dates.filter(date => date[1] === today).length !== 0) {
      Alert.alert('금일은 출석 완료하였습니다');

      // navigation.navigate('PointCh', {coins: coin});
      navigation.navigate('Main');

      return;
    }

    console.log(isEnable);
    if (isEnable === false) {
      return;
    }
    setIsEnable(false);

    let body = {sessionToken: auth.sessionToken, Date: today};
    console.log(body);
    api
      .post('attendance', JSON.stringify(body), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        if (res.status !== 200) {
          return;
        }
        console.log(res.status);
        // navigation.navigate('PointCh', { coins: coin });
        navigation.navigate('Main');
        // Alert.alert('출석 되었습니다.');
      })
      .catch(err => {
        console.log('에러메세지', err);
        setIsEnable(true);
      });
  };

  const AttendanceRecord = async () => {
    let body = {sessionToken: auth.sessionToken};
    console.log(body);
    api
      .post('attendancerecord', JSON.stringify(body), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        if (res.status !== 200) {
          return;
        }

        // console.log('11111', res);
        // console.log(res?.data.Result);
        console.log(res?.data.Result);
        setDates(res?.data?.Result);
      })
      .catch(err => {
        console.log('에러메세지 Record', err);
      });
  };

  const fetchTotalCoin = async () => {
    let body = {sessionToken: auth.sessionToken};
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await api.post('balance', JSON.stringify(body), config);
      console.log(res?.data?.Result);
      setCoin(res?.data?.Result);

      console.log('coin', coin);
      // navigation.navigate('Wallet');
      // console.log('test', res.data.Result);
    } catch (err) {
      // Alert.alert('', '서버와 통신에 실패');
      console.log('err', err);
    }
  };
  const menu = {
    id: 1,
    name: 'CAOLION',
    path: 'GfCaolion',
    img: require('../../../assets/images/taa/taa_log3.png'),
    title: 'CAOLION',
    subtitle: '한국 천연화장품의 메카, 카오리온',
    buttonUrl: 'Shopping',
    footer:
      '카오리온 화장품에서 취급하는 모든 제품 구매에 리워드콘이 제공됩니다.\n자세한 것은 카오리온 이벤트를 참조하시기 바랍니다.',
  };

  return (
    <WhiteSafeAreaView>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContainer}>
        <Swiper
          scrollEnabled={false}
          autoplay
          style={styles.swiperContainer}
          dotStyle={{
            backgroundColor: '#c4c4c4',
            width: 7,
            height: 7,
            borderRadius: 3.5,
            marginLeft: 20,
          }}
          activeDotStyle={{
            backgroundColor: '#5F408F',
            width: 10,
            height: 10,
            borderRadius: 5,
            marginLeft: 20,
          }}
          paginationStyle={{
            zIndex: 1,
            position: 'absolute',
            bottom: 0,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('GfCaolion', {menu})}
            style={{flex: 1, justifyContent: 'center'}}>
            {/* <RowView style={styles.swiperContentWrapper}>
              <NormalBoldLabel
                text={'유럽 미인들의 필수품'}
                style={{color: '#fff'}}
              />
              <NormalBoldLabel
                text={'카오리온 화장품'}
                style={{color: '#fff', fontSize: 20, lineHeight: 24}}
              />
            </RowView> */}
            <Image
              source={require('../../../assets/images/caorion_swiper.png')}
              style={{width: '100%', height: '100%'}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Thumbnail2')}
            style={{flex: 1, justifyContent: 'center'}}>
            {/* <RowView style={styles.swiperContentWrapper}>
              <NormalBoldLabel
                text={'매일 매일 출석만 해도!'}
                style={{color: '#fff'}}
              />
              <NormalBoldLabel
                text={'터치토큰 증정'}
                style={{color: '#fff', fontSize: 20, lineHeight: 24}}
              />
            </RowView> */}
            <Image
              source={require('../../../assets/images/thumnail_swiper2.png')}
              style={{width: '100%', height: '100%'}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Thumbnail3')}
            style={{flex: 1, justifyContent: 'center'}}>
            <Image
              source={require('../../../assets/images/thumnail_swiper3.png')}
              style={{width: '100%', height: '100%'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Thumbnail4')}
            style={{flex: 1, justifyContent: 'center'}}>
            <Image
              source={require('../../../assets/images/thumnail_swiper4.png')}
              style={{width: '100%', height: '100%'}}
            />
          </TouchableOpacity>
        </Swiper>

        <BottomButton
          text={
            dates.filter(date => date[1] === today).length !== 0
              ? '금일 출석완료'
              : '오늘 출석하기'
          }
          onPress={Attendance}
          style={styles.attendBtn}
        />

        <Text style={styles.attendTxt}>
          출석일수 <Text style={{fontSize: 26}}>{dates.length}</Text>일
        </Text>
        <CalendarTc dates={dates} />
      </ScrollView>
    </WhiteSafeAreaView>
  );
};

export default view;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 80,
  },
  attendBtn: {
    marginVertical: 35,
  },
  attendTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0068D9',
    alignSelf: 'center',
  },
  swiperContainer: {height: 100},
  swiperContentWrapper: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: 33,
    alignItems: 'center',
    backgroundColor: '#82A9CD',
    // paddingBottom: 24
  },
  swiperContentWrapper2: {
    flex: 1,
    paddingHorizontal: 33,
    alignItems: 'center',
    backgroundColor: '#FFB82E',
    // paddingBottom: 24
  },
  swiperContentWrapper3: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: 33,
    alignItems: 'center',
    backgroundColor: '#80D5AC',
    // paddingBottom: 24
  },
  stackingWrapper: {
    marginTop: 25,
    marginHorizontal: 17.5,
    paddingVertical: 9.5,
    paddingHorizontal: 21,
    backgroundColor: '#0E0F0FCC',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
