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
  ScrollView,
} from 'react-native';
import HeaderBottomLine from '../../../components/HeaderBottomLine';
import {NormalLabel} from '../../../components/Label';
import RowView from '../../../components/RowView';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';

// const {height, width} = Dimensions.get('window');

// const vh = height / 100;
// const vw = width / 100;

const view = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderBottomLine />
      <NormalLabel
        style={{paddingVertical: 30, paddingHorizontal: 23}}
        text={
          '언제 어디서나 스캔하자 터치콘 팀입니다.\n' +
          '\n' +
          '카오리온이 터치콘이 실시하는 광고스캔 랜덤 보상의 첫 광고주로 선정되었습니다. 카오리온은 1990년 설립된 천연화장품의 원조 업체로서 유럽을 비롯한 동구권에서 높은 품질을 인정 받고 있습니다.\n' +
          '\n' +
          '터치콘은 카오리온의 핵심 상품에 스마트 큐알을 동봉하여 랜덤보상을 실시하게 됩니다.\n' +
          '감사합니다.\n' +
          '\n' +
          '터치콘 드림\n' +
          '\n' +
          '언제 어디서나 스캔하자 터치콘 팀입니다.\n' +
          '\n' +
          '카오리온이 터치콘이 실시하는 광고스캔 랜덤 보상의 첫 광고주로 선정되었습니다. 카오리온은 1990년 설립된 천연화장품의 원조 업체로서 유럽을 비롯한 동구권에서 높은 품질을 인정 받고 있습니다.\n' +
          '\n' +
          '터치콘은 카오리온의 핵심 상품에 스마트 큐알을 동봉하여 랜덤보상을 실시하게 됩니다.\n' +
          '감사합니다.\n' +
          '\n' +
          '터치콘 드림\n' +
          '\n' +
          '언제 어디서나 스캔하자 터치콘 팀입니다.\n' +
          '\n' +
          '카오리온이 터치콘이 실시하는 광고스캔 랜덤 보상의 첫 광고주로 선정되었습니다. 카오리온은 1990년 설립된 천연화장품의 원조 업체로서 유럽을 비롯한 동구권에서 높은 품질을 인정 받고 있습니다.\n' +
          '\n' +
          '터치콘은 카오리온의 핵심 상품에 스마트 큐알을 동봉하여 랜덤보상을 실시하게 됩니다.\n' +
          '감사합니다.\n' +
          '\n' +
          '터치콘 드림 '
        }
      />
    </ScrollView>

    // <WhiteSafeAreaView>
    //   <HeaderBottomLine />
    //   <RowView
    //     style={{
    //       paddingTop: 22,
    //       paddingHorizontal: 24,
    //       justifyContent: 'space-between',
    //       borderBottomWidth: 1,
    //       borderBottomColor: '#c4c4c4',
    //       paddingBottom: 18,
    //     }}>
    //     <Image
    //       source={require('../../../assets/images/policy_explain.png')}
    //       style={{
    //         resizeMode: 'cover',
    //       }}
    //     />
    //   </RowView>
    // </WhiteSafeAreaView>

    // <View>
    //   <Image
    //     source={require('../../../assets/images/policy_title.png')}
    //     style={{
    //       resizeMode: 'contain',
    //       width: width * 1,
    //       position: 'absolute',
    //       top: height * 0.007,
    //     }}
    //   />
    //   <TouchableNativeFeedback onPress={() => navigation.goBack()}>
    //     <Image
    //       source={require('../../../assets/images/btn_back.png')}
    //       style={{
    //         resizeMode: 'contain',
    //         width: width * 0.1,
    //         position: 'absolute',
    //         right: width * 0.85,
    //       }}
    //     />
    //   </TouchableNativeFeedback>

    //   <Image
    //     source={require('../../../assets/images/policy_explain.png')}
    //     style={{
    //       resizeMode: 'contain',
    //       width: width * 0.7,
    //       position: 'absolute',
    //       right: width * 0.15,
    //       top: height * -0.2,
    //     }}
    //   />
    // </View>
  );
};

export default view;
