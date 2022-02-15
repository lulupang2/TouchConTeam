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
  Alert,
  Linking,
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
    path: 'https://www.caolion.com',
    img: require('../../../assets/images/taa/taa_log3.png'),
  },
  {
    id: 4,
    title: '안동본가국밥',
    path: 'https://bit.ly/3v68Na3',
    img: require('../../../assets/images/taa/taa_log4.png'),
  },
  {
    id: 4,
    title: '먹깨비',
    path: 'https://www.mukkebi.com',
    img: require('../../../assets/images/taa/muk.png'),
  },
  {
    id: 41,
    title: '사나바',
    path: 'https://sanava.me',
    img: require('../../../assets/images/taa/sana.png'),
  },
  {
    id: 42,
    title: '케이알푸드',
    path: 'http://www.krfood.org',
    img: require('../../../assets/images/taa/kr.png'),
  },
  {
    id: 2,
    title: '메가박스',
    path: 'https://www.megabox.co.kr',
    img: require('../../../assets/images/taa/mega.png'),
  },
  {
    id: 43,
    title: '재팬드럭',
    path: 'https://japandrug.jp',
    img: require('../../../assets/images/taa/japan.jpg'),
  },

  {
    id: 84,
    title: '제주안심코드',
    path: 'https://bit.ly/3Bopbnq',
    img: require('../../../assets/images/taa/jeju.jpg'),
  },

  {
    id: 73,
    title: '크리에이션엘',
    path: 'https://www.stylelq.com',
    img: require('../../../assets/images/taa/log1.jpg'),
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
        <ColumnView>
          <View style={styles.empty1}></View>
          <Text>{item.title}</Text>
        </ColumnView>
      );
    } else {
      return (
        <ColumnView
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 15,
          }}>
          <TouchableOpacity
            onPress={() => {
              if (item.path === '') {
                Alert.alert('준비중입니다.');
                return;
              }
              Linking.openURL(item.path);
            }}>
            <View style={styles.adScreen}>
              <Image
                style={{
                  maxHeight: 70,
                  maxWidth: 70,
                }}
                source={item.img}
                resizeMode={'contain'}
              />
            </View>
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 14,
              color: '#000',
            }}>
            {item.title}
            {/*{console.log(item)}*/}
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
        columnWrapperStyle={{justifyContent: 'space-between'}}
        contentContainerStyle={styles.flatListContainer}
        data={formatData(dataList, numColumns)}
        renderItem={adView}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
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
    justifyContent: 'space-between',
  },
  tx1: {fontSize: 20, color: '#ffffff'},
  adScreen: {
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
    maxWidth: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  flatListContainer: {
    padding: 10,
  },
});
