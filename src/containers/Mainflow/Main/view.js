import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Navbar from '../../../components/Navbar/view';
import Swiper from 'react-native-swiper';
import RowView from '../../../components/RowView';
import Touchable from '../../../components/Touchable';
import {NormalBoldLabel, NormalLabel} from '../../../components/Label';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';
import TouchableNoFeedback from '../../../components/TouchableNoFeedback';
import Entypo from 'react-native-vector-icons/Entypo';

const AD_MENU = [
  {id: 1, name: 'CAOLION', path: 'GfCaolion'},
  {id: 2, name: 'MEGAM', path: 'GfMegaMall'},
  {id: 3, name: '안동국밥', path: 'GfGukBab'},
];

function leftPad(value) {
  if (value >= 10) {
    return value;
  }
  return `0${value}`;
}

function toStringByFormatting(source, delimiter = '-') {
  const year = source.getFullYear();
  const month = leftPad(source.getMonth() + 1);
  const day = leftPad(source.getDate());
  return [year, month, day].join(delimiter);
}

export default function Main({navigation}) {
  return (
    <WhiteSafeAreaView>
      <Navbar />
      <ScrollView
        style={styles.contentContainer}
        contentContainerStyle={{paddingBottom: 50}}>
        <RowView
          style={{
            paddingHorizontal: 24,
            marginTop: 17,
            flex: 1,
          }}>
          {/* 최상단 터치콘 박스 로고와 함께 있음 start */}
          <TouchableNoFeedback
            style={styles.coinBtn}
            onPress={() => navigation.navigate('TouchCon')}>
            <Image
              source={require('../../../assets/icons/coin_icon.png')}
              style={{
                width: 71,
                height: 70,
              }}
            />
            <View style={{alignItems: 'flex-start', width: '100%', margin: 20}}>
              <NormalBoldLabel
                text={'내 터치콘'}
                style={{
                  fontSize: 20,
                  lineHeight: 24,
                  color: '#000000',
                }}
              />
            </View>
          </TouchableNoFeedback>
          {/* 최상단 터치콘 박스 로고와 함께 있음 end */}

          {/* 우측 스켄 이미지 start */}
          <Touchable onPress={() => navigation.navigate('MyCoupon')}>
            <Image
              source={require('../../../assets/images/scan.png')}
              style={{
                width: 86,
                height: 86,
                marginLeft: 11,
                // width: width * 0.24,
                // height: height * 0.24,
              }}
            />
          </Touchable>
          {/* 우측 스켄 이미지 end*/}
        </RowView>

        {/* 공지 글 들어올 자리 */}
        <NormalLabel
          style={{
            textAlign: 'center',
            color: '#555',
            paddingVertical: 4,
            marginTop: 17,
            backgroundColor: 'rgba(14, 15, 15, 0.15)',
          }}
          text={
            '[공지] 신규 광고주 제휴안내' +
            toStringByFormatting(new Date(), '.')
          }
        />

        {/* 이벤트 스와이프 */}
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
            onPress={() => navigation.navigate('Thumbnail1')}
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

        <View style={styles.stackingWrapper}>
          <NormalBoldLabel text={'TOC 스테이킹 하기'} style={{color: '#fff'}} />
          <Image
            style={{width: 25, height: 16}}
            source={require('../../../assets/icons/stacking_arrow.png')}
          />
          <Touchable
            style={styles.stackingBtn}
            onPress={() => {
              navigation.navigate('Staking');
            }}>
            <NormalBoldLabel text={'신청'} style={{color: '#fff'}} />
          </Touchable>
        </View>

        <View style={styles.adContainer}>
          <NormalBoldLabel
            text={'광고 스캔 랜덤 보상 제휴업체'}
            style={styles.adTopText}
          />
          {AD_MENU.map((menu, i) => (
            <AdMenu menu={menu} index={i} key={i} />
          ))}
        </View>

        {/* 터치 쇼핑몰 쇼핑하기 start */}
        <Touchable
          onPress={() => navigation.navigate('Shopping')}
          style={styles.shoppingBtn}>
          <NormalBoldLabel
            text={'터치 쇼핑몰 쇼핑하기'}
            style={{
              color: '#fff',
              fontSize: 20,
              lineHeight: 24,
              flex: 1,
              textAlign: 'center',
            }}
          />
          {/*<NormalBoldLabel text={'+'} style={{marginLeft: 29, color: '#fff'}} />*/}
          <Entypo
            name="plus"
            size={32}
            color={'#fff'}
            style={{position: 'absolute', right: 10}}
          />
        </Touchable>
        {/* 터치 쇼핑몰 쇼핑하기 end */}

        {/* 최하단 : 나의 리워드*/}
      </ScrollView>

      <Touchable
        style={styles.bottomBtn}
        onPress={() => {
          navigation.navigate('SaveCoupon');
        }}>
        <NormalBoldLabel text={'리워드콘 스캔 이력'} style={{color: '#fff'}} />
      </Touchable>
    </WhiteSafeAreaView>
  );
}

const AdMenu = ({menu, index}) => {
  const navigation = useNavigation();

  return (
    <RowView
      style={{
        ...styles.adContent,
        borderBottomWidth: index !== AD_MENU.length - 1 ? 1 : 0,
      }}>
      <NormalBoldLabel text={menu.name} style={{color: '#555'}} />
      <RowView>
        <NormalBoldLabel text={menu.name} style={{color: '#555'}} />
        <Touchable
          onPress={() => navigation.navigate(menu.path)}
          style={styles.adBtn}>
          <NormalBoldLabel
            text={'GO'}
            style={{color: '#fff', fontSize: 18, lineHeight: 22}}
          />
        </Touchable>
      </RowView>
    </RowView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  coinBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingLeft: 12,
    paddingRight: 20,
    borderColor: '#5F408F',
    borderRadius: 5,
    borderTopWidth: 1.5,
    borderBottomWidth: 1.5,
  },
  swiperContainer: {
    height: 100,
  },
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
  stackingBtn: {
    paddingVertical: 7,
    paddingHorizontal: 10.5,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 10,
  },
  adContainer: {
    marginTop: 25,
    marginHorizontal: 23,
    borderColor: '#c4c4c4',
    borderWidth: 1,
    borderRadius: 10,
  },
  adTopText: {
    color: '#555',
    textAlign: 'center',
    paddingVertical: 17,
    backgroundColor: '#c4c4c4',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  adContent: {
    backgroundColor: '#fff',
    borderColor: '#c4c4c4',
    justifyContent: 'space-between',
    paddingTop: 8,
    paddingBottom: 6,
    paddingLeft: 16,
    paddingRight: 13,
  },
  adBtn: {
    backgroundColor: '#5F408F',
    borderRadius: 53,
    paddingVertical: 7.5,
    paddingHorizontal: 25,
    marginLeft: 14,
  },
  bottomBtn: {
    paddingVertical: 15.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(14, 15, 15, 0.8)',
  },
  shoppingBtn: {
    marginTop: 40,
    marginHorizontal: 24,
    paddingVertical: 15,
    backgroundColor: '#5F408F',
    borderRadius: 53,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
