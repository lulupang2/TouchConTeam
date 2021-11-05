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
  {id: 1, date: '21.04.05', compensation: '200', ba: '카오리온'},
  {id: 2, date: '21.04.05', compensation: '10', ba: '메가'},
  {id: 3, date: '21.04.05', compensation: '3,000', ba: '안동국밥'},
  {id: 4, date: '21.04.05', compensation: '3,000', ba: '안동국밥'},
  {id: 5, date: '21.04.05', compensation: '3,000', ba: '안동국밥'},
  {id: 6, date: '21.04.05', compensation: '3,000', ba: '안동국밥'},
  {id: 7, date: '21.04.05', compensation: '3,000', ba: '안동국밥'},
  {id: 8, date: '21.04.05', compensation: '3,000', ba: '안동국밥'},
  {id: 9, date: '21.04.05', compensation: '3,000', ba: '안동국밥'},
  {id: 10, date: '21.04.05', compensation: '3,000', ba: '안동국밥'},
  {id: 11, date: '21.04.05', compensation: '3,000', ba: '안동국밥'},
  {id: 12, date: '21.04.05', compensation: '3,000', ba: '안동국밥'},
  {id: 13, date: '21.04.05', compensation: '3,000', ba: '안동국밥'},
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
          justifyContent: 'space-between',
          width: 359,
          borderWidth: 1,
          borderColor: '#c4c4c4',
          backgroundColor: index % 2 === 1 ? '#EBEBEB' : '#FFFFFF',
        }}
      >
        <RowView
          style={{justifyContent: 'space-between', width: 166, marginLeft: 22}}
        >
          <NormalBoldLabel text={menu.date} style={styles.day} />

          <NormalBoldLabel
            text={menu.compensation}
            style={{color: '#FD7F36'}}
          />
        </RowView>
        <NormalBoldLabel text={menu.ba} style={styles.company} />
      </RowView>
    </View>
  );
};

const styles = StyleSheet.create({
  company: {width: 60, position: 'relative', left: -30},
  scContainer: {
    marginHorizontal: 17,
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
  day: {marginVertical: 17},
  tx1: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 38,
    fontWeight: 'blod',
  },
  tx2: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'blod',
  },
  tx3: {color: '#fff', fontSize: 15, marginRight: 38, fontWeight: 'blod'},

  adContent: {
    backgroundColor: '#fff',
    borderColor: '#c4c4c4',
    justifyContent: 'space-between',
  },
});
