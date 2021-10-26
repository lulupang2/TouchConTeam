import React from 'react';
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
  FlatList,
} from 'react-native';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';
import HeaderBottomLine from '../../../components/HeaderBottomLine';
import Touchable from '../../../components/Touchable';
import {NormalBoldLabel, NormalLabel} from '../../../components/Label';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const MENU_LIST = [
  {id: 1, shop: 'CAORION', name: '피스워터 아쿠아 50g', price: '55000'},
  {id: 2, shop: 'CAORION', name: '피스워터 아쿠아 50g', price: '55000'},
  {id: 3, shop: 'CAORION', name: '피스워터 아쿠아 50g', price: '55000'},
  {id: 4, shop: 'CAORION', name: '피스워터 아쿠아 50g', price: '55000'},
  {id: 5, shop: 'CAORION', name: '피스워터 아쿠아 50g', price: '55000'},
  {id: 6, shop: 'CAORION', name: '피스워터 아쿠아 50g', price: '55000'},
  {id: 7, shop: 'CAORION', name: '피스워터 아쿠아 50g', price: '55000'},
  {id: 8, shop: 'CAORION', name: '피스워터 아쿠아 50g', price: '55000'},
];

const view = ({navigation}) => {
  return (
    <WhiteSafeAreaView>
      <HeaderBottomLine />
      <View style={{flex: 1, paddingTop: 13}}>
        <FlatList
          numColumns={2}
          contentContainerStyle={{paddingBottom: 50}}
          style={{paddingHorizontal: 16}}
          data={MENU_LIST}
          renderItem={({item, index}) => <Menu menu={item} />}
          keyExtractor={(item, idx) => item.id + idx.toString()}
        />
      </View>
      <Touchable style={styles.addBtn}>
        <NormalBoldLabel
          text={'추가'}
          style={{color: '#fff', fontSize: 20, lineHeight: 24}}
        />
      </Touchable>
    </WhiteSafeAreaView>
  );
};

export default view;

const Menu = ({menu}) => {
  return (
    <Touchable style={styles.menu}>
      <Image
        style={{
          height: width / 4,
          width: width / 2 - 32,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        }}
        source={require('../../../assets/images/sample_menu.jpeg')}
      />
      <View
        style={{
          paddingVertical: 4,
          paddingHorizontal: 11,
          backgroundColor: '#f7f7f7',
        }}
      >
        <NormalBoldLabel
          text={menu.shop}
          style={{color: '#0068D9', fontSize: 12, lineHeight: 16}}
        />
        <NormalBoldLabel text={menu.name} style={{marginTop: 4}} />
        <NormalBoldLabel
          text={'W ' + menu.price}
          style={{color: '#FD7F36', marginTop: 4}}
        />
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  menu: {
    width: width / 2 - 32,
    height: width / 2 - 32,
    marginHorizontal: 8,
    marginVertical: 5,
    borderWidth: 0.8,
    borderRadius: 5,
    borderColor: '#c4c4c4',
    backgroundColor: '#fff',
  },
  addBtn: {
    marginHorizontal: 24,
    marginBottom: 32,
    paddingVertical: 15,
    backgroundColor: '#FD7F36',
    borderRadius: 53,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
