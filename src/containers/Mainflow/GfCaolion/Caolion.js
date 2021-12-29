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
  Alert,
} from 'react-native';

import {GoButton} from '../../../components/Botton';
import Navbar from '../../../components/Navbar/view';
import RowView from '../../../components/RowView';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const Caolion = ({route}) => {
  let data = route.params.menu;
  const navigation = useNavigation();
  const moveShopping = () => {
    if (data.buttonUrl !== '') {
      navigation.navigate('Shopping');
    } else {
      Alert.alert('준비중입니다');
    }
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
        <Text style={styles.cao}>{data?.title}</Text>
        <GoButton onPress={moveShopping} />
      </RowView>

      <Text style={styles.h4}>{data?.subtitle}</Text>
      <View style={{flex: 1}} />
      <Text style={styles.footers}>{data?.footer}</Text>
      {/*<Image*/}
      {/*  source={require('../../../assets/images/caolion_bottom.png')}*/}
      {/*  style={{width: width * 1, height: height * 1, resizeMode: 'contain'}}*/}
      {/*/>*/}
    </WhiteSafeAreaView>
  );
};

export default Caolion;

const styles = StyleSheet.create({
  footers: {
    backgroundColor: 'rgba(14, 15, 15, 0.8)',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    lineHeight: 16,
  },
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
    color: '#5F408F',
    fontSize: 20,
  },
  h4: {
    fontSize: 15,
    color: '#000000',
    alignSelf: 'center',
    fontWeight: 'bold',
    // marginLeft: 34,
  },
});
