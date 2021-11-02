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
  ScrollView,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {NormalBoldLabel} from '../../../components/Label';
import RowView from '../../../components/RowView';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';

const view = () => {
  return (
    <WhiteSafeAreaView>
      {/* 스와이프 들어갈 곳 start*/}
      <Swiper
        autoplay
        style={styles.swipBack}
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
        }}>
        <View style={styles.back}>
          <RowView style={styles.arr}>
            <Text style={styles.tx1}>유럽 미인들의 필수품</Text>
            <Text style={styles.tx2}>카오리온 화장품</Text>
          </RowView>
        </View>
        <View style={styles.back}>
          <RowView style={styles.arr}>
            <Text style={styles.tx1}>매일 매일 출석만 해도!</Text>
            <Text style={styles.tx2}>터치토큰</Text>
            <Text style={styles.tx1}>증정</Text>
          </RowView>
        </View>
        <View style={styles.back_y}>
          <RowView style={styles.arr_y}>
            <Text style={styles.tx2}>
              터치토큰,{'\n'}적립해서 이자 받으셔야죠!
            </Text>
          </RowView>
        </View>
        <View style={styles.back_g}>
          <RowView style={styles.arr_y}>
            <Text style={styles.tx2}>
              광고스캔 랜덤보상{'\n'}매월 매년 참여 업체가 늘어납니다!
            </Text>
          </RowView>
        </View>
      </Swiper>

      <ScrollView
        style={{
          backgroundColor: 'blue',
          height: 470,
        }}></ScrollView>

      {/* 스와이프 들어갈 곳 end */}

      {/* <View style={styles.back}>
        <RowView style={styles.arr}>
          <Text style={styles.tx1}>유럽 미인들의 필수품</Text>
          <Text style={styles.tx2}>카오리온 화장품</Text>
        </RowView>
      </View> */}
    </WhiteSafeAreaView>
  );
};

export default view;

const styles = StyleSheet.create({
  back: {
    backgroundColor: '#82A9CD',
    minHeight: 100,
  },
  back_y: {backgroundColor: '#FFB82E', minHeight: 100},
  back_g: {backgroundColor: '#80D5AC', minHeight: 100},
  arr: {
    marginHorizontal: 33,
    marginVertical: 40,
    justifyContent: 'space-between',
  },
  arr_y: {
    marginHorizontal: 33,
    marginVertical: 25,
    justifyContent: 'space-between',
  },
  tx1: {fontSize: 15, color: '#ffffff'},
  tx2: {fontSize: 20, color: '#ffffff'},
});
