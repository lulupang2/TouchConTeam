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
} from 'react-native';
import Swiper from 'react-native-swiper';
import {NormalBoldLabel} from '../../../components/Label';
import RowView from '../../../components/RowView';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const view = () => {
  return (
    <WhiteSafeAreaView>
      {/* 스와이프 들어갈 곳 start*/}
      <View style={styles.back}>
        <RowView style={styles.arr}>
          <Text style={styles.tx1}>
            광고스캔 랜덤보상{'\n'}매월 매년 참여 업체가 늘어납니다!
          </Text>
        </RowView>
      </View>
      {/* 스와이프 들어갈 곳 end */}

      <Image
        source={require('../../../assets/images/thumb4_line1.png')}
        style={{
          resizeMode: 'contain',
          width: width * 0.9,
          position: 'absolute',
          top: height * 0.2,
          right: width * 0.05,
        }}
      />
      <Image
        source={require('../../../assets/images/thumb4_line2.png')}
        style={{
          resizeMode: 'contain',
          width: width * 0.9,
          position: 'absolute',
          top: height * 0.4,
          right: width * 0.05,
        }}
      />
    </WhiteSafeAreaView>
  );
};

export default view;

const styles = StyleSheet.create({
  back: {
    backgroundColor: '#80D5AC',
    minHeight: 100,
  },
  arr: {
    marginHorizontal: 33,
    marginVertical: 40,
    justifyContent: 'space-between',
  },
  tx1: {fontSize: 20, color: '#ffffff'},
});
