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
import SwiperAd from '../../../components/SwiperAd';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';

const view = () => {
  return (
    <WhiteSafeAreaView>
      {/* 스와이프 들어갈 곳 start*/}
      <SwiperAd />

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
