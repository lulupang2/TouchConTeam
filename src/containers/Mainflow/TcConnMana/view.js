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

import {ConnMitem} from '../../../components/ConnMenuItem';
import HeaderBottomLine from '../../../components/HeaderBottomLine';

const view = ({navigation}) => {
  return (
    <SafeAreaView>
      <HeaderBottomLine />
      <View style={styles.view}>
        <ConnMitem text={'CAOLION'} />
        <ConnMitem text={'MEGAM'} />
        <ConnMitem text={'안동국밥'} />
      </View>
    </SafeAreaView>
  );
};

export default view;

const styles = StyleSheet.create({
  view: {
    height: '50%',
    paddingTop: 22,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingBottom: 18,
    display: 'flex',
    flexDirection: 'column',
  },
});

// const MENU = [
//   {id: 1, title: '터치토큰 연결 관리', path: 'TcConnMana'},
//   {id: 2, title: 'PIN번호 변경', path: 'Pinchg'},
//   {id: 3, title: '마케팅정보 알림', path: 'MarketingInfo'},
//   {id: 4, title: '탈퇴하기', path: 'SignOut'},
// ];

// const view = ({navigation}) => {
//   return (
//     <WhiteSafeAreaView>
//       <HeaderBottomLine />
//       <RowView
//         style={{
//           paddingTop: 22,
//           paddingHorizontal: 24,
//           justifyContent: 'space-between',
//           borderBottomWidth: 1,
//           borderBottomColor: '#c4c4c4',
//           paddingBottom: 18,
//         }}>
//         <NormalBoldLabel text={'이메일'} />
//         <NormalBoldLabel
//           text={'ngm1224@gmail.com'}
//           style={{fontSize: 20, lineHeight: 24}}
//         />
//       </RowView>

//       {MENU.map(menu => (
//         <MenuItem
//           key={menu.id}
//           title={menu.title}
//           onPress={() => navigation.navigate(menu.path)}
//         />
//       ))}
//     </WhiteSafeAreaView>
//   );
// };
