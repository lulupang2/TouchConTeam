import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {heightPercentage, widthPercentage} from '../../util/ResponsiveSize';
type IProps = {
  subText: string;
  mainText: string;
};
export default function TitleTextBox({subText, mainText}: IProps) {
  return (
    <View style={styles.TextBox}>
      <View style={styles.UnderLine} />
      <Text style={styles.MainText}>{mainText}</Text>
      <Text style={styles.SubText}>{subText}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  TextBox: {
    flex: 1,
    alignItems: 'flex-start',
    marginTop: heightPercentage(30),
  },
  UnderLine: {
    borderColor: '#FA5C00',
    borderWidth: 2.5,
    backgroundColor: '#FA5C00',
    width: widthPercentage(40),
    marginBottom: 10,
  },
  MainText: {
    fontFamily: 'GmarketSansTTFBold',
    color: '#000000',
    fontSize: 32,
    textAlign: 'center',
    marginBottom: heightPercentage(20),
  },
  SubText: {
    fontFamily: 'GmarketSansTTFMedium',
    color: '#000',
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
  },
});
