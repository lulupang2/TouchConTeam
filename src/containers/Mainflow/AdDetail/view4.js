import React from 'react';
import {View, Image, Text, ScrollView, StyleSheet} from 'react-native';
import BottomButton from '../../../components/BottomButton';
import ColumnView from '../../../components/ColumnView';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';

const Imgdata = [
  {
    id: 1,
    img: require('../../../assets/images/original/ca_origin_detail1.jpeg'),
  },
  // {
  //   id: 2,
  //   img: require('../../../assets/images/original/ca_origin_detail2.jpeg'),
  // },
  // {
  //   id: 3,
  //   img: require('../../../assets/images/original/ca_origin_detail3.jpeg'),
  // },
  // {
  //   id: 4,
  //   img: require('../../../assets/images/original/ca_origin_detail4.jpeg'),
  // },
  // {
  //   id: 5,
  //   img: require('../../../assets/images/original/ca_origin_detail5.jpeg'),
  // },
  {
    id: 6,
    img: require('../../../assets/images/original/ca_origin_detail6.jpeg'),
  },
  {
    id: 7,
    img: require('../../../assets/images/original/ca_origin_detail7.jpeg'),
  },
];

const view4 = props => {
  return (
    <WhiteSafeAreaView>
      <ScrollView style={{flex: 1}}>
        <ColumnView style={{maxHeight: 5300}}>
          <Text style={styles.text1}>Premium Pore Original Pack</Text>
          <Image
            source={require('../../../assets/images/original/ca_origin_main.png')}
            resizeMode={'contain'}
            style={styles.imgMain}
          />

          <Text style={styles.text2}>판매가격: 190 TOP</Text>
          <BottomButton text={'구매'} />
          {Imgdata.map(data => (
            <Image
              source={data.img}
              resizeMode={'contain'}
              style={styles.imgMain2}
            />
          ))}
          <Image
            source={require('../../../assets/images/original/ca_origin_detail2.jpeg')}
            resizeMode={'contain'}
            style={styles.imgMain3}
          />
          <Image
            source={require('../../../assets/images/original/ca_origin_detail3.jpeg')}
            resizeMode={'contain'}
            style={styles.imgMain4}
          />
          <Image
            source={require('../../../assets/images/original/ca_origin_detail4.jpeg')}
            resizeMode={'contain'}
            style={styles.imgMain5}
          />
          <Image
            source={require('../../../assets/images/original/ca_origin_detail5.jpeg')}
            resizeMode={'contain'}
            style={styles.imgMain6}
          />
          <Image
            source={require('../../../assets/images/original/ca_origin_detail6.jpeg')}
            resizeMode={'contain'}
            style={styles.imgMain7}
          />
        </ColumnView>
      </ScrollView>
    </WhiteSafeAreaView>
  );
};

export default view4;

const styles = StyleSheet.create({
  imgMain: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#c4c4c4',
    maxHeight: 281,
  },
  imgMain2: {
    width: '100%',
    borderWidth: 1,
    maxHeight: 200,
  },
  imgMain3: {
    width: '100%',
    borderWidth: 1,
    maxHeight: 600,
  },
  imgMain4: {
    width: '100%',
    borderWidth: 1,
    maxHeight: 750,
  },
  imgMain5: {
    width: '100%',
    borderWidth: 1,
    maxHeight: 700,
  },
  imgMain6: {
    width: '100%',
    borderWidth: 1,
    maxHeight: 1800,
  },
  imgMain7: {
    width: '100%',
    borderWidth: 1,
    maxHeight: 200,
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
