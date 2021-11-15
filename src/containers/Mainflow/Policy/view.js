import React from 'react';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';
import RowView from '../../../components/RowView';
import {NormalBoldLabel} from '../../../components/Label';
import {MenuItem} from '../../../components/MenuItem';
import HeaderBottomLine from '../../../components/HeaderBottomLine';

const MENU = [
  {id: 1, title: '이용약관', path: 'Tos'},
  {id: 2, title: '개인정보정책', path: 'Ppp'},
];

const view = ({navigation}) => {
  return (
    <WhiteSafeAreaView>
      <HeaderBottomLine />

      {MENU.map(menu => (
        <MenuItem
          id={menu.id}
          key={menu.id}
          title={menu.title}
          onPress={() => {
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
