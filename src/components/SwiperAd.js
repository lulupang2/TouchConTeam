import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import RowView from './RowView';
import {useNavigation} from '@react-navigation/native';

const SwiperAd = ({style, paginationStyle}) => {
  const navigation = useNavigation();

  const menu = {
    id: 1,
    name: 'CAOLION',
    path: 'GfCaolion',
    img: require('../assets/images/taa/taa_log3.png'),
    title: 'CAOLION',
    subtitle: '한국 천연화장품의 메카, 카오리온',
    buttonUrl: 'Shopping',
    footer:
      '카오리온 화장품에서 취급하는 모든 제품 구매에 리워드콘이 제공됩니다.\n자세한 것은 카오리온 이벤트를 참조하시기 바랍니다.',
  };

  return (
    <View style={{height: 130}}>
      <Swiper
        autoplay
        // style={styles.swipBack}
        dotStyle={{
          backgroundColor: '#c4c4c4',
          width: 7,
          height: 7,
          borderRadius: 3.5,
          marginLeft: 20,
        }}
        activeDotStyle={{
          backgroundColor: '#5F408F',
          width: 10,
          height: 10,
          borderRadius: 5,
          marginLeft: 20,
        }}
        // paginationStyle={{position: 'absolute', top: 85, bottom: undefined}}
        paginationStyle={[styles.pagination, paginationStyle]}>
        <TouchableOpacity
          onPress={() =>
            // navigation.navigate('Thumbnail1')
            navigation.navigate('GfCaolion', {menu})
          }
          style={{justifyContent: 'center'}}>
          {/* <View style={styles.back}>
          <RowView style={styles.arr}>
            <Text style={styles.tx1}>유럽 미인들의 필수품</Text>
            <Text style={styles.tx2}>카오리온 화장품</Text>
          </RowView>
        </View> */}
          <Image
            source={require('../assets/images/caorion_swiper.png')}
            resizeMode="contain"
            style={{width: '100%', height: 110}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Thumbnail2')}
          style={{justifyContent: 'center'}}>
          {/* <View style={styles.back}>
          <RowView style={styles.arr}>
            <Text style={styles.tx1}>매일 매일 출석만 해도!</Text>
            <Text style={styles.tx2}>터치토큰</Text>
            <Text style={styles.tx1}>증정</Text>
          </RowView>
        </View> */}
          <Image
            source={require('../assets/images/thumnail_swiper2.png')}
            resizeMode="contain"
            style={{width: '100%', height: 110}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Thumbnail3')}
          style={{justifyContent: 'center'}}>
          {/* <View style={styles.back_y}>
          <RowView style={styles.arr_y}>
            <Text style={styles.tx2}>
              터치토큰,{'\n'}적립해서 이자 받으셔야죠!
            </Text>
          </RowView>
        </View> */}
          <Image
            source={require('../assets/images/thumnail_swiper3.png')}
            resizeMode="contain"
            style={{width: '100%', height: 110}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Thumbnail4')}
          style={{justifyContent: 'center'}}>
          {/* <View style={styles.back_g}>
          <RowView style={styles.arr_y}>
            <Text style={styles.tx2}>
              광고스캔 랜덤보상{'\n'}매월 매년 참여 업체가 늘어납니다!
            </Text>
          </RowView>

        </View> */}
          <Image
            source={require('../assets/images/thumnail_swiper4.png')}
            resizeMode="contain"
            style={{width: '100%', height: 110}}
          />
        </TouchableOpacity>
      </Swiper>
    </View>
  );
};

export default SwiperAd;

const styles = StyleSheet.create({
  arr: {
    marginHorizontal: 33,
    marginVertical: 40,
    justifyContent: 'space-between',
  },
  arr_y: {
    marginHorizontal: 33,
    marginVertical: 25,
    justifyContent: 'space-between',
  },
  tx1: {fontSize: 15, color: '#ffffff'},
  tx2: {fontSize: 20, color: '#ffffff'},
});
