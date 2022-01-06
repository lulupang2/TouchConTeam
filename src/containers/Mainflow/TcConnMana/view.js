import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  SafeAreaView,
} from 'react-native';

import HeaderBottomLine from '../../../components/HeaderBottomLine';
import RowView from '../../../components/RowView';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';

const Title = [
  {
    id: 1,
    name: 'CAOLION',
    path: 'GfCaolion',
    img: require('../../../assets/images/taa/taa_log3.png'),
    //
    title: 'CAOLION',
    subtitle: '한국 천연화장품의 메카, 카오리온',
    buttonUrl: 'Shopping',
    footer:
      '카오리온 화장품에서 취급하는 모든 제품 구매에 리워드콘이 제공됩니다.\n자세한 것은 카오리온 이벤트를 참조하시기 바랍니다.',
  },
  {
    id: 2,
    name: 'MEGABOX',
    path: '',
    img: require('../../../assets/images/main/main_megabox.png'),
  },
  {
    id: 3,
    name: '안동국밥',
    path: 'GfCaolion',
    img: require('../../../assets/images/main/main_andong.png'),
    title: 'ANDONGGUKBOB',
    subtitle: '전통 한식 문화의 장을 열어가는 웰빙 안동본가국밥',
    buttonUrl: '',
    footer:
      '안동본가국밥 프랜차이즈 직영점 및 가맹점에서 식사 및 주문하시는 모든 분께\n리워드콘 1매씩을 증정합니다. 자세한 것은 홈페이지를 참조해 주세요.',
  },
];

const view = ({navigation}) => {
  return (
    <WhiteSafeAreaView>
      <HeaderBottomLine />

      {Title.map((menu, i) => (
        <BtnConn
          menu={menu}
          key={i}
          onPress={() => navigation.navigate(menu.path, {menu})}
        />
      ))}
    </WhiteSafeAreaView>
  );
};

export default view;

const BtnConn = ({menu, onPress}) => {
  console.log(onPress);
  return (
    <RowView style={styles.rv}>
      <Text
        style={{
          color: '#000000',
          fontWeight: 'bold',
          fontSize: 15,
          marginVertical: 18,
        }}>
        {menu.name}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#5F408F',
          width: 79,
          height: 35,
          borderRadius: 53,
        }}
        onPress={onPress}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#FFFFFF',
            marginLeft: 20,
            marginTop: 3,
          }}>
          연결
        </Text>
      </TouchableOpacity>
    </RowView>
  );
};

const styles = StyleSheet.create({
  rv: {
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderColor: '#c4c4c4',
  },
});
