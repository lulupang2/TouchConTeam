import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import tmpData from '../../../mock/data.json';
import headerIcons from '../../component/Home/HeaderIcons';
import MyPageMenu from '../../component/Mypage/MyPageMenu';
import themeStyle from '../../style/theme.style';
import {setComma} from '../../util/comma';

const {width, height} = Dimensions.get('window');

export default function MyPageScreen() {
  return (
    <ScrollView style={styles.flex}>
      <View style={styles.HeaderStyle}>
        <View style={styles.topBar}>
          <View>
            <Text style={styles.topBarText}>{setComma('1925') + ' P >'}</Text>
          </View>
          <View style={styles.topBarBox}>
            <TouchableOpacity style={styles.topBarIcon}>
              <Image
                source={headerIcons.cartDark}
                resizeMode="contain"
                style={styles.fullImg}
              />
            </TouchableOpacity>
            {/* eslint-disable-next-line react-native/no-inline-styles */}
            <TouchableOpacity style={[styles.topBarIcon, {marginLeft: 10}]}>
              <Image
                source={headerIcons.bellDark}
                resizeMode="contain"
                style={styles.fullImg}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.userBox}>
        <View style={styles.userMainTextBox}>
          <Text style={styles.userMainText}>{'899240@gmail.com'}</Text>
        </View>
        <View style={styles.userSubTextBox}>
          <Text style={styles.userSubText}>
            오늘도 스마트한 소비를 즐겨보세요!
          </Text>
        </View>
        <View style={styles.userInfoTextBox}>
          <View style={styles.userRecentlyLogo}>
            <Image
              resizeMode="center"
              source={{uri: tmpData.logo[0].img}}
              style={styles.fullImg}
            />
            <View style={styles.verticalLine} />
          </View>
          <View style={styles.recentlyPointBox}>
            <View style={{}}>
              <Text style={styles.recentlyPointText}>적립 내역</Text>
            </View>
            <View>
              <Text style={styles.recentlyPointSubText}>
                [21.04.03] 카오리온 200p 적립
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.historyListBox}>
        <View style={styles.historyListWrapper}>
          <View>
            <Text style={styles.historyTitleText}>구매 내역</Text>
          </View>
          <View style={styles.historyListSubBox}>
            <Text style={styles.historySubText}>ㅡ</Text>
          </View>
        </View>
        <View style={styles.historyListWrapper}>
          <View>
            <Text style={styles.historyTitleText}>적립 내역</Text>
          </View>
          <View style={styles.historyListSubBox}>
            <Text style={styles.historySubText}>190</Text>
          </View>
        </View>
      </View>
      <View style={styles.menuContainer}>
        <MyPageMenu title="Setting" menus={SETTING_MENU} />
        <MyPageMenu title="Accout" menus={ACCOUNT_MENU} />
        <MyPageMenu title="고객센터" menus={CS_MENU} />
        <MyPageMenu title="About" menus={ABOUT_MENU} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#000',
  },
  HeaderStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 56,
    // eslint-disable-next-line eqeqeq
    top: Platform.OS == 'ios' ? 20 : 0,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  topBar: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topBarText: {
    fontFamily: themeStyle.FONT_BOLD,
    fontSize: 16,
    color: '#FFF',
  },

  topBarBox: {
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'flex-end',
  },
  topBarIcon: {
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },

  userBox: {
    backgroundColor: '#000',
    width: '100%',
    justifyContent: 'space-between',
  },

  userMainTextBox: {
    marginVertical: 15,
    paddingHorizontal: 20,
    paddingTop: 35,
  },
  userMainText: {
    fontFamily: themeStyle.FONT_BOLD,
    fontSize: 22,
    color: '#EBEBEB',
  },
  userSubTextBox: {
    paddingHorizontal: 20,
    paddingBottom: 35,
  },
  userSubText: {fontSize: 15, fontFamily: themeStyle.FONT_REGULAR},
  userInfoTextBox: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    borderColor: '#FFF',
    paddingBottom: 30,
    marginTop: 50,
    paddingHorizontal: 20,
  },
  recentlyPointBox: {},
  userRecentlyLogo: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    borderColor: '#666',
  },
  recentlyPointText: {
    fontFamily: themeStyle.FONT_BOLD,
    fontSize: 13,
    color: '#CCC',
  },
  recentlyPointSubText: {
    fontFamily: themeStyle.FONT_REGULAR,
    fontSize: 13,
    color: '#CCC',
  },
  verticalLine: {
    borderWidth: 0.2,
    borderColor: '#666',
    height: 30,
    position: 'absolute',
    bottom: -30,
  },
  historyListBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  historyListWrapper: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#EBEBEB',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  historyListSubBox: {
    marginTop: 15,
  },
  historyTitleText: {
    color: '#666',
    fontFamily: themeStyle.FONT_REGULAR,
    fontSize: 15,
  },
  historySubText: {
    color: '#000',
    fontFamily: themeStyle.FONT_BOLD,
    fontSize: 22,
  },
  menuContainer: {
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    paddingBottom: 100,
  },

  test: {
    borderColor: '#F00',
    backgroundColor: '#CFF',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  fullImg: {width: '100%', height: '100%'},
});

const SETTING_MENU = [
  {
    menu: '터치콘 연결관리',
    link: 'LinkManage',
  },
  {
    menu: 'PIN번호 변경',
    link: 'PinManage',
  },
  {
    menu: '지문 및 홍채 인증',
    link: 'BioAuthManage',
  },
  {
    menu: '마케팅 정보 알림',
    link: 'MarketManage',
  },
];
const ACCOUNT_MENU = [
  {
    menu: '약관 및 개인정보 처리 동의',
    link: 'TermsManage',
  },
  {
    menu: '탈퇴하기',
    link: 'LeaveMange',
  },
];
const CS_MENU = [
  {
    menu: 'FAQ',
    link: 'FAQList',
  },
  {
    menu: '1:1 문의하기',
    link: 'contactAsk',
  },
];
const ABOUT_MENU = [
  {
    menu: '공지사항',
    link: 'noticeList',
  },
  {
    menu: '터치콘 소개',
    link: 'infoTouchcon',
  },
  {
    menu: '버전 정보',
    link: 'TouchconVersion',
  },
];
