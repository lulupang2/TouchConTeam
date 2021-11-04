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
import {FlatList} from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import ColumnView from '../../../components/ColumnView';
import {NormalBoldLabel} from '../../../components/Label';
import RowView from '../../../components/RowView';
import SwiperAd from '../../../components/SwiperAd';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';

const dataList = [
  {id: 1, title: '메가몰'},
  {id: 2, title: '카오리온'},
  {id: 3, title: '안동쇠고기'},
  {id: 4, title: '재팬드럭'},
  {id: 5, title: '마마무'},
  {id: 6, title: '마마무'},
  {id: 7, title: '마마무'},
];

const numColumns = 3;

const formatData = (dataList, numColumns) => {
  const totalRows = Math.floor(dataList.length / numColumns);
  let totalLastRow = dataList.length - totalRows * numColumns;

  while (totalLastRow !== 0 && totalLastRow !== numColumns) {
    dataList.push({key: 'blank', empty: true});
    totalLastRow++;
  }
  return dataList;
};

const adView = ({item, index}) => {
  if (item.empty) {
    return (
      <ColumnView style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.empty1}></View>
        <Text>{item.title}</Text>
      </ColumnView>
    );
  } else {
    return (
      <ColumnView style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.adScreen}></View>
        <Text
          style={{
            fontSize: 15,
            color: '#000',
          }}>
          {item.title}
        </Text>
      </ColumnView>
    );
  }
};

const view = () => {
  return (
    <WhiteSafeAreaView>
      {/* 스와이프 들어갈 곳 start*/}

      {/* 스와이프 들어갈 곳 end */}
      <SwiperAd />

      {/* 광고 리스트들 */}

      <View style={styles.container}>
        <FlatList
          data={formatData(dataList, numColumns)}
          renderItem={adView}
          keyExtractor={(item, index) => index.toString()}
          numColumns={numColumns}
        />
      </View>
    </WhiteSafeAreaView>
  );
};

export default view;

const styles = StyleSheet.create({
  // back: {
  //   backgroundColor: '#80D5AC',
  //   minHeight: 100,
  // },
  arr: {
    marginHorizontal: 33,
    marginVertical: 40,
    justifyContent: 'space-between',
  },
  tx1: {fontSize: 20, color: '#ffffff'},
  adScreen: {
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    borderRadius: 8,
    borderWidth: 1,
  },
  empty1: {
    margin: 15,
    borderRadius: 8,
    backgroundColor: '#f7f7f7',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {height: 550},
});
