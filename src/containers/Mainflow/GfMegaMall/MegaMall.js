import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {GoButton} from '../../../components/Botton';
import Navbar from '../../../components/Navbar/view';
import RowView from '../../../components/RowView';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const MegaMall = () => {
  return (
    <WhiteSafeAreaView>
      <Navbar />

      <View style={styles.back}></View>

      <RowView style={styles.dis}>
        <Text style={styles.cao}>MEGA MALL</Text>
        <GoButton />
      </RowView>

      <Text style={styles.h4}>온라인 스포트쇼핑의 대명사 메가몰!</Text>

      <Image
        source={require('../../../assets/images/mega_mall_bottom.png')}
        style={{width: width * 1, height: height * 1, resizeMode: 'contain'}}
      />
    </WhiteSafeAreaView>
  );
};

export default MegaMall;

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
