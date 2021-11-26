import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, SafeAreaView, Alert} from 'react-native';
import {
  Container,
  Input,
  TopContainer,
  Button,
  Sum,
  TextInputContainer,
  TouchImage,
  Information,
  TableContainer,
  BottomContainer,
  Division,
  TitleContainer,
  Title,
  Subtitle,
  CalendarInformation,
  JoinBtn,
  Join,
  Warning,
} from './styles';
import Touchable from '../../../components/Touchable';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';
import HeaderBottomLine from '../../../components/HeaderBottomLine';
const DATA = [
  {
    title: '기준 : 매 분기 1회 진행',
  },
  {
    title: '년간 총 4회 (리워드 풀 매년 수량의 5% 책정)',
  },
  {
    title: '2022년 1분기 터치-스테이킹이 아래와 같이 시작됩니다.',
  },
  {
    title: '신청기간 : 2022년 01월 01일 ~ 01월 10일',
  },
  {
    title: '최소 신청수량 : 1,000 Touch',
  },
  {
    title: '지급(예상)이자 : 7%',
  },
  {
    title: '이자 지급 계산은 위의 표를 참고해주시길 바랍니다.',
  },
];

const Staking = () => {
  const isFocused = useIsFocused();
  const [interest, setInterest] = useState('1000000000');
  const [sumInput, onChangeSumInput] = useState('');
  let interestInforFirst = parseInt(parseInt(interest) * 0.07);
  let interestInforTwo = parseInt(
    (interestInforFirst + parseInt(interest)) * 0.07,
  );
  let interestInforThree = parseInt(
    (interestInforTwo + interestInforFirst + parseInt(interest)) * 0.07,
  );
  let interestInforFour = parseInt(
    (interestInforThree +
      interestInforTwo +
      interestInforFirst +
      parseInt(interest)) *
      0.07,
  );
  let totals =
    interestInforTwo +
    interestInforFour +
    interestInforThree +
    interestInforFirst;
  let calendarData = [
    ['분기', '모집기간', '지급이자(7%)', '모집수량', '지급일자'],
    [
      '1',
      '01.01-01.15',
      interestInforFirst?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
      '8,000,000',
      '04.10',
    ],
    [
      '2',
      '04.01-04.15',
      interestInforTwo?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
      '8,000,000',
      '07.10',
    ],
    [
      '3',
      '07.01-07.15',
      interestInforThree?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
      '8,000,000',
      '10.10',
    ],
    [
      '4',
      '10.01-10.15',
      interestInforFour?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
      '11,375,000',
      '01.10',
    ],
    [
      'Total',
      '',
      totals?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
      '35,375,140',
      '',
    ],
  ];
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Touchable onPress={() => navigation.navigate('Main')} style={{}}>
          <AntDesign
            name="close"
            size={26}
            color={'#000'}
            style={{
              padding: 4,
              alignSelf: 'center',
              color: '#c4c4c4',
              paddingRight: 16,
            }}
          />
        </Touchable>
      ),
    });
  }, []);
  useEffect(() => {
    setInterest('1000000000');
    onChangeSumInput('');
  }, [isFocused]);
  const onClickSum = () => {
    setInterest(sumInput);
    if (sumInput.length === 0) {
      Alert.alert('수량을 입력해주세요');
      return;
    }
    if (parseInt(sumInput) < 1000) {
      Alert.alert('1000 이상만 가능합니다');
      return;
    }
    try {
      Alert.alert('계산완료');
    } catch (e) {
      Alert.alert('계산실패');
    }
  };
  const renderItem = ({item, index}) => {
    return (
      <View key={index} style={{flexDirection: 'row', flex: 1}}>
        <Text>{'\u2022'}</Text>
        <Subtitle style={{flexShrink: 1, marginBottom: index === 1 ? 15 : 0}}>
          {item.title}
        </Subtitle>
      </View>
    );
  };
  const calendarRender = ({item, index}) => {
    return (
      <View
        key={index}
        style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'space-between',
          borderBottomColor: '#aaa',
          borderBottomWidth: 1,
        }}>
        <CalendarInformation
          total={true}
          bold={index === 0}
          color={index === 5}
          style={{flex: 0.1}}>
          {item[0]}
        </CalendarInformation>
        <CalendarInformation style={{flex: 0.275}}>
          {item[1]}
        </CalendarInformation>
        <CalendarInformation style={{flex: 0.265}} color={index === 5}>
          {item[2]}
        </CalendarInformation>
        <CalendarInformation style={{flex: 0.2}} color={index === 5}>
          {item[3]}
        </CalendarInformation>
        <CalendarInformation style={{flex: 0.16}}>
          {item[4]}
        </CalendarInformation>
      </View>
    );
  };
  return (
    <WhiteSafeAreaView>
      <HeaderBottomLine style={{height: 3}} />
      <Container contentContainerStyle={{paddingBottom: 50}}>
        <TopContainer>
          <TextInputContainer>
            <Input
              value={sumInput}
              keyboardType="numeric"
              placeholder="수량"
              onChangeText={onChangeSumInput}
            />
            <TouchImage
              source={require('../../../assets/images/touchLogo.png')}
            />
          </TextInputContainer>
          <Button
            onPress={() => {
              onClickSum();
            }}>
            <Sum>계산</Sum>
          </Button>
        </TopContainer>
        <Information>최소 신청수량은 1,000 Touch 입니다.</Information>
        <TableContainer>
          <FlatList
            data={calendarData}
            renderItem={calendarRender}
            keyExtractor={(item, index) => index.toString()}
          />
        </TableContainer>
        <BottomContainer>
          <TitleContainer>
            <Division />
            <Title>터치-스테이킹 안내사항</Title>
          </TitleContainer>

          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </BottomContainer>
        <Warning>*신청은 선착순 마감입니다.</Warning>
        <JoinBtn>
          <Join>신청하기</Join>
        </JoinBtn>
      </Container>
    </WhiteSafeAreaView>
  );
};

export default Staking;
