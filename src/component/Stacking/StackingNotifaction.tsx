import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Progress from 'react-native-progress';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import themeStyle from '../../style/theme.style';
import {setComma} from '../../util/comma';
type textProps = {
  title: string;
  content: string | number;
  ticker?: boolean;
};
export default function StackingNotifaction() {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.subText}>2분기 모집중</Text>
        <Text style={styles.mainText}>터치 스테이킹 4분기</Text>
      </View>
      <StackingNotifactionDetailText
        title="모집 기간"
        content="22년 4월 1일 ~ 4월 16일"
      />
      <StackingNotifactionDetailText
        title="모집 수량"
        content={setComma('8000000')}
        ticker
      />
      <StackingNotifactionDetailText
        title="이자 (7%)"
        content={setComma('560000')}
        ticker
      />
      <StackingNotifactionDetailText
        title="최소 신청 수량"
        content={setComma('1000')}
        ticker
      />
      <View style={styles.progressBar}>
        <Progress.Bar
          progress={9 / 10}
          color={'#000'}
          width={null}
          height={30}
          borderRadius={0}
          borderWidth={0}
        />
      </View>
      <View style={styles.quantity}>
        <Text style={styles.quantityText}>남은 수량 : 255.5 TOC</Text>
      </View>
    </View>
  );
}

const StackingNotifactionDetailText = ({title, content, ticker}: textProps) => {
  return (
    <View style={styles.StackingNotifactionDetailText}>
      <View style={styles.row}>
        <MaterialCommunityIcons
          name="star-four-points"
          color={'#000'}
          size={20}
        />
        <Text style={styles.detailTitle}>{title}</Text>
      </View>
      <Text style={styles.detailContent}>
        {ticker ? content + ' TOC' : content}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF90A5',
    padding: 30,
  },
  textBox: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  subText: {
    fontSize: 15,
    fontFamily: themeStyle.FONT_REGULAR,
    color: themeStyle.Black,
    marginBottom: 10,
  },
  mainText: {
    fontSize: 22,
    fontFamily: themeStyle.FONT_BOLD,
    color: themeStyle.Black,
  },
  StackingNotifactionDetailText: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  detailTitle: {
    fontSize: 15,
    fontFamily: themeStyle.FONT_BOLD,
    color: themeStyle.Black,
  },
  detailContent: {
    fontSize: 15,
    fontFamily: themeStyle.FONT_REGULAR,
    color: themeStyle.Black,
  },
  progressBar: {
    marginTop: 15,
    width: '100%',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#000',
  },
  quantity: {
    marginTop: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
  },
  quantityText: {
    fontSize: 12,
    fontFamily: themeStyle.FONT_REGULAR,
    color: '#FFF',
  },
  row: {
    flexDirection: 'row',
  },
});
