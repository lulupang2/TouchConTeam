import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import HeaderTitle from '../../component/HeaderTitle';
import themeStyle from '../../style/theme.style';
interface IProps {
  menus: {
    id: number;
    title: string;
    date: any;
    link: any;
  }[];
}
const TERMS_LIST = [
  {
    id: 0,
    title: '서비스 이용 약관',
    date: '22.3.15',
    link: 'TermsService',
  },
  {
    id: 1,
    title: '개인정보 수집 및 이용 동의',
    date: '22.3.15',
    link: 'PersonalInfoTerms',
  },
  {
    id: 3,
    title: '마케팅 정보 알림 동의',
    date: '22.3.15',
    link: 'MarketingInfoTerms',
  },
];
const TermsList = ({menus}: IProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      {menus.map((item, index) => (
        <View key={index} style={{}}>
          {/* @ts-ignore */}
          <TouchableOpacity
            style={styles.menuBox}
            onPress={() => navigation.navigate(item.link)}>
            <View>
              <Text style={styles.menuText}>{item.title}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.dateText}>{item.date}</Text>
              <Icon
                name="chevron-right"
                size={18}
                color={'#666'}
                style={styles.iconPadding}
              />
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};
export default function TermsManage() {
  return (
    <>
      <HeaderTitle
        titleSize={16}
        title="약관 및 개인정보 처리 동의"
        noClose
        prevButton
      />
      <View style={styles.container}>
        <TermsList menus={TERMS_LIST} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: '#FFF', flex: 1},

  menuContainer: {paddingHorizontal: 20},
  menuBox: {
    borderBottomColor: '#F2F2F7',
    borderBottomWidth: 1,
    paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuText: {
    fontFamily: themeStyle.FONT_REGULAR,
    color: '#000',
    fontSize: 13,
  },
  dateText: {
    fontFamily: themeStyle.FONT_REGULAR,
    color: '#666',
    fontSize: 13,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconPadding: {
    paddingLeft: 15,
  },
});
