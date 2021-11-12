import React, {useEffect, useState, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
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

const {width} = Dimensions.get('window');

const view = ({navigation}) => {
  const [num, setNum] = useState(0);

  useEffect(() => {
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
  }, []);

  const increase = useCallback(() => {
    setNum(num + 1);
  }, []);

  return (
    <WhiteSafeAreaView>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContainer}
      >
        <Swiper
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
            backgroundColor: '#FD7F36',
            width: 10,
            height: 10,
            borderRadius: 5,
            marginLeft: 20,
          }}
          paginationStyle={{
            // position: 'relative',
            bottom: 9,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate('Thumbnail1')}
            style={{flex: 1, justifyContent: 'center'}}
          >
            <RowView style={styles.swiperContentWrapper}>
              <NormalBoldLabel
                text={'유럽 미인들의 필수품'}
                style={{color: '#fff'}}
              />
              <NormalBoldLabel
                text={'카오리온 화장품'}
                style={{color: '#fff', fontSize: 20, lineHeight: 24}}
              />
            </RowView>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Thumbnail2')}
            style={{flex: 1, justifyContent: 'center'}}
          >
            <RowView style={styles.swiperContentWrapper}>
              <NormalBoldLabel
                text={'매일 매일 출석만 해도!'}
                style={{color: '#fff'}}
              />
              <NormalBoldLabel
                text={'터치토큰 증정'}
                style={{color: '#fff', fontSize: 20, lineHeight: 24}}
              />
            </RowView>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Thumbnail3')}
            style={{flex: 1, justifyContent: 'center'}}
          >
            <RowView style={styles.swiperContentWrapper2}>
              <NormalBoldLabel
                text={'터치토큰,' + '\n' + '적립해서 이자 받으셔야죠!'}
                style={{color: '#fff', fontSize: 20, lineHeight: 24}}
              />
            </RowView>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Thumbnail4')}
            style={{flex: 1, justifyContent: 'center'}}
          >
            <RowView style={styles.swiperContentWrapper3}>
              <NormalBoldLabel
                text={
                  '광고스캔 랜덤보상' +
                  '\n' +
                  '매월 매년 참여 업체가 늘어납니다!'
                }
                style={{color: '#fff', fontSize: 20, lineHeight: 24}}
              />
            </RowView>
          </TouchableOpacity>
        </Swiper>

        <BottomButton
          text={'오늘 출석하기'}
          onPress={increase}
          style={styles.attendBtn}
        />

        <Text style={styles.attendTxt}>
          출석일수 <Text style={{fontSize: 26}}>{num}</Text>일
        </Text>
        <CalendarTc onDayPress={() => setNum(num + 1)} />
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
