import React from 'react';
import {View, Image, Text, ScrollView, StyleSheet} from 'react-native';
import BottomButton from '../../../components/BottomButton';
import ColumnView from '../../../components/ColumnView';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';

const Imgdata = [
  {
    id: 1,
    img: require('../../../assets/images/relaxing/ca_relax_detail1.png'),
  },
  {
    id: 2,
    img: require('../../../assets/images/relaxing/ca_relax_detail2.png'),
  },
];

const view3 = props => {
  return (
    <WhiteSafeAreaView>
      <ScrollView style={{flex: 1}}>
        <ColumnView style={{maxHeight: 3000}}>
          <Text style={styles.text1}>Relipy Relaxing Cream</Text>
          <Image
            source={require('../../../assets/images/relaxing/ca_relax_main.png')}
            resizeMode={'contain'}
            style={styles.imgMain}
          />

          <Text style={styles.text2}>판매가격: 390 TOP</Text>
          <BottomButton text={'구매'} />
          {Imgdata.map(data => (
            <Image
              source={data.img}
              resizeMode={'contain'}
              style={styles.imgMain2}
            />
          ))}
        </ColumnView>
      </ScrollView>
    </WhiteSafeAreaView>
  );
};

export default view3;

const styles = StyleSheet.create({
  imgMain: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#c4c4c4',
    maxHeight: 281,
  },
  imgMain2: {
    width: '100%',
    maxHeight: 2550,
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
