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
} from 'react-native';
import BottomButton from '../../../components/BottomButton';
import ColumnView from '../../../components/ColumnView';
import {NormalBoldLabel, NormalLabel} from '../../../components/Label';
import {ModalPoup} from '../../../components/Modals';
import RowView from '../../../components/RowView';
import SwiperAd from '../../../components/SwiperAd';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Touchable from '../../../components/Touchable';
import {maxWidth} from 'yarn/lib/cli';

const view = ({navigation}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
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

  return (
    <WhiteSafeAreaView>
      <ModalPoup visible={visible}>
        <ColumnView style={styles.modal_flex}>
          <Text style={styles.modal_text}>준비중 입니다.</Text>
          <BottomButton text={'확인'} onPress={() => setVisible(false)} />
        </ColumnView>
      </ModalPoup>
      {/* 스와이프 들어갈 곳 start*/}
      <SwiperAd />
      {/* 스와이프 들어갈 곳 end */}

      <ScrollView
        style={{
          backgroundColor: '#fff',
          position: 'relative',
        }}>
        {/*<RowView style={styles.stackingWrapper}>*/}
        {/*  <NormalBoldLabel text={'TOC 스테이킹 하기'} style={{color: '#fff'}} />*/}

        {/*  <Image*/}
        {/*    style={{width: 25, height: 16}}*/}
        {/*    source={require('../../../assets/icons/stacking_arrow.png')}*/}
        {/*  />*/}
        {/*  <TouchableOpacity*/}
        {/*    onPress={() => navigation.navigate('Staking')}*/}
        {/*    style={styles.stackingBtn}>*/}
        {/*    <NormalBoldLabel text={'신청'} style={{color: '#fff'}} />*/}
        {/*  </TouchableOpacity>*/}
        {/*</RowView>*/}

        <RowView
          style={{
            paddingHorizontal: 24,
          }}>
          <View
            style={{
              backgroundColor: '#5F408F',
              height: 45,
              width: 7,
              borderTopRightRadius: 6,
              borderBottomRightRadius: 6,
            }}
          />
          <Text style={styles.text}>터치-스테이킹 안내</Text>
        </RowView>

        <NormalLabel
          style={{
            paddingTop: 20,
            paddingHorizontal: 22,
            color: '#777',
            fontSize: 11,
            maxWidth: 360,
            fontWeight: 'bold',
          }}
          text={
            '\u2022 터치-스테이킹이란?\n' +
            '터치콘 웰렛 앱 내에서 사용하지 않고 보유하신 터치콘을 예치하시면 분기단위로 예치 수량에 대해 일정한 보상을 드리는 제도입니다.\n\n' +
            '\u2022 시행 시기는?\n' +
            '매 분기 첫 달에 해당하는 10일까지 신청을 받습니다. 자세한 것은 공지사항을 참조하시기 바랍니다.\n\n' +
            '\u2022 보상이자율은?\n' +
            '매년 리워드 풀에서 5%의 재원으로 보상해드립니다. 분기별 예치 수량과 지급 수량을 환산하여 보상해 드리며 평균 3%~7%로 추정하고 있습니다\n\n' +
            '\u2022 예치 최저수량은?\n' +
            '서비스 초기는 최소 1000TOC 이상입니다\n\n' +
            '\u2022 터치-스테이킹이란?\n' +
            '매 분기가 끝나는 시점에 자동으로 지갑에 전송해드립니다' +
            '\n\n'
          }
        />
        <RowView style={styles.stackingWrapper}>
          <NormalBoldLabel text={'TOC 스테이킹 하기'} style={{color: '#fff'}} />

          <Image
            style={{width: 25, height: 16}}
            source={require('../../../assets/icons/stacking_arrow.png')}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('Staking')}
            style={styles.stackingBtn}>
            <NormalBoldLabel text={'신청'} style={{color: '#fff'}} />
          </TouchableOpacity>
        </RowView>
      </ScrollView>
    </WhiteSafeAreaView>
  );
};

export default view;

const styles = StyleSheet.create({
  stackingBtn: {
    paddingVertical: 7,
    paddingHorizontal: 10.5,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 10,
  },
  back: {
    backgroundColor: '#FFB82E',
    minHeight: 100,
  },
  arr: {
    marginHorizontal: 33,
    marginVertical: 40,
    justifyContent: 'space-between',
  },
  tx1: {fontSize: 20, color: '#ffffff', fontWeight: 'bold'},
  stackingWrapper: {
    minHeight: 49,
    marginHorizontal: 17.5,
    paddingHorizontal: 21,
    paddingVertical: 10,
    backgroundColor: '#0E0F0FCC',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  modal_text: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 47,
  },
  modal_flex: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 16,
  },
});
