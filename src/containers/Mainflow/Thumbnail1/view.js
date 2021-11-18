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
} from 'react-native';
import Swiper from 'react-native-swiper';
import {NormalBoldLabel} from '../../../components/Label';
import RowView from '../../../components/RowView';
import SwiperAd from '../../../components/SwiperAd';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';
import Touchable from '../../../components/Touchable';
import AntDesign from 'react-native-vector-icons/AntDesign';

const view = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
      headerRight: () => (
        <Touchable onPress={() => navigation.navigate('Main')}>
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
