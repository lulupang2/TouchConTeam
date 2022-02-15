import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  Alert,
  Dimensions,
  View,
  SafeAreaView,
} from 'react-native';
import api from '../../../api';
import TouchableNoFeedback from '../../../components/TouchableNoFeedback';

const {height} = Dimensions.get('window');

export default function Intro1({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor: '#123169', flex: 1}}>
      <TouchableNoFeedback
        onPress={() => navigation.navigate('Intro2')}
        style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Image
            source={require('../../../assets/images/intro2_h2.png')}
            style={styles.h2}
          />
          <Text style={styles.MainText}>
            {'터치콘에서\n랜덤 보상의 세계를 \n만나보세요!'}
          </Text>
          <Text style={styles.subText}>
            글로벌 최초 디지털 자산 랜덤 리워드 - 터치콘
          </Text>
        </View>

        <Image
          source={require('../../../assets/images/intro2_cat.png')}
          style={styles.cat}
        />
      </TouchableNoFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  subText: {
    backgroundColor: '#123169',
    color: '#FFFFFF',
    width: '100%',
    fontSize: 14,
    fontWeight: 'bold',
    position: 'absolute',
    zIndex: 3,
    top: 300,
    right: -50,
  },
  MainText: {
    backgroundColor: '#123169',
    color: '#FFFFFF',
    width: '100%',

    fontSize: 36,
    fontWeight: 'bold',
    marginLeft: 47,
    position: 'relative',
  },
  cat: {
    resizeMode: 'stretch',
    width: '100%',
    height: height * 0.6,
    bottom: 0,
  },
  h2: {
    resizeMode: 'contain',
    width: '80%',
    alignSelf: 'center',
    position: 'relative',
  },
});
