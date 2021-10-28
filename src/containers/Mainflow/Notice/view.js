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
  ScrollView,
} from 'react-native';
import HeaderBottomLine from '../../../components/HeaderBottomLine';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RowView from '../../../components/RowView';
import {NormalBoldLabel, NormalLabel} from '../../../components/Label';

const NOTICE_LIST = [
  {
    id: 1,
    title: '카오리온 화장품 광고 스캔 랜덤 보상 첫 해..',
    date: '2021-04-01',
    content: '내용1',
  },
  {
    id: 2,
    title: '카오리온 화장품 광고 스캔 랜덤 보상 첫 해..',
    date: '2020-04-01',
    content:
      '언제 어디서나 스캔하자 터치콘 팀입니다\n\n' +
      '카오리온이 터치콘이 실시하는 광고스캔 랜덤 보상의 첫 광고주로 선정되었습니다. 카오리온은 1990년 설립된 천연화장품의 원조 업체로서 유럽을 비롯한 동구권에서 높은 품질을 인정 받고 있습니다.\n\n' +
      '터치콘은 카오리온의 핵심 상품에 스마트 큐알을 동봉하여 랜덤보상을 실시하게 됩니다.\n' +
      '감사합니다.\n\n' +
      '터치콘 드림',
  },
  {
    id: 3,
    title: '카오리온 화장품 광고 스캔 랜덤 보상 첫 해..',
    date: '2021-04-01',
    content: '내용3',
  },
];

const view = () => {
  // useState는 무조건 바디 안에 생성
  const [selectedLsit, setSelectedList] = useState(null);
  return (
    <WhiteSafeAreaView>
      <HeaderBottomLine />
      <ScrollView>
        {NOTICE_LIST.map((list, index) => (
          <NoticeMenu
            key={index}
            onPress={() => {
              if (selectedLsit === list.id) {
                setSelectedList(null);
              } else {
                setSelectedList(list.id);
              }
            }}
            isOpen={list.id === selectedLsit}
            title={list.title}
            content={list.content}
          />
        ))}
      </ScrollView>
    </WhiteSafeAreaView>
  );
};

export default view;

const NoticeMenu = ({onPress, isOpen, title, content}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.notibtnWrapper}>
        <NormalBoldLabel text={title} />
        <AntDesign name={isOpen ? 'up' : 'down'} size={24} color={'#000'} />
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.qnaContent}>
          <NormalLabel text={content} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  notibtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#c4c4c4',
  },
  qnaContent: {
    paddingHorizontal: 24,
    backgroundColor: '#f7f7f7',
    fontSize: 17,
  },
});
