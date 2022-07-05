import React, {useCallback, useState} from 'react';
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {BANNER_LIST} from '../../../mock/dummy';
import Banner from '../../component/Home/Banner';
import HeaderBar from '../../component/Home/HeaderBar';
import HomeSlide from '../../component/Home/HomeSlide';
import PartnerList from '../../component/Home/PartnerList';
import ModalContainer from '../../component/Modal/Modal';
import DailyCheck from '../../container/DailyCheck/DailyCheck';
import {heightPercentage, widthPercentage} from '../../util/ResponsiveSize';
const Header_Maximum_Height = 100;
const Header_Minimum_Height = 56;
export default function HomeScreen() {
  const [isDailyModal, setDailyModal] = useState(false);
  const [isLogoModal, setLogoModal] = useState(false);
  const [isAlramModal, setAlramModal] = useState(false);

  //모달 핸들링
  const toggleDailyModal = useCallback(() => {
    setDailyModal(!isDailyModal);
  }, [isDailyModal]);
  const toggleLogoModal = useCallback(() => {
    setLogoModal(!isLogoModal);
  }, [isLogoModal]);
  const toggleAlramModal = useCallback(() => {
    setAlramModal(!isAlramModal);
  }, [isAlramModal]);

  //헤더메뉴 애니메이션
  const AnimatedHeaderValue = new Animated.Value(0);
  const AnimateHeaderBackgroundColor = AnimatedHeaderValue.interpolate({
    inputRange: [500, 600 - Header_Minimum_Height],
    outputRange: ['#FFFFFF00', '#FFFFFF'],
    extrapolate: 'clamp',
  });
  const AnimateHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [500, 600 - Header_Minimum_Height],
    outputRange: [Header_Maximum_Height, Header_Minimum_Height],
    extrapolate: 'clamp',
  });
  const AnimateHeaderTextColor = AnimatedHeaderValue.interpolate({
    inputRange: [500, 600 - Header_Minimum_Height],
    outputRange: ['#FFF', '#000'],
    extrapolate: 'clamp',
  });
  // const AnimateIcons = AnimatedHeaderValue.interpolate({
  //   inputRange: [500, 600 - Header_Minimum_Height],
  //   outputRange: ['#FFF', '#000'],
  //   extrapolate: 'clamp',
  // });

  const AnimateHeaderBorder = AnimatedHeaderValue.interpolate({
    inputRange: [500, 600 - Header_Minimum_Height],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  return (
    <>
      <View style={styles.flex}>
        <ScrollView
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{paddingBottom: 160}}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: AnimatedHeaderValue}}}],
            {useNativeDriver: false},
          )}>
          {/* @ts-ignore */}
          <Banner data={BANNER_LIST} />
          <HomeSlide section={'HOTISSUE'} />
          <HomeSlide section={'FORYOU'} />
          <HomeSlide section={'BESTPRODUCT'} modal={toggleAlramModal} />
          <HomeSlide section={'WITHUS'} modal={toggleLogoModal} />
        </ScrollView>
        <TouchableOpacity
          onPress={toggleDailyModal}
          style={styles.dailyCheckContainer}>
          <Image
            source={require('../../../assets/icons/dailyCheckIcon.png')}
            resizeMode={'cover'}
            style={styles.fullImg}
          />
        </TouchableOpacity>
      </View>
      <ModalContainer
        title="출석체크"
        hideModal={toggleDailyModal}
        visible={isDailyModal}>
        <DailyCheck />
      </ModalContainer>
      <ModalContainer
        title="터치콘 제휴사"
        hideModal={toggleLogoModal}
        visible={isLogoModal}>
        <PartnerList />
      </ModalContainer>
      {/* <ModalContainer
        title="터치콘 제휴사"
        hideModal={toggleAlramModal}
        visible={isAlramModal}
      /> */}
      <HeaderBar
        height={AnimateHeaderHeight}
        background={AnimateHeaderBackgroundColor}
        border={AnimateHeaderBorder}
        color={AnimateHeaderTextColor}
        money={'15,560'}
      />
    </>
  );
}
const styles = StyleSheet.create({
  dailyCheckContainer: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    borderRadius: 71,
    flexDirection: 'row',
    width: widthPercentage(71),
    height: heightPercentage(71),
  },
  fullImg: {width: '100%', height: '100%'},
  flex: {flex: 1, backgroundColor: '#FFF'},
  // MainContainer: {
  //   flex: 1,
  //   paddingTop: Platform.OS == 'ios' ? 20 : 0,
  // },

  // HeaderInsideTextStyle: {
  //   color: '#fff',
  //   fontSize: 18,
  //   textAlign: 'center',
  // },

  // TextViewStyle: {
  //   textAlign: 'center',
  //   color: '#000',
  //   fontSize: 18,
  //   margin: 5,
  //   padding: 7,
  //   backgroundColor: '#ECEFF1',
  // },
});
