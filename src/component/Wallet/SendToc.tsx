import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import themeStyle from '../../style/theme.style';
import HeaderTitle from '../HeaderTitle';
import {LargeButton} from '../UI/button';

export default function SendToc() {
  const navigation = useNavigation();
  const onNavigate = () => {
    //@ts-ignore
    navigation.navigate('SendTocCount');
  };
  const onClose = () => {
    //@ts-ignore
    navigation.navigate('Wallet');
  };

  const [addr, setAddr] = React.useState('');

  return (
    <>
      <HeaderTitle
        prevButton={false}
        title="TOC 보내기"
        borderColor="#E5E5EA"
        onPress={onClose}
      />

      <View style={styles.container}>
        <View style={styles.contentsBox}>
          <View style={styles.contentsTextBox}>
            <Text style={styles.contentsText}>주소를 입력해 주세요</Text>
          </View>
          <View style={styles.contentsTextInputBox}>
            <TextInput
              placeholderTextColor={'#CCC'}
              style={styles.contentsTextInput}
              placeholder="출금주소"
              value={addr}
              onChangeText={(e: any) => setAddr(e.nativeEvent.text)}
            />
          </View>
        </View>
        <View style={styles.buttonBox}>
          <LargeButton
            onPress={onNavigate}
            title="다음 단계"
            color={themeStyle.Primary}
          />
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#FFF',
  },
  contentsBox: {flex: 8, justifyContent: 'flex-start', alignItems: 'center'},
  contentsTextBox: {marginTop: 50, height: 60},
  contentsText: {
    fontFamily: themeStyle.FONT_REGULAR,
    color: themeStyle.Black,
    fontSize: 20,
  },
  contentsTextInputBox: {
    height: 60,
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
  },
  contentsTextInput: {
    backgroundColor: '#FFF',
    borderBottomColor: '#E5E5EA',
    borderBottomWidth: 2,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: themeStyle.FONT_REGULAR,
  },

  buttonBox: {flex: 1, marginBottom: 12},
});
