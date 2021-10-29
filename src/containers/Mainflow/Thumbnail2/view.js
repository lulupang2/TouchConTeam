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
import BottomButton from '../../../components/BottomButton';
import {NormalBoldLabel} from '../../../components/Label';
import RowView from '../../../components/RowView';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';

const view = () => {
  return (
    <WhiteSafeAreaView>
      {/* 스와이프 들어갈 곳 start*/}
      <View style={styles.back}>
        <RowView style={styles.arr}>
          <Text style={styles.tx1}>매일 매일 출석만 해도!</Text>
          <Text style={styles.tx2}>터치토큰</Text>
          <Text style={styles.tx1}>증정</Text>
        </RowView>
      </View>
      {/* 스와이프 들어갈 곳 end */}
      <BottomButton text={'오늘 출석하기'} />

      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#0068D9',
          alignSelf: 'center',
        }}>
        출석일수 2일
      </Text>

      <View
        style={{
          borderWidth: 1,
          borderColor: '#AAAAAAA',
          marginHorizontal: 24,
          marginTop: 35,
          minHeight: 291,
        }}>
        <Text>달력 들어올 곳</Text>
      </View>
    </WhiteSafeAreaView>
  );
};

export default view;

const styles = StyleSheet.create({
  back: {
    backgroundColor: '#82A9CD',
    minHeight: 100,
    marginBottom: 35,
  },
  arr: {
    marginHorizontal: 33,
    marginVertical: 40,
    justifyContent: 'space-between',
  },
  tx1: {fontSize: 15, color: '#ffffff'},
  tx2: {fontSize: 20, color: '#ffffff'},
});
