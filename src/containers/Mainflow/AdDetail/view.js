import React from 'react';
import {View, Image, Text, ScrollView, StyleSheet} from 'react-native';
import BottomButton from '../../../components/BottomButton';
import ColumnView from '../../../components/ColumnView';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';

const view = props => {
  return (
    <WhiteSafeAreaView>
      <ScrollView style={{flex: 1}}>
        <ColumnView style={{maxHeight: 3000}}>
          <Text style={styles.text1}>Daily Vital Wash Pure Bubble</Text>
          <Image
            source={require('../../../assets/images/daily/ca_dail_main.png')}
            resizeMode={'contain'}
            style={styles.imgMain}
          />

          <Text style={styles.text2}>판매가격: 280 TOP</Text>
          <BottomButton text={'구매'} />
          <Image
            source={require('../../../assets/images/daily/ca_dail_detail.jpeg')}
            resizeMode={'contain'}
            style={styles.imgMain2}
          />
          <Image
            source={require('../../../assets/images/daily/ca_dail_detail2.jpeg')}
            resizeMode={'contain'}
            style={styles.imgMain2}
          />
        </ColumnView>
      </ScrollView>
    </WhiteSafeAreaView>
  );
};

export default view;

const styles = StyleSheet.create({
  imgMain: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#c4c4c4',
    maxHeight: 281,
  },
  imgMain2: {
    width: '100%',
    maxHeight: 1300,
    borderWidth: 1,
  },
  text1: {
    color: '#000',
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center',
  },
  text2: {
    color: '#000',
    fontSize: 20,
    marginVertical: 30,
    textAlign: 'center',
  },
});
