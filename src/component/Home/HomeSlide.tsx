import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {Button, IconButton, Text} from 'react-native-paper';
import {BEST_PRODUCT, FOR_YOU, HOT_ISSUE, WITH_US} from '../../../mock/dummy';
import themeStyle from '../../style/theme.style';
import {heightPercentage, widthPercentage} from '../../util/ResponsiveSize';
import Slider from '../Slider';
interface IProps {
  section: string;
  modal?: () => void;
}
export default function HomeSlide({section, modal}: IProps) {
  const screenWidth = Math.round(Dimensions.get('window').width);
  return (
    <>
      <View style={styles.Container}>
        {section === 'HOTISSUE' && (
          <View style={styles.TextBox}>
            <Text style={styles.TitleText}>HOT ISSUE</Text>
          </View>
        )}
        {section === 'FORYOU' && (
          <View style={styles.SliderWrapper}>
            <Text style={styles.TitleText}>FOR YOU</Text>
            <IconButton icon="refresh" color="#b2b2b2" size={30} />
            <Text style={styles.SubTitleText}>{tmpLocation}</Text>
          </View>
        )}
        {section === 'BESTPRODUCT' && (
          <View style={styles.TextBox}>
            <Text style={styles.TitleText}>BEST PRODUCT</Text>
            <Image
              style={styles.decoImg}
              source={require('../../../assets/images/home/home_deco.png')}
            />
          </View>
        )}
        {section === 'WITHUS' && (
          <View style={styles.TextBox}>
            <Text style={styles.TitleText}>WITH US</Text>
            <Image
              style={styles.decoImg}
              source={require('../../../assets/images/auth/deco_login.png')}
            />
          </View>
        )}
      </View>
      <Slider
        gap={20}
        offset={36}
        //@ts-ignore
        pages={
          section === 'HOTISSUE'
            ? HOT_ISSUE
            : section === 'FORYOU'
            ? FOR_YOU
            : section === 'BESTPRODUCT'
            ? BEST_PRODUCT
            : section === 'WITHUS'
            ? WITH_US
            : null
        }
        pageWidth={section === 'WITHUS' ? 160 : screenWidth - (16 + 36) * 2}
      />
      {section === 'BESTPRODUCT' ? (
        <View style={styles.buttonBox}>
          <Button style={styles.moreButton} onPress={modal}>
            <Text style={styles.moreButtonText}>상품 더보기</Text>
          </Button>
        </View>
      ) : section === 'WITHUS' ? (
        <View style={styles.buttonBox}>
          <Button style={styles.moreButton} onPress={modal}>
            <Text style={styles.moreButtonText}>제휴사 더보기</Text>
          </Button>
        </View>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 40,
    marginTop: 70,
    marginBottom: 20,
  },
  SliderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  TextBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
  },
  TitleText: {
    fontFamily: themeStyle.FONT_BOLD,
    fontSize: themeStyle.FONT_L,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SubTitleText: {
    fontFamily: themeStyle.FONT_REGULAR,
    color: themeStyle.Primary,
  },
  decoImg: {
    marginHorizontal: widthPercentage(10),
    resizeMode: 'contain',
    width: widthPercentage(100),
  },
  buttonBox: {
    marginTop: 30,
    height: heightPercentage(40),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  moreButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    marginHorizontal: 40,
    height: heightPercentage(40),
  },
  moreButtonText: {
    color: '#666',
    fontFamily: themeStyle.FONT_REGULAR,
    fontSize: 15,
  },
});
const tmpLocation = '석촌동';
