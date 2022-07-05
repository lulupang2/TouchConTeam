import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {heightPercentage, widthPercentage} from '../../util/ResponsiveSize';
interface IProps {
  mainText?: string;
  subText?: string[];
}
export default function AlertBox({mainText, subText}: IProps) {
  return (
    <View style={styles.AlertBox}>
      {mainText && <Text style={styles.AlertMainText}>{mainText}</Text>}
      {subText &&
        subText.map((item, index) => (
          <View style={styles.AlertSub} key={index}>
            <Text style={styles.ListDisc}>{'\u2022'}</Text>
            <Text style={styles.AlertSubText}>{item}</Text>
          </View>
        ))}
    </View>
  );
}
const styles = StyleSheet.create({
  AlertBox: {
    backgroundColor: '#FFF7F2',
    flex: 13,
    justifyContent: 'center',
    borderRadius: 12,
    padding: 12,
    marginVertical: 12,
  },
  AlertMainText: {
    color: '#FA5F00',
    fontFamily: 'GmarketSansTTFBold',
    fontSize: 13,
  },
  AlertSub: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  AlertSubText: {
    color: '#999',
    fontFamily: 'GmarketSansTTFMedium',
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: -0.5,
    flex: 1,
  },
  ListDisc: {
    color: '#999',
    paddingHorizontal: 8,
  },
});
