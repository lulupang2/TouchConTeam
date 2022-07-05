import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import themeStyle from '../../style/theme.style';
import {setComma} from '../../util/comma';
import {PinKeyBoard} from '../Auth/PinKeyboard';
import HeaderTitle from '../HeaderTitle';
import {LargeButton} from '../UI/button';

export default function SendTocCount() {
  const navigation = useNavigation();
  const onNavigate = () => {
    //@ts-ignore
    navigation.navigate('SendTocCount');
  };
  const onClose = () => {
    //@ts-ignore
    navigation.navigate('Wallet');
  };

  const [count, setCount] = React.useState('');
  const onKeyboardPress = (e: any) => {
    setCount(count + e);
  };
  const onDelete = () => {
    setCount(count.slice(0, -1));
  };
  return (
    <>
      <HeaderTitle
        prevButton={true}
        title="TOC 보내기"
        borderColor="#E5E5EA"
        onPress={onClose}
      />

      <View style={styles.container}>
        <View style={styles.contentsBox}>
          <View style={styles.contentsTextBox}>
            <Text style={styles.contentsText}>수량을 입력해 주세요</Text>
          </View>
          <View style={styles.contentsTextInputBox}>
            {!count ? (
              <Text style={styles.placeHolderText}>출금수량 </Text>
            ) : (
              <Text style={styles.contentsTextInput}>{setComma(count)} </Text>
            )}
          </View>
          <View style={styles.availableTextBox}>
            <Text style={styles.availableCount}>
              출금 가능 수량 :<Text style={styles.TextPoint}> 12,000 TOC</Text>
            </Text>
          </View>
        </View>
        <View style={styles.keyboardBox}>
          <PinKeyBoard onPress={onKeyboardPress} onDelete={onDelete} dot />
        </View>
        <View style={styles.buttonBox}>
          <LargeButton
            onPress={onNavigate}
            title="TOC 보내기"
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
  contentsBox: {flex: 3, justifyContent: 'flex-start', alignItems: 'center'},
  contentsTextBox: {marginTop: 20, height: 60},
  contentsText: {
    fontFamily: themeStyle.FONT_REGULAR,
    color: themeStyle.Black,
    fontSize: 20,
  },
  keyboardBox: {flex: 5, justifyContent: 'center', alignItems: 'center'},

  contentsTextInputBox: {
    height: 60,
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    borderBottomColor: '#E5E5EA',
    borderBottomWidth: 2,
  },
  contentsTextInput: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: themeStyle.FONT_REGULAR,
    color: '#000',
  },
  placeHolderText: {
    fontFamily: themeStyle.FONT_REGULAR,
    color: '#CCC',
    fontSize: 20,
    textAlign: 'center',
  },
  availableCount: {
    fontFamily: themeStyle.FONT_REGULAR,
    color: themeStyle.Black,
  },
  TextPoint: {color: themeStyle.Primary},
  buttonBox: {flex: 1, marginBottom: 12},
  availableTextBox: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
