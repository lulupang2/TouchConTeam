import {useNavigation} from '@react-navigation/native';
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
  const navigation = useNavigation();
  const moveShopping = () => {
    navigation.navigate('Shopping');
  };
  return (
    <WhiteSafeAreaView>
      <Navbar />

      <View style={styles.back}>
        <Image
          source={require('../../../assets/images/taa/taa_log3.png')}
          resizeMode="contain"
          style={{
            width: 257,
            height: 111,
            alignSelf: 'center',
          }}
        />
      </View>

      <RowView style={styles.dis}>
        <Text style={styles.cao}>CAOLION</Text>
        <GoButton onPress={moveShopping} />
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
    maxHeight: 141,
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
