import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PinKeyBoard} from '../../component/Auth/PinKeyboard';
import HeaderTitle from '../../component/HeaderTitle';
import {widthPercentage} from '../../util/ResponsiveSize';

export default function PinManage() {
  const [password, setPassword] = React.useState([]);
  const onPressHandler = (data: string) => {
    if (!data) {
      return;
    }
    if (password.length < 4) {
      setPassword(prevData => {
        return [...prevData, data];
      });
    }
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
    <>
      <HeaderTitle title="PIN 번호 변경" prevButton={true} />
      <View style={styles.Container}>
        <View style={{}}>
          <Text style={styles.PinTitleText}>PIN 번호 입력</Text>
        </View>
        <View style={styles.PinBox}>
          <View style={onPinCodeColorChangeHandler(0)} />
          <View style={onPinCodeColorChangeHandler(1)} />
          <View style={onPinCodeColorChangeHandler(2)} />
          <View style={onPinCodeColorChangeHandler(3)} />
        </View>
      </View>
      <View style={styles.KeyboardBox}>
        <PinKeyBoard
          onPress={onPressHandler}
          onDelete={onPasswordDeleteHandler}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  PinTitleText: {
    fontFamily: 'GmarketSansTTFBold',
    fontSize: 22,
    color: '#000',
    letterSpacing: -1,
  },
  //   PinSubText: {
  //     fontFamily: 'GmarketSansTTFMedium',
  //     fontSize: 13,
  //     color: '#000',
  //     letterSpacing: -1,
  //     textDecorationLine: 'underline',
  //   },
  Container: {
    flex: 43,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  PinBox: {flexDirection: 'row', padding: 30},
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
  KeyboardBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 43,
    backgroundColor: '#FFF',
  },
});
