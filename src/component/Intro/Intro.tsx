import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  Animated,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {SlidingDot} from 'react-native-animated-pagination-dots';
import PagerView, {
  PagerViewOnPageScrollEventData,
} from 'react-native-pager-view';
import {IconButton} from 'react-native-paper';
//@ts-ignore
import IntroImg1 from '../../../assets/images/intro/intro1.png';
//@ts-ignore
import IntroImg2 from '../../../assets/images/intro/intro2.png';
//@ts-ignore
import IntroImg3 from '../../../assets/images/intro/intro3.png';
import {StackParamList} from '../../navigation/RootStack';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../util/ResponsiveSize';
import IntroDetails from './IntroDetails';
export type IntroProps = {
  img: any;
  mainText: string;
  subText: string;
  style: any;
  onPress?: void;
};
type Props = NativeStackScreenProps<StackParamList, 'Intro'>;

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

const INTRO_DATA = [
  {
    mainText: '세상에서 가장 쉬운 \n리워드앱',
    subText: '터치콘 브랜드 파트너에서 보내는 \n리워드콘을 획득하세요',
    img: IntroImg1,
    key: 0,
  },
  {
    mainText: 'QR스캔 한번이면\n적립 끝!',
    subText:
      '리워드콘에 있는 QR코드를 확인하세요.\n그리고 터치콘앱으로 스캔하세요.',
    img: IntroImg2,
    key: 1,
  },
  {
    mainText: '소비의 새로운\n패러다임',
    subText: '리워드콘은 "꽝"이 없습니다.\n꾸준히 적립만 해도 목돈이 됩니다!!!',
    img: IntroImg3,
    key: 2,
  },
];
export default function Intro({navigation}: Props) {
  // const [curPage, setPage] = React.useState(0);
  const width = Dimensions.get('window').width;
  const ref = React.useRef<PagerView>(null);
  const scrollOffsetAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const positionAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const inputRange = [0, INTRO_DATA.length];
  const scrollX = Animated.add(
    scrollOffsetAnimatedValue,
    positionAnimatedValue,
  ).interpolate({
    inputRange,
    outputRange: [0, INTRO_DATA.length * width],
  });

  const onPageScroll = React.useMemo(
    () =>
      Animated.event<PagerViewOnPageScrollEventData>(
        [
          {
            nativeEvent: {
              offset: scrollOffsetAnimatedValue,
              position: positionAnimatedValue,
            },
          },
        ],
        {
          useNativeDriver: false,
        },
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  // const onPress = useCallback(
  //   () => (): void => {
  //     navigation.navigate('Auth');
  //   },
  //   [],
  // );
  return (
    <SafeAreaView style={styles.flex}>
      <AnimatedPagerView
        initialPage={0}
        ref={ref}
        style={styles.PagerView}
        onPageScroll={onPageScroll}>
        {INTRO_DATA.map(item => (
          <IntroDetails
            key={item.key}
            img={item.img}
            mainText={item.mainText}
            subText={item.subText}
            style={styles.center}
          />
        ))}
      </AnimatedPagerView>
      <View style={styles.dotsContainer}>
        <SlidingDot
          marginHorizontal={widthPercentage(5)}
          containerStyle={styles.dot}
          data={INTRO_DATA}
          //@ts-ignore
          scrollX={scrollX}
          dotSize={fontPercentage(12)}
          dotStyle={styles.dotBackground}
          slidingIndicatorStyle={styles.activeDot}
        />
      </View>
      <View style={styles.buttonBox}>
        <IconButton
          icon="arrow-right"
          style={styles.button}
          color="#FFF"
          size={heightPercentage(56)}
          onPress={() => {
            navigation.navigate('Auth');
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#FFF',
  },
  PagerView: {
    flex: 1,
  },
  center: {
    flex: 1,
    paddingVertical: 30,
  },
  dotsContainer: {
    position: 'absolute',
    top: '50%',
    right: 0,
    left: 0,
  },

  activeDot: {
    backgroundColor: '#FA5C00',
  },
  dotBackground: {
    backgroundColor: '#CCCCCC',
  },
  dot: {
    bottom: 0,
  },

  buttonBox: {
    alignItems: 'center',
    marginBottom: heightPercentage(40),
  },
  button: {
    backgroundColor: '#333',
  },
});
