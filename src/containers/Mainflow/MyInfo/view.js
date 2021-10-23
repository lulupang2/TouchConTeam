import React from 'react';
import {Image} from 'react-native';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';
import RowView from '../../../components/RowView';
import {NormalBoldLabel} from '../../../components/Label';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Touchable from '../../../components/Touchable';

const MENU = [
  {id: 1, title: '터치토큰 연결 관리', path: 'TcConnMana'},
  {id: 2, title: 'PIN번호 변경', path: 'Pinchg'},
  {id: 3, title: '마케팅정보 알림', path: 'MarketingInfo'},
  {id: 4, title: '탈퇴하기', path: 'SignOut'},
];

const view = ({navigation}) => {
  return (
    <WhiteSafeAreaView>
      <Image
        source={require('../../../assets/images/nav_back.png')}
        style={{height: 2}}
      />
      <RowView
        style={{
          paddingTop: 22,
          paddingHorizontal: 24,
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          borderBottomColor: '#c4c4c4',
          paddingBottom: 18,
        }}
      >
        <NormalBoldLabel text={'이메일'} />
        <NormalBoldLabel
          text={'ngm1224@gmail.com'}
          style={{fontSize: 20, lineHeight: 24}}
        />
      </RowView>

      {MENU.map(menu => (
        <Menu
          key={menu.id}
          title={menu.title}
          onPress={() => navigation.navigate(menu.path)}
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

const Menu = ({onPress, title}) => {
  return (
    <Touchable
      onPress={onPress}
      style={{
        paddingTop: 15,
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#c4c4c4',
        paddingBottom: 14,
      }}
    >
      <NormalBoldLabel text={title} />
      <AntDesign name={'right'} size={24} color={'#000'} />
    </Touchable>
  );
};
