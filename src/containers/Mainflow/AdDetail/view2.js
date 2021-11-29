import React from 'react';
import {View, Image, Text, ScrollView, StyleSheet} from 'react-native';
import BottomButton from '../../../components/BottomButton';
import ColumnView from '../../../components/ColumnView';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';

const Imgdata = [
  {
    id: 1,
    img: require('../../../assets/images/dropgel/ca_drop_detail1.png'),
  },
  {
    id: 2,
    img: require('../../../assets/images/dropgel/ca_drop_detail2.png'),
  },
  {
    id: 3,
    img: require('../../../assets/images/dropgel/ca_drop_detail3.png'),
  },
  {
    id: 4,
    img: require('../../../assets/images/dropgel/ca_drop_detail4.png'),
  },
  {
    id: 5,
    img: require('../../../assets/images/dropgel/ca_drop_detail5.png'),
  },
  {
    id: 6,
    img: require('../../../assets/images/dropgel/ca_drop_detail6.png'),
  },
];

const view2 = props => {
  return (
    <WhiteSafeAreaView>
      <ScrollView style={{flex: 1}}>
        <ColumnView style={{maxHeight: 3000}}>
          <Text style={styles.text1}>Peace Water Aqua Drop Gel Night Mask</Text>
          <Image
            source={require('../../../assets/images/dropgel/ca_drop_main.png')}
            resizeMode={'contain'}
            style={styles.imgMain}
          />

          <Text style={styles.text2}>판매가격: 550 TOP</Text>
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

export default view2;

const styles = StyleSheet.create({
  imgMain: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#c4c4c4',
    maxHeight: 281,
  },
  imgMain2: {
    width: '100%',
    maxHeight: 700,
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
