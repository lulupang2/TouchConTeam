import React, {useEffect, useState} from 'react';
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
  Modal,
} from 'react-native';
import BottomButton from '../../../components/BottomButton';
import CalendarTc from '../../../components/CalendarTc';
import {NormalBoldLabel} from '../../../components/Label';
import RowView from '../../../components/RowView';
import SwiperAd from '../../../components/SwiperAd';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';
import Touchable from '../../../components/Touchable';
import AntDesign from 'react-native-vector-icons/AntDesign';

const view = ({navigation}) => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    navigation.setOptions({
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
        }}
      >
        <BottomButton text={'오늘 출석하기'} onPress={increase} />

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#0068D9',
            alignSelf: 'center',
          }}
        >
          {'출석일수  ' + num + '일'}
        </Text>

        <View
          style={{
            borderColor: '#AAAAAAA',
            marginHorizontal: 24,
            minHeight: 291,
            position: 'relative',
            top: 35,
          }}
        >
          <CalendarTc />
        </View>
      </ScrollView>
    </WhiteSafeAreaView>
  );
};

export default view;

const styles = StyleSheet.create({});
