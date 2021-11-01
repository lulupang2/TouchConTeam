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
import ColumnView from '../../../components/ColumnView';
import {NormalBoldLabel} from '../../../components/Label';
import RowView from '../../../components/RowView';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';

const view = () => {
  return (
    <WhiteSafeAreaView>
      <ScrollView style={{flex: 1}}>
        {/* 스와이프 들어갈 곳 start*/}
        <View style={styles.back}>
          <RowView style={styles.arr}>
            <Text style={styles.tx1}>
              광고스캔 랜덤보상{'\n'}매월 매년 참여 업체가 늘어납니다!
            </Text>
          </RowView>
        </View>
        {/* 스와이프 들어갈 곳 end */}

        {/* 광고 리스트들 */}

        {/* 광고 리스트들  */}
      </ScrollView>
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
  under_view1: {
    marginHorizontal: 22,
    minHeight: 126,
    marginTop: 26,
    backgroundColor: 'red',
  },
  ad_box: {width: 100, height: 100, borderColor: 'black'},
});

const adRow = () => {
  return (
    <RowView>
      <ColumnView>
        <View style={styles.ad_box}></View>
        <Text>메가몵</Text>
      </ColumnView>
    </RowView>
  );
};
