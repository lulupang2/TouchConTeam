import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import RowView from './RowView';
import {useNavigation} from '@react-navigation/native';

const SwiperAd = () => {
  const navigation = useNavigation();
  return (
    <Swiper
      autoplay
      style={styles.swipBack}
      dotStyle={{
        backgroundColor: '#c4c4c4',
        width: 7,
        height: 7,
        borderRadius: 3.5,
        marginLeft: 20,
      }}
      activeDotStyle={{
        backgroundColor: '#FD7F36',
        width: 10,
        height: 10,
        borderRadius: 5,
        marginLeft: 20,
      }}
      paginationStyle={{position: 'absolute', top: 85, bottom: undefined}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Thumbnail1')}
        style={{justifyContent: 'center'}}>
        <View style={styles.back}>
          <RowView style={styles.arr}>
            <Text style={styles.tx1}>유럽 미인들의 필수품</Text>
            <Text style={styles.tx2}>카오리온 화장품</Text>
          </RowView>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Thumbnail2')}
        style={{justifyContent: 'center'}}>
        <View style={styles.back}>
          <RowView style={styles.arr}>
            <Text style={styles.tx1}>매일 매일 출석만 해도!</Text>
            <Text style={styles.tx2}>터치토큰</Text>
            <Text style={styles.tx1}>증정</Text>
          </RowView>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Thumbnail3')}
        style={{justifyContent: 'center'}}>
        <View style={styles.back_y}>
          <RowView style={styles.arr_y}>
            <Text style={styles.tx2}>
              터치토큰,{'\n'}적립해서 이자 받으셔야죠!
            </Text>
          </RowView>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Thumbnail4')}
        style={{justifyContent: 'center'}}>
        <View style={styles.back_g}>
          <RowView style={styles.arr_y}>
            <Text style={styles.tx2}>
              광고스캔 랜덤보상{'\n'}매월 매년 참여 업체가 늘어납니다!
            </Text>
          </RowView>
        </View>
      </TouchableOpacity>
    </Swiper>
  );
};

export default SwiperAd;

const styles = StyleSheet.create({
  back: {
    backgroundColor: '#82A9CD',
    minHeight: 100,
  },
  back_y: {backgroundColor: '#FFB82E', minHeight: 100},
  back_g: {backgroundColor: '#80D5AC', minHeight: 100},
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
