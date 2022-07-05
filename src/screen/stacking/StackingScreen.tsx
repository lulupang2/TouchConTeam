import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import HeaderTitle from '../../component/HeaderTitle';
import {LargeButton} from '../../component/UI/button';
import themeStyle from '../../style/theme.style';
import StackingAlert from '../../component/Stacking/StackingAlert';
import StackingBanner from '../../component/Stacking/StackingBanner';
import StackingNotifaction from '../../component/Stacking/StackingNotifaction';
import StackingInterest from '../../component/Stacking/StackingInterest';
import StackingInfo from '../../component/Stacking/StackingInfo';

export default function StackingScreen() {
  const navigation = useNavigation();
  const onNavigate = () => {
    //@ts-ignore
    navigation.navigate('StackingRegist');
  };
  return (
    <View style={styles.flex}>
      <HeaderTitle title="터치 스테이킹" prevButton />
      <ScrollView style={styles.conatiner}>
        <StackingBanner
          mainText="터치토큰 적립하고 이자 받으세요"
          subText="이자로 수익 2배 올리기!"
        />
        <StackingNotifaction />
        <StackingInterest />
        <StackingAlert color="#F2F2F7" />
        <StackingInfo />
        <View style={styles.buttonBox}>
          <LargeButton
            onPress={onNavigate}
            color={themeStyle.Primary}
            title="터치 스테이킹 신청"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {flex: 1, backgroundColor: '#FFF'},
  conatiner: {
    flex: 1,
    paddingTop: 32,
    paddingBottom: 52,
  },
  buttonBox: {
    height: 60,
    marginBottom: 52,
    marginHorizontal: 20,
  },
});
