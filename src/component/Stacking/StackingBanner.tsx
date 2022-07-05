import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import themeStyle from '../../style/theme.style';
interface IProps {
  mainText: string;
  subText: string;
}
export default function StackingBanner({mainText, subText}: IProps) {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.subText}>{subText}</Text>
        <Text style={styles.mainText}>{mainText}</Text>
      </View>
      <View style={styles.imgBox}>
        <Image
          style={styles.stackingBannerImg}
          source={require('../../../assets/images/stacking/stackingBanner.png')}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
  },
  imgBox: {width: '100%'},
  subText: {
    fontSize: 17,
    fontFamily: themeStyle.FONT_REGULAR,
    color: themeStyle.Black,
    textAlign: 'center',
    marginBottom: 20,
  },
  mainText: {
    textAlign: 'center',
    fontSize: 32,
    fontFamily: themeStyle.FONT_BOLD,
    color: themeStyle.Black,
  },
  stackingBannerImg: {
    resizeMode: 'contain',
    width: '100%',
  },
});
