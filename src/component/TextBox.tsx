import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import themeStyle from '../style/theme.style';
import {heightPercentage, widthPercentage} from '../util/ResponsiveSize';
interface IProps {
  mainText?: string;
  subText?: string[];
  bigText?: number;
  size?: number;
  boderless?: boolean;
  mainBold?: string;
  mainColor?: string;
}
export default function TextBox({
  mainText,
  subText,
  bigText,
  size,
  boderless,
  mainBold,
  mainColor,
}: IProps) {
  return (
    <View style={!boderless ? styles.InfoBox : styles.InfoBoxBorderless}>
      {mainText && <Text style={styles.InfoMainText}>{mainText}</Text>}
      {mainBold && (
        <Text style={[styles.InfoMainTextBold, {color: mainColor}]}>
          {mainBold}
        </Text>
      )}

      {subText &&
        subText.map((item, index) => (
          <View style={styles.InfoSub} key={index}>
            <Text style={styles.ListDisc}>{'\u2022'}</Text>
            <Text style={styles.InfoSubText}>{item}</Text>
          </View>
        ))}
      {bigText && (
        <ScrollView style={styles.ScrollBox}>
          <Text style={dstyles(size).bigText}>{bigText}</Text>
        </ScrollView>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  InfoBox: {
    paddingHorizontal: widthPercentage(10),
    borderColor: '#E5E5EA',
    borderWidth: 1,
    borderRadius: 12,
    flex: 1,
  },
  InfoBoxBorderless: {
    flex: 1,
  },
  InfoMainText: {
    color: '#666',
    fontFamily: 'GmarketSansTTFMedium',
    fontSize: 13,
    paddingVertical: heightPercentage(10),
  },
  InfoMainTextBold: {
    color: '#000',
    fontFamily: themeStyle.FONT_BOLD,
    fontSize: 17,
    paddingVertical: heightPercentage(10),
  },
  InfoSubText: {
    color: '#999',
    fontFamily: 'GmarketSansTTFMedium',
    fontSize: 12,
    lineHeight: heightPercentage(16),
    letterSpacing: -0.5,
  },
  InfoSub: {
    flexDirection: 'row',
    flex: 1,
  },
  ListDisc: {
    color: '#999',
    paddingRight: 6,
  },
  ScrollBox: {},
});
const dstyles = (size: number) =>
  StyleSheet.create({
    // eslint-disable-next-line react-native/no-unused-styles
    bigText: {color: '#333', fontSize: size},
  });
