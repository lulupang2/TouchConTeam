import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import HeaderBottomLine from '../../../components/HeaderBottomLine';
import RowView from '../../../components/RowView';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';
import Touchable from '../../../components/Touchable';
import {NormalBoldLabel, NormalLabel} from '../../../components/Label';
import BottomButton from '../../../components/BottomButton';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const BUTTON_LIST = [
  '전체',
  '랜덤보상',
  '광고스캔',
  '광고주',
  '스마트QR',
  '본인인증',
  '코인전송',
  '스테이킹',
  '코인거래',
  '이용방법',
  '보안',
  '계정관리',
];

const QUESTION_LIST = [
  {
    id: 1,
    title: '터치토큰으로 무엇을 할 수 있나요?',
    content:
      '터치토큰은 다양한 곳에 사용합니다.\n' +
      '쇼핑몰 결제나 공고업체 재화나 서비스를 이용할 때 사용합니다. 또는 외부 거래소 에 전송',
  },
  {id: 2, title: '이더리움 가스비는 무엇인가요?', content: '내용2'},
  {id: 3, title: '랜덤 보상은 최대 얼마까지 입니까?', content: '내용3'},
  {
    id: 4,
    title: '터치쇼핑몰은 무엇인가요?',
    content:
      '터치토큰은 다양한 곳에 사용합니다.\n' +
      '쇼핑몰 결제나 공고업체 재화나 서비스를 이용할 때 사용합니다. 또는 외부 거래소 에 전송터치토큰은 다양한 곳에 사용합니다.\n' +
      '쇼핑몰 결제나 공고업체 재화나 서비스를 이용할 때 사용합니다. 또는 외부 거래소 에 전송',
  },
];

const view = ({navigation}) => {
  const [selectedButton, setSelectedButton] = useState('전체');
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
    // 데이터 불러와서 리스트에 뿌려줄 화면들은 모두 이곳에서 함수호출
    // e.g. 버튼목록, 버튼메뉴 필터로 선택가능한 메뉴목록
  }, []);

  return (
    <WhiteSafeAreaView>
      <HeaderBottomLine />
      <ScrollView style={{flex: 1}}>
        <View style={styles.topContainer}>
          <FlatList
            numColumns={3}
            data={BUTTON_LIST}
            renderItem={({item, index}) => (
              <Touchable
                onPress={() => setSelectedButton(item)}
                style={{
                  ...styles.btnWrapper,
                  backgroundColor:
                    selectedButton === item ? '#fd7f36' : '#f7f7f7',
                  borderColor: selectedButton === item ? '#fd7f36' : '#c4c4c4',
                }}>
                <NormalBoldLabel
                  text={item}
                  style={{
                    ...styles.btnText,
                    color: selectedButton === item ? '#fff' : '#c4c4c4',
                  }}
                />
              </Touchable>
            )}
            keyExtractor={(item, index) => item.id + index.toString()}
          />
        </View>

        {QUESTION_LIST.map((question, index) => (
          <QnaMenu
            // index는 어떤 값을 반환하는 지모르 겠다.
            key={index}
            onPress={() => {
              if (selectedQuestion === question.id) {
                setSelectedQuestion(null);
              } else {
                setSelectedQuestion(question.id);
              }
            }}
            isOpen={question.id === selectedQuestion}
            title={question.title}
            content={question.content}
          />
        ))}
      </ScrollView>
      <BottomButton
        onPress={() => navigation.navigate('SendMsg')}
        text={'1:1 문의하기'}
      />
    </WhiteSafeAreaView>
  );
};

export default view;

const QnaMenu = ({onPress, isOpen, title, content}) => {
  return (
    <>
      <Touchable onPress={onPress} style={styles.qnaBtnWrapper}>
        <RowView>
          <Image
            source={require('../../../assets/icons/question.png')}
            style={{width: 32, height: 32, marginRight: 5}}
          />
          <NormalBoldLabel text={title} />
        </RowView>
        <AntDesign name={isOpen ? 'up' : 'down'} size={24} color={'#000'} />
      </Touchable>
      {/* isOpend 이 false , true인지에 따라서 <View>가 변환됨*/}
      {isOpen && (
        <View style={styles.qnaContent}>
          <NormalLabel text={content} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#f7f7f7',
  },
  btnWrapper: {
    width: (width - 35) / 3 - 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
    marginHorizontal: 14,
    marginVertical: 6,
    borderRadius: 6,
    borderWidth: 2,
  },
  btnText: {
    fontSize: 18,
    lineHeight: 20,
  },
  qnaBtnWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#c4c4c4',
  },
  qnaContent: {
    paddingHorizontal: 24,
    backgroundColor: '#f7f7f7',
    paddingTop: 32,
    paddingBottom: 39,
  },
});
