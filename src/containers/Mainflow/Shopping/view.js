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
  Alert,
} from 'react-native';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';
import HeaderBottomLine from '../../../components/HeaderBottomLine';
import Touchable from '../../../components/Touchable';
import {NormalBoldLabel, NormalLabel} from '../../../components/Label';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const MENU_LIST = [
  {
    id: 1,
    shop: 'CAOLION',
    name: 'Premium Pore Original Pack',
    price: '190',
    img: require('../../../assets/images/original/ca_origin_main.png'),
    path: 'AdDetail4',
  },
  {
    id: 2,
    shop: 'CAOLION',
    name: 'Relipy Relaxing Cream',
    price: '390',
    img: require('../../../assets/images/relaxing/ca_relax_main.png'),
    path: 'AdDetail3',
  },
  {
    id: 3,
    shop: 'CAOLION',
    name: 'Peace Water Aqua Drop Gel Night Mask',
    price: '550',
    img: require('../../../assets/images/dropgel/ca_drop_main.png'),
    path: 'AdDetail2',
  },
  {
    id: 4,
    shop: 'CAOLION',
    name: 'Daily Vital Wash Pure Bubble',
    price: '280',
    img: require('../../../assets/images/daily/ca_dail_main.png'),
    path: 'AdDetail1',
  },
];

const view = ({route}) => {
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
      <Touchable
        style={styles.addBtn}
        onPress={() => {
          Alert.alert('준비중입니다.');
        }}>
        <NormalBoldLabel
          text={'RAP 얼라이언스 MALL 바로가기'}
          style={{color: '#fff', fontSize: 15.5, lineHeight: 24}}
        />
      </Touchable>
    </WhiteSafeAreaView>
  );
};

export default view;

const Menu = ({menu}) => {
  const navigation = useNavigation();
  return (
    <Touchable
      style={styles.menu}
      onPress={() => navigation.navigate(menu.path)}>
      <Image
        style={{
          height: width / 4,
          width: width / 2 - 32,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        }}
        source={menu.img}
        resizeMode={'contain'}
      />
      <View
        style={{
          paddingVertical: 2,
          paddingHorizontal: 11,
          backgroundColor: '#f7f7f7',
          borderBottomRightRadius: 5,
          borderBottomLeftRadius: 5,
        }}>
        <NormalBoldLabel
          text={menu.shop}
          style={{color: '#0068D9', fontSize: 12, lineHeight: 16}}
        />

        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.content}>
          {menu.name}
        </Text>
        {/* <NormalBoldLabel text={menu.name} style={{marginTop: 4}} /> */}
        <NormalBoldLabel
          text={menu.price + ' TOP'}
          style={{color: '#5F408F', marginTop: 4}}
        />
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  menu: {
    width: width / 2 - 32,
    height: width / 2 - 19,
    marginHorizontal: 8,
    marginVertical: 5,
    borderWidth: 4,
    borderRadius: 5,
    borderColor: '#c4c4c4',
    backgroundColor: '#fff',
  },
  addBtn: {
    marginHorizontal: 24,
    marginBottom: 32,
    paddingVertical: 15,
    backgroundColor: '#5F408F',
    borderRadius: 53,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    fontSize: 15,
    lineHeight: 19,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 4,
  },
});
