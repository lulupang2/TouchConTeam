import React from 'react';
import {Image, StyleSheet, View, ViewStyle} from 'react-native';
import {Text} from 'react-native-paper';
import themeStyle from '../../style/theme.style';
import {heightPercentage, widthPercentage} from '../../util/ResponsiveSize';

interface ICard {
  style: ViewStyle;
  item: {
    num: number;
    mode: string;
    title: string;
    subTitle: string;
    date: any;
    image: any;
    distance: string;
    discount: string;
    price: number;
    engTitle: string;
    korTitle: string;
  };
}
export default function ({style, item}: ICard) {
  return (
    <View style={style}>
      {item.mode === 'HOTISSUE' && (
        <>
          <View style={styles.imageBox}>
            <Image source={{uri: item.image}} style={styles.img} />
          </View>
          <View style={styles.textBox}>
            <View style={styles.titleBox}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subTitle}>{item.subTitle}</Text>
            </View>
            <Text style={styles.colorRegular}>{item.date}</Text>
          </View>
        </>
      )}
      {item.mode === 'FORYOU' && (
        <>
          <View style={styles.imageBox}>
            <Image source={{uri: item.image}} style={styles.img} />
          </View>
          <View style={styles.titleBox}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.colorRegular}>{item.distance}</Text>
          </View>
        </>
      )}
      {item.mode === 'BESTPRODUCT' && (
        <>
          <View style={styles.imageBox}>
            <Image source={{uri: item.image}} style={styles.img} />
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.titleBox}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subTitle}>{item.subTitle}</Text>
              <View style={styles.textBox}>
                <Text style={styles.colorBold}>{item.discount} </Text>
                <Text style={styles.fontBold}> {item.price} TOP</Text>
              </View>
            </View>
            <View style={styles.buttonBox}>
              <Text style={styles.fontRegular}>GO</Text>
            </View>
          </View>
        </>
      )}
      {item.mode === 'WITHUS' && (
        <>
          <View style={styles.logoContainer}>
            <View
              style={{
                width: widthPercentage(72),
                height: heightPercentage(72),
              }}>
              <Image source={{uri: item.image}} style={styles.logoImg} />
            </View>
            <View style={styles.logoTitleBox}>
              <Text style={styles.title}>{item.engTitle}</Text>
              <Text style={styles.subTitle}>{item.korTitle}</Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Card: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  imageBox: {flex: 5, alignItems: 'center', marginBottom: 20},
  img: {
    height: '100%',
    width: '100%',
  },
  textBox: {flexDirection: 'row'},
  titleBox: {},
  title: {
    fontFamily: themeStyle.FONT_REGULAR,
    fontWeight: '400',
    fontSize: 15,
  },
  subTitle: {
    color: '#666',
    fontFamily: themeStyle.FONT_REGULAR,
    fontSize: 15,
  },
  colorBold: {
    color: themeStyle.Primary,
    fontFamily: themeStyle.FONT_BOLD,
  },
  colorRegular: {
    color: themeStyle.Primary,
    fontFamily: themeStyle.FONT_REGULAR,
    fontSize: 15,
  },
  fontRegular: {
    fontFamily: themeStyle.FONT_REGULAR,
    fontSize: 13,
  },
  fontBold: {
    fontFamily: themeStyle.FONT_BOLD,
    fontSize: 13,
  },
  buttonBox: {
    borderRadius: 100,
    borderWidth: 1,
    width: widthPercentage(56),
    height: heightPercentage(56),
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    width: widthPercentage(160),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F2F2F7',
  },
  logoTitleBox: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImg: {
    width: 72,
    height: 72,
    borderRadius: 72,
    borderWidth: 1,
    borderColor: '#F2F2F7',
    resizeMode: 'contain',
  },
});
