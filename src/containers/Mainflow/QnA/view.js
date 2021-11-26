import React, {useEffect, useState, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
  Linking,
} from 'react-native';
import HeaderBottomLine from '../../../components/HeaderBottomLine';
import RowView from '../../../components/RowView';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';
import Touchable from '../../../components/Touchable';
import {NormalBoldLabel, NormalLabel} from '../../../components/Label';
import BottomButton from '../../../components/BottomButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {QUESTION_LIST} from '../../../constants';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const BUTTON_LIST = [
  '전체',
  'TOC',
  'RAP광고주',
  'TOP 포인트',
  '토큰전환',
  '지갑관리',
  '전송',
  '리워드콘',
  'T-MAIL',
  '스테이킹',
  '큐알스캔',
  '기프티콘',
];

const view = ({navigation}) => {
  const [menuList, setMenuList] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState('전체');
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initMenu();
    // 데이터 불러와서 리스트에 뿌려줄 화면들은 모두 이곳에서 함수호출
    // e.g. 버튼목록, 버튼메뉴 필터로 선택가능한 메뉴목록
  }, []);

  const initMenu = useCallback(() => {
    let newMenuList = {};

    QUESTION_LIST.forEach(question => {
      // if (!newMenuList.hasOwnProperty(question.category)) {
      if (newMenuList[question.category] === undefined) {
        // = newMenuList['전체'] === undefined, question.category = '전체'
        newMenuList[question.category] = [];
      }
      newMenuList[question.category].push(question);
    });
    setMenuList(newMenuList);
    setIsLoading(false);
  }, []);

  const renderQuestionView = btnMenu => {
    let list = btnMenu === '전체' ? QUESTION_LIST : menuList[btnMenu];

    return list?.map((question, index) => (
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
    ));
  };

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
                onPress={() => setSelectedMenu(item)}
                style={{
                  ...styles.btnWrapper,
                  backgroundColor:
                    selectedMenu === item ? '#fd7f36' : '#f7f7f7',
                  borderColor: selectedMenu === item ? '#fd7f36' : '#c4c4c4',
                }}>
                <NormalBoldLabel
                  text={item}
                  style={{
                    ...styles.btnText,
                    color: selectedMenu === item ? '#fff' : '#c4c4c4',
                  }}
                />
              </Touchable>
            )}
            keyExtractor={(item, index) => item.id + index.toString()}
          />
        </View>

        {!isLoading && renderQuestionView(selectedMenu)}
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
        <RowView style={{flex: 1}}>
          <Image
            source={require('../../../assets/icons/question.png')}
            style={{width: 32, height: 32, marginRight: 5}}
          />
          <NormalBoldLabel
            text={title}
            style={{flexShrink: 1}}
            multiline={true}
          />
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
    // paddingHorizontal: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: '#f7f7f7',
  },
  btnWrapper: {
    // width: (width - 35) / 3 - 24,
    width: (width - 20) / 3 - 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
    // marginHorizontal: 14,
    marginHorizontal: 6,
    marginVertical: 6,
    borderRadius: 6,
    borderWidth: 2,
  },
  btnText: {
    paddingHorizontal: 4,
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
    width: '100%',
    flex: 1,
  },
  qnaContent: {
    paddingHorizontal: 24,
    backgroundColor: '#f7f7f7',
    paddingTop: 32,
    paddingBottom: 39,
  },
});
