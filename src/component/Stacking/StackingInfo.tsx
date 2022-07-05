import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import themeStyle from '../../style/theme.style';
interface ITextProps {
  data: {num: number; title: string; content: string}[];
}

const contentList = [
  {
    num: 0,
    title: '터치스테이킹이란?',
    content:
      '터치콘 월렛 앱 내에서 사용하지 않고 보유하신 터치콘을 예치하시면 분기 단위로 예치 수량에 대해 일정한 보상을 드리는 제도입니다.',
  },
  {
    num: 1,
    title: '언제 신청할 수 있나요?',
    content:
      '매 분기 첫 달에 해당하는 10일까지 신청을 받습니다. 자세한 내용은 공지사항을 참조하시기 바랍니다.',
  },
  {
    num: 2,
    title: '보상율은 얼마나 되나요?',
    content:
      '매년 리워드 풀에서 5%의 재원으로 보상해드립니다. 분기별 예치 수량과 지급 수량을 환산하여 보상해 드리며, 평균 3~7%로 추정하고 있습니다.',
  },
  {
    num: 3,
    title: '최소 예치금액이 있나요?',
    content:
      '서비스 초기는 최소 1,000 TOC 이상 예치하셔야 스테이킹이 가능합니다.',
  },
  {
    num: 4,
    title: '보상은 언제 받을 수 있나요?',
    content: '매 분기가 끝나는 시점에 자동으로 지갑에 전송해 드립니다.',
  },
];

const InfoText = ({data}: ITextProps) => {
  return (
    <>
      {data.map((item: any) => (
        <>
          <View key={item.num} style={styles.contentBox}>
            <Text style={styles.contentTitleText}>{item.title}</Text>
          </View>
          <View>
            <Text key={item.num} style={styles.contentText}>
              {item.content}
            </Text>
          </View>
        </>
      ))}
    </>
  );
};
export default function StackingInfo() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>터치-스테이킹이란?</Text>
      </View>
      <View>
        <InfoText data={contentList} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 30,
  },
  titleText: {
    color: themeStyle.Black,
    fontFamily: themeStyle.FONT_BOLD,
    fontSize: 18,
  },
  contentBox: {
    flex: 1,
    marginTop: 30,
  },
  contentTitleText: {
    color: themeStyle.Black,
    fontFamily: themeStyle.FONT_BOLD,
    fontSize: 13,
    marginBottom: 10,
  },
  contentText: {
    color: '#666',
    fontFamily: themeStyle.FONT_REGULAR,
    fontSize: 13,
    letterSpacing: -0.8,
  },
});
