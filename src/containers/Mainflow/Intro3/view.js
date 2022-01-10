import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {LongButton} from '../../../components/Botton';
import BottomButton from '../../../components/BottomButton';
import Touchable from '../../../components/Touchable';
import {NormalLabel} from '../../../components/Label';
import RowView from '../../../components/RowView';

export default function Intro3({navigation}) {
  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 50}}
      style={{flex: 1, backgroundColor: '#123169'}}>
      <Image
        source={require('../../../assets/images/intro4_h2.png')}
        style={styles.topImage}
      />
      <View style={{marginLeft: 43, marginTop: 31}}>
        <Text style={styles.content}>
          {'터치콘 특허로 등록된\n' +
            '디지털 자산 전용 리워드 게임입니다.\n' +
            '\n' +
            '터치콘 얼라이언스 RAP 파트너와 함께\n' +
            '멋진 행운의 주인공이 되세요!'}
        </Text>
        <Text style={styles.h3}>Anyone, Anytime, Anywhere</Text>

        {/*하단 이미지 부분 */}
      </View>
      <Image
        source={require('../../../assets/images/intro4_bottom.png')}
        resizeMode="contain"
        style={{
          // resizeMode: 'contain',
          width: '100%',
          marginTop: 27,
          height: 128,
          // position: 'relative',
          // top: 500,
        }}
      />

      <Touchable
        // onPress={() => navigation.navigate('Signup')}
        onPress={() => navigation.navigate('Signup')}
        style={styles.bottomBtnWrapper}>
        <RowView style={styles.bottomBtnInner}>
          <Image
            style={{width: 32, height: 32, marginRight: 56}}
            source={require('../../../assets/icons/intro3_right_arrow.png')}
          />
          <NormalLabel
            text={'시작하기'}
            style={{
              fontSize: 24,
              lineHeight: 28,
              fontWeight: 'bold',
              color: '#fff',
              textAlign: 'center',
            }}
          />
        </RowView>
      </Touchable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  topImage: {
    resizeMode: 'contain',
    height: 85.93,
    width: '100%',
    marginTop: 34,
    // alignSelf: 'center',
    // position: 'relative',
    // top: -20,
  },
  content: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  h3: {
    fontFamily: 'NanumMyeongjo-ExtraBold',
    marginTop: 44,
    fontSize: 18,
    lineHeight: 21,
    color: '#FFDB5C',
  },
  bottomBtnWrapper: {
    backgroundColor: '#5F408F',
    marginHorizontal: 29.5,
    borderRadius: 60,
    padding: 3,
    marginTop: 58,
  },
  bottomBtnInner: {
    borderWidth: 3,
    borderColor: '#123169',
    borderRadius: 60,
    paddingTop: 17,
    paddingBottom: 13,
    paddingHorizontal: 14,
  },
});
