import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Button} from 'react-native-paper';
import Swiper from 'react-native-swiper';
import {heightPercentage} from '../../util/ResponsiveSize';
const {width} = Dimensions.get('window');
interface IProps {
  data: [
    {
      id: number;
      img: string;
    },
  ];
}
const textPagination = (index: number, total: number, swiper: Swiper) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={styles.paginationTextBox}>
        <Text style={styles.paginationText}>
          {(index + 1).toString().padStart(2, '0') + ' '}
        </Text>
        - {total.toString().padStart(2, '0')}
      </Text>
      <View style={styles.PaginationBarContainer}>
        {[...Array(total)].map((n, i) => {
          return (
            <View key={i} style={styles.PaginationBarContainer}>
              <Button
                style={
                  i === index
                    ? styles.paginationActiveBar
                    : styles.paginationBar
                }
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default function Banner({data}: IProps) {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Swiper
        renderPagination={textPagination}
        style={{
          backgroundColor: '#CCF',
          height: heightPercentage(548),
        }}>
        {data.map(item => (
          <View style={styles.slide} key={item.id}>
            <Image style={styles.image} source={{uri: item.img}} />
          </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  wrapper: {marginBottom: 70},
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    width,
    flex: 1,
    resizeMode: 'stretch',
  },
  paginationStyle: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    bottom: 35,
    right: 0,
    alignItems: 'flex-end',
  },
  paginationTextBox: {
    position: 'relative',
    color: 'white',
    fontSize: 24,
    fontFamily: 'GmarketSansTTFBold',
    right: 20,
  },
  paginationText: {
    color: 'red',
    fontSize: 24,
    fontFamily: 'GmarketSansTTFBold',
  },
  PaginationBarContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  paginationBar: {
    position: 'relative',
    bottom: -35,
    flex: 1,
    height: 5,
    backgroundColor: '#000',
    borderRadius: 0,
  },
  paginationActiveBar: {
    position: 'relative',
    bottom: -35,
    flex: 1,
    backgroundColor: '#FA5C00',
    borderRadius: 0,
    height: 5,
  },
});
