import React, {useState} from 'react';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';
import RowView from '../../../components/RowView';
import {NormalBoldLabel} from '../../../components/Label';
import {MenuItem} from '../../../components/MenuItem';
import HeaderBottomLine from '../../../components/HeaderBottomLine';
import {useSelector} from 'react-redux';
import {Alert} from 'react-native';

const MENU = [
  {id: 1, title: '터치코인 연결관리', path: 'TcConnMana'},
  {id: 2, title: 'PIN번호 변경', path: 'Pinchg'},
  {id: 101, title: '마케팅 정보 알림', path: ''},
  // {id: 101, title: '바이오 인증 사용', path: ''},
  {id: 5, title: '탈퇴하기', path: 'SignOut'},
];

const view = ({navigation}) => {
  const auth = useSelector(state => state.auth);
  return (
    <WhiteSafeAreaView>
      <HeaderBottomLine />
      <RowView
        style={{
          paddingTop: 22,
          paddingHorizontal: 24,
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          borderBottomColor: '#c4c4c4',
          paddingBottom: 18,
        }}>
        <NormalBoldLabel text={'이메일 계정'} />
        <NormalBoldLabel
          text={auth.email}
          style={{fontSize: 20, lineHeight: 24}}
        />
      </RowView>

      {MENU.map(menu => (
        <MenuItem
          id={menu.id}
          key={menu.id}
          title={menu.title}
          onPress={() => {
            if (menu.path === '') {
              return;
            }
            navigation.navigate(menu.path);
          }}
        />
      ))}

      {/* 터치토큰(터치콘인듯함) 연결 관리 start */}
      {/*<TouchableNativeFeedback*/}
      {/*  onPress={() => navigation.navigate('TcConnMana')}*/}
      {/*>*/}
      {/*  <Image*/}
      {/*    source={require('../../../assets/images/btn_tc_conn_ma.png')}*/}
      {/*    style={{*/}
      {/*      resizeMode: 'contain',*/}
      {/*      width: width * 1,*/}
      {/*      position: 'absolute',*/}
      {/*      top: height * 0.17,*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</TouchableNativeFeedback>*/}
      {/* 터치토큰 연결 관리 end*/}
    </WhiteSafeAreaView>
  );
};

export default view;
