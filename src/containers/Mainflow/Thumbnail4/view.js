import React, {useEffect} from 'react';
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
  FlatList,
} from 'react-native';

import Swiper from 'react-native-swiper';
import ColumnView from '../../../components/ColumnView';
import {NormalBoldLabel} from '../../../components/Label';
import RowView from '../../../components/RowView';
import SwiperAd from '../../../components/SwiperAd';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';
import Touchable from '../../../components/Touchable';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const dataList = [
  {
    id: 1,
    title: '카오리온',
    path: 'Shopping',
    img: require('../../../assets/images/taa/taa_log3.png'),
  },
  {
    id: 2,
    title: '메가박스',
    path: '',
    img: require('../../../assets/images/taa/taa_log1.png'),
  },
  {
    id: 3,
    title: '메가몰',
    path: '',
    img: require('../../../assets/images/taa/taa_log2.jpg'),
  },
  {
    id: 4,
    title: '안동국밥',
    path: '',
    img: require('../../../assets/images/taa/taa_log4.png'),
  },
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

const view = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
      headerRight: () => (
        <Touchable onPress={() => navigation.navigate('Main')} style={{}}>
          <AntDesign
            name="close"
            size={26}
            color={'#000'}
            style={{
              padding: 4,
              alignSelf: 'center',
              color: '#c4c4c4',
              paddingRight: 16,
            }}
          />
        </Touchable>
      ),
    });
  }, []);

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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(item.path);
            }}>
            <View style={styles.adScreen}>
              <Image
                style={{
                  maxHeight: 100,
                  maxWidth: 100,
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5,
                }}
                source={item.img}
                resizeMode={'center'}
              />
            </View>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 15,
              color: '#000',
            }}>
            {item.title}
            {console.log(item)}
          </Text>
        </ColumnView>
      );
    }
  };

  return (
    <WhiteSafeAreaView>
      {/* 스와이프 들어갈 곳 start*/}

      {/* 스와이프 들어갈 곳 end */}
      <SwiperAd />

      {/* 광고 리스트들 */}

      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={formatData(dataList, numColumns)}
        renderItem={adView}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns}
      />
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
    maxWidth: 100,
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

  flatListContainer: {
    height: '70%',
  },
});
