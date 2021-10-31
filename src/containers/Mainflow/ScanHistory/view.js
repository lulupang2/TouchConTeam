import {useNavigation} from '@react-navigation/native';
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
  Touchable,
  ScrollViewBase,
  ScrollView,
} from 'react-native';
import HeaderBottomLine from '../../../components/HeaderBottomLine';
import {NormalBoldLabel} from '../../../components/Label';
import RowView from '../../../components/RowView';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';

const ScInventory = [
  {id: 1, date: '21.04.05', compensation: 'CAOLION', ba: '카오리온'},
  {id: 2, date: '21.04.05', compensation: 'MEGAM', ba: '메가'},
  {id: 3, date: '21.04.05', compensation: 'MEGAM', ba: '안동국밥'},
];

const view = () => {
  return (
    <WhiteSafeAreaView>
      <HeaderBottomLine />
      <RowView style={styles.listHeaderBack}>
        <Text style={styles.tx1}>날짜</Text>
        <Text style={styles.tx2}>보상액</Text>
        <Text style={styles.tx3}>제휴업체</Text>
      </RowView>
      <ScrollView style={styles.scContainer}>
        {ScInventory.map((menu, i) => (
          <ScHistory menu={menu} index={i} key={i} />
        ))}
      </ScrollView>
    </WhiteSafeAreaView>
  );
};

export default view;

const ScHistory = ({menu, index}) => {
  const navigation = useNavigation();

  return (
    <View>
      <RowView
        style={{
          backgroundColor: 'red',
          // index !== ScInventory.length - 1 ? '#ffffff' : '#EBEBEB',
        }}>
        <NormalBoldLabel text={menu.date} style={{color: '#555'}} />

        <NormalBoldLabel text={menu.compensation} style={{color: '#555'}} />
      </RowView>
      <NormalBoldLabel text={menu.ba} style={{color: '#555'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  scContainer: {
    marginHorizontal: 17,
    borderColor: '#c4c4c4',
    borderWidth: 1,
  },
  listHeaderBack: {
    backgroundColor: 'rgba(14, 15, 15, 0.8)',
    marginTop: 13,
    marginHorizontal: 16,
    justifyContent: 'space-between',
    height: 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  tx1: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 38,
    fontWeight: 'blod',
  },
  tx2: {color: '#fff', fontSize: 15, fontWeight: 'blod'},
  tx3: {color: '#fff', fontSize: 15, marginRight: 38, fontWeight: 'blod'},

  adContent: {
    backgroundColor: '#fff',
    borderColor: '#c4c4c4',
    justifyContent: 'space-between',
  },
});
