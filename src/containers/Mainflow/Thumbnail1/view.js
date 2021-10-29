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

const view = () => {
  return (
    <WhiteSafeAreaView>
      {/* 스와이프 들어갈 곳 start*/}
      <View style={styles.back}>
        <RowView style={styles.arr}>
          <Text style={styles.tx1}>유럽 미인들의 필수품</Text>
          <Text style={styles.tx2}>카오리온 화장품</Text>
        </RowView>
      </View>
      {/* 스와이프 들어갈 곳 end */}
    </WhiteSafeAreaView>
  );
};

export default view;

const styles = StyleSheet.create({
  back: {
    backgroundColor: '#82A9CD',
    minHeight: 100,
  },
  arr: {
    marginHorizontal: 33,
    marginVertical: 40,
    justifyContent: 'space-between',
  },
  tx1: {fontSize: 15, color: '#ffffff'},
  tx2: {fontSize: 20, color: '#ffffff'},
});
