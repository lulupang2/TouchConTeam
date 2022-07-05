import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PinKeyBoard} from '../../component/Auth/PinKeyboard';
import {widthPercentage} from '../../util/ResponsiveSize';

export default function SignUpPinConfirm() {
  const [password, setPassword] = React.useState([]);

  const onPressHandler = async data => {
    if (password.length < 4)
      await setPassword(prevData => {
        return [...prevData, data];
      });
    console.log('log :', password);
  };
  const onPasswordDeleteHandler = () => {
    const result = password.slice(0, -1);
    setPassword(result);
  };
  const onPinCodeColorChangeHandler = (num: number) => {
    if (password.length > num) {
      return styles.EnteredPin;
    } else {
      return styles.NotEndteredPin;
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <View
        style={{
          flex: 43,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{}}>
          <Text style={styles.PinTitleText}>PIN 번호 재입력</Text>
        </View>
        <View style={{flexDirection: 'row', padding: 30}}>
          <View style={onPinCodeColorChangeHandler(0)} />
          <View style={onPinCodeColorChangeHandler(1)} />
          <View style={onPinCodeColorChangeHandler(2)} />
          <View style={onPinCodeColorChangeHandler(3)} />
        </View>
        <View>
          <Text style={styles.PinSubText}>PIN 번호를 분실했어요</Text>
        </View>
      </View>
      <View style={{flex: 13}} />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 43,
        }}>
        <PinKeyBoard
          onPress={onPressHandler}
          onDelete={onPasswordDeleteHandler}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  PinTitleText: {
    fontFamily: 'GmarketSansTTFBold',
    fontSize: 22,
    color: '#000',
    letterSpacing: -1,
  },
  PinSubText: {
    fontFamily: 'GmarketSansTTFMedium',
    fontSize: 13,
    color: '#000',
    letterSpacing: -1,
    textDecorationLine: 'underline',
  },
  EnteredPin: {
    backgroundColor: '#FA5C00',
    width: widthPercentage(20),
    height: widthPercentage(20),
    borderRadius: widthPercentage(20),
    marginRight: 11,
  },
  NotEndteredPin: {
    backgroundColor: '#F2F2F7',
    width: widthPercentage(20),
    height: widthPercentage(20),
    borderRadius: widthPercentage(20),
    marginRight: 11,
  },
});
