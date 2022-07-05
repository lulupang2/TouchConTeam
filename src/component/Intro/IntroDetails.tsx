import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {fontPercentage, heightPercentage} from '../../util/ResponsiveSize';
import TouchableNoFeedback from '../TouchableNoFeedback';
import {IntroProps} from './Intro';

const IntroDetails = ({img, mainText, subText, style, onPress}: IntroProps) => {
  return (
    <TouchableNoFeedback style={style}>
      <View style={styles.ImgBox}>
        <Image style={styles.mainImg} source={img} />
      </View>

      <View style={styles.TextBox}>
        <Text style={styles.MainText}>{mainText}</Text>

        <Text style={styles.SubText}>{subText}</Text>
      </View>
    </TouchableNoFeedback>
  );
};

//스타일
const styles = StyleSheet.create({
  TouchableContainer: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#FFF',
  },
  ImgBox: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  mainImg: {
    resizeMode: 'contain',
    height: '100%',
  },
  TextBox: {
    marginTop: 30,
    paddingTop: 30,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainText: {
    fontFamily: 'GmarketSansTTFBold',
    color: '#000000',
    fontSize: fontPercentage(32),
    textAlign: 'center',
    paddingBottom: heightPercentage(15),
  },
  SubText: {
    fontFamily: 'GmarketSansTTFMedium',
    color: '#999',
    fontSize: fontPercentage(15),
    fontWeight: '400',
    textAlign: 'center',
    paddingTop: heightPercentage(15),
    paddingBottom: heightPercentage(30),
  },
});

export default IntroDetails;
