import React, {useState} from 'react';
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
import BottomButton from '../../../components/BottomButton';
import {NormalBoldLabel} from '../../../components/Label';
import RowView from '../../../components/RowView';
import SwiperAd from '../../../components/SwiperAd';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';

const view = () => {
  const [num, setNum] = useState(0);

  const increase = () => {
    setNum(num + 1);
  };
  return (
    <WhiteSafeAreaView>
      {/* 스와이프 들어갈 곳 start*/}
      <SwiperAd />
      {/* 스와이프 들어갈 곳 end */}

      <ScrollView
        style={{
          backgroundColor: '#fff',
          position: 'relative',
          top: 35,
        }}>
        <BottomButton text={'오늘 출석하기'} onPress={increase} />

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#0068D9',
            alignSelf: 'center',
          }}>
          {'출석일수  ' + num + '일'}
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
      </ScrollView>
    </WhiteSafeAreaView>
  );
};

export default view;

const styles = StyleSheet.create({});
