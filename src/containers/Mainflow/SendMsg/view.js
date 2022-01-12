import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TouchableNativeFeedback,
  ScrollView,
  Alert,
} from 'react-native';
import BottomButton from '../../../components/BottomButton';
import {LongButton} from '../../../components/Botton';
import HeaderBottomLine from '../../../components/HeaderBottomLine';
import RowView from '../../../components/RowView';
import TitleInput, {ContentInput} from '../../../components/TxInput';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';

const view = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onSend = () => {};

  return (
    <WhiteSafeAreaView>
      <HeaderBottomLine />
      <ScrollView>
        <RowView
          style={{
            paddingTop: 18,
            paddingHorizontal: 24,
            paddingBottom: 15,
            // flex: 1,
          }}>
          <View
            style={{
              backgroundColor: '#5F408F',
              height: 45,
              width: 7,
              borderTopLeftRadius: 6,
              borderBottomLeftRadius: 6,
              // borderRadius: 6,
              // marginLeft: -5,
            }}
          />
          <Text style={styles.text}>제목</Text>
          <TitleInput value={title} onChangeText={setTitle} />
        </RowView>
        <ContentInput value={content} onChangeText={setContent} />

        <BottomButton
          onPress={() => {
            Alert.alert('준비중입니다.');
          }}
          text={'등록'}
          style={{marginTop: 80}}
        />
        {/* <LongButton text={'등록'} tcStyle={styles.btn} /> */}
      </ScrollView>
    </WhiteSafeAreaView>
  );
};

export default view;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 16,
    borderRadius: 5,
  },
  btn: {marginTop: 100},
});
