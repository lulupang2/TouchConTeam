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
  Alert,
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

      <View style={styles.back}>
        <Image
          source={require('../../../assets/images/taa/taa_log4.png')}
          resizeMode="contain"
        />
      </View>

      <RowView style={styles.dis}>
        <Text style={styles.cao}>ANDONG GUKBAB</Text>
        <GoButton
          onPress={() => {
            Alert.alert('준비중 입니다.');
          }}
        />
      </RowView>

      <Text style={styles.h4}>가장 한국적인 맛과 멋을 내는 안동 국밥!</Text>
    </WhiteSafeAreaView>
  );
};

export default GukBab;

const styles = StyleSheet.create({
  back: {
    marginHorizontal: 25,
    maxHeight: 141,
    backgroundColor: '#0000',
    marginTop: 18,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dis: {
    justifyContent: 'space-between',
    marginHorizontal: 34,
    marginVertical: 18,
    alignContent: 'center',
  },
  cao: {
    color: '#5F408F',
    fontSize: 20,
  },
  h4: {
    fontSize: 15,
    color: '#000000',
    marginLeft: 34,
  },
});
