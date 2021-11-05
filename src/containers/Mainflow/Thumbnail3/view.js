import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Touchable,
  ScrollView,
} from 'react-native';
import BottomButton from '../../../components/BottomButton';
import ColumnView from '../../../components/ColumnView';
import {NormalBoldLabel, NormalLabel} from '../../../components/Label';
import {ModalPoup} from '../../../components/Modals';
import RowView from '../../../components/RowView';
import SwiperAd from '../../../components/SwiperAd';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';

const view = () => {
  const [visible, setVisible] = useState(false);

  return (
    <WhiteSafeAreaView>
      <ModalPoup visible={visible}>
        <ColumnView style={styles.modal_flex}>
          <Text style={styles.modal_text}>준비중 입니다.</Text>
          <BottomButton text={'확인'} onPress={() => setVisible(false)} />
        </ColumnView>
      </ModalPoup>
      {/* 스와이프 들어갈 곳 start*/}
      <SwiperAd />
      {/* 스와이프 들어갈 곳 end */}

      <ScrollView
        style={{
          backgroundColor: '#fff',
          position: 'relative',
        }}
      >
        <View style={styles.stackingWrapper}>
          <NormalBoldLabel text={'TOC 스테이킹 하기'} style={{color: '#fff'}} />

          <Image
            style={{width: 25, height: 16}}
            source={require('../../../assets/icons/stacking_arrow.png')}
          />
          <TouchableOpacity
            onPress={() => setVisible(true)}
            style={styles.stackingBtn}
          >
            <NormalBoldLabel text={'신청'} style={{color: '#fff'}} />
          </TouchableOpacity>
        </View>

        <RowView
          style={{
            paddingTop: 18,
            paddingHorizontal: 24,
          }}
        >
          <View
            style={{
              backgroundColor: '#fd7f36',
              height: 45,
              width: 7,
              borderTopRightRadius: 6,
              borderBottomRightRadius: 6,
            }}
          />
          <Text style={styles.text}>스테킹 계산하기</Text>
        </RowView>

        <NormalLabel
          style={{paddingVertical: 19, paddingHorizontal: 23}}
          text={
            '언제 어디서나 스캔하자 터치콘 팀입니다.\n\n' +
            '카오리온이 터치콘이 실시하는 광고스캔 랜덤 보상\n' +
            '의 첫 광고주로 선정되었습니다. 카오리온은 1990\n' +
            '년 설립된 천연화장품의 원조 업체로서 유럽을 비롯\n' +
            '한 동구권에서 높은 품질을 인정 받고 있습니다.\n\n' +
            '터치콘은 카오리온의 핵심 상품에 스마트 큐알을 동\n' +
            '봉하여 랜덤보상을 실시하게 됩니다.\n' +
            '감사합니다.\n\n' +
            '터치콘 드림'
          }
        />
      </ScrollView>
    </WhiteSafeAreaView>
  );
};

export default view;

const styles = StyleSheet.create({
  stackingBtn: {
    paddingVertical: 7,
    paddingHorizontal: 10.5,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 10,
  },
  back: {
    backgroundColor: '#FFB82E',
    minHeight: 100,
  },
  arr: {
    marginHorizontal: 33,
    marginVertical: 40,
    justifyContent: 'space-between',
  },
  tx1: {fontSize: 20, color: '#ffffff', fontWeight: 'bold'},
  stackingWrapper: {
    minHeight: 49,
    marginHorizontal: 17.5,
    paddingHorizontal: 21,
    paddingVertical: 10,
    backgroundColor: '#0E0F0FCC',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modal_text: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 47,
  },
  modal_flex: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 16,
  },
});
