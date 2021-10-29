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
import Navbar from '../../../components/Navbar/view';
import Swiper from 'react-native-swiper';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';
import RowView from '../../../components/RowView';
import {GoButton} from '../../../components/Botton';

const GukBab = () => {
  return (
    <WhiteSafeAreaView>
      <Navbar />

      <View style={styles.back}></View>

      <RowView style={styles.dis}>
        <Text style={styles.cao}>ANDONG GUKBAB</Text>
        <GoButton />
      </RowView>

      <Text style={styles.h4}>가장 한국적인 맛과 멋을 내는 안동 국밥!</Text>
    </WhiteSafeAreaView>
  );
};

export default GukBab;

const styles = StyleSheet.create({
  back: {
    marginHorizontal: 25,
    minHeight: 141,
    backgroundColor: '#f6f6f6',
    marginTop: 18,
    borderRadius: 10,
  },
  dis: {
    justifyContent: 'space-between',
    marginHorizontal: 34,
    marginVertical: 18,
    alignContent: 'center',
  },
  cao: {
    color: '#FD7F36',
    fontSize: 20,
  },
  h4: {
    fontSize: 15,
    color: '#000000',
    marginLeft: 34,
  },
});
