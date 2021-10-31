import React from 'react';
import {View} from 'react-native';
import WhiteSafeAreaView from './WhiteSafeAreaView';
import RowView from './RowView';
import {NormalBoldLabel} from './Label';
import {MenuItem} from './MenuItem';
import {useNavigation} from '@react-navigation/native';

const MENU = [
  {id: 1, title: '내정보', path: 'MyInfo'},
  {id: 2, title: '공지사항', path: 'Notice'},
  {id: 3, title: '자주 묻는 질문', path: 'QnA'},
  {id: 4, title: '터치콘 이야기', path: 'TcStory'},
  {id: 5, title: '약관 및  개인정보 처리방침', path: 'Policy'},
];

const RightDrawer = () => {
  const navigation = useNavigation();
  return (
    <WhiteSafeAreaView>
      <View
        style={{
          paddingTop: 58,
          paddingHorizontal: 30,
          borderBottomWidth: 1,
          borderBottomColor: '#c4c4c4',
          paddingBottom: 10,
        }}
      >
        <NormalBoldLabel
          text={'ngm1224@gmail.com'}
          style={{fontSize: 20, lineHeight: 24}}
        />
      </View>

      {MENU.map(menu => (
        <MenuItem
          key={menu.id}
          title={menu.title}
          style={{paddingHorizontal: 30}}
          onPress={() => navigation.navigate(menu.path)}
        />
      ))}

      <RowView
        style={{
          paddingVertical: 14,
          paddingHorizontal: 30,
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          borderBottomColor: '#c4c4c4',
        }}
      >
        <NormalBoldLabel text={'버전 정보'} />
        <NormalBoldLabel text={'V 0.1'} style={{color: '#FD7F36'}} />
      </RowView>
    </WhiteSafeAreaView>
  );
};

export default RightDrawer;
