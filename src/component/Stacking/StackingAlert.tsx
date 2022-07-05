import React from 'react';
import {StyleSheet, View} from 'react-native';
import TextBox from '../TextBox';
const textList = [
  '터치스테이킹은 매 분기 1회 진행됩니다.',
  '연간 총 4회(리워드 풀 매년 수량의 5% 책정)',
  '이자 지급 계산은 위의 표를 참고해주시길 바랍니다.',
  '신청은 선착순 마감입니다.',
];
interface IProps {
  color?: string;
}
export default function StackingAlert({color}: IProps) {
  return (
    <View style={styles(color).container}>
      <TextBox
        mainColor="#000"
        boderless
        mainBold="유의사항"
        subText={textList}
      />
    </View>
  );
}
const styles = (color: string) =>
  StyleSheet.create({
    // eslint-disable-next-line react-native/no-unused-styles
    container: {
      backgroundColor: color,
      padding: 30,
    },
  });
