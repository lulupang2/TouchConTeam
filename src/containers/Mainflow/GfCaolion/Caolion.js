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

import {GoButton} from '../../../components/Botton';
import Navbar from '../../../components/Navbar/view';
import RowView from '../../../components/RowView';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const Caolion = () => {
  return (
    <WhiteSafeAreaView>
      <Navbar />

      <View style={styles.back}></View>

      <RowView style={styles.dis}>
        <Text style={styles.cao}>CAOLION</Text>
        <GoButton />
      </RowView>

      <Text style={styles.h4}>한국 천연화장품의 메카, 카오리온</Text>

      <Image
        source={require('../../../assets/images/caolion_bottom.png')}
        style={{width: width * 1, height: height * 1, resizeMode: 'contain'}}
      />
    </WhiteSafeAreaView>
  );
};

export default Caolion;

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
