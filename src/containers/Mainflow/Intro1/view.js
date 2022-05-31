import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  View,
  Dimensions,
  SafeAreaView,
  Button,
} from 'react-native';
import TouchableNoFeedback from '../../../components/TouchableNoFeedback';
import PaginationDot from 'react-native-animated-pagination-dot';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IconButton} from 'react-native-paper';

const {height} = Dimensions.get('window');

export default function Intro({navigation, style, img, mainText, subText}) {
  const [curPage, setCurPage] = React.useState(0);
  function paginationHandler(e) {
    setCurPage(e);
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableNoFeedback
        onPress={() => navigation.navigate('Intro3')}
        style={{
          flex: 1,
          position: 'relative',
        }}>
        <View style={styles.ImgBox}>
          <Image
            style={styles.mainImg}
            source={require('../../../assets/images/intro1_main_img.png')}
          />
          {/* <Image
            style={styles.mainImg}
            source={img}
          /> */}
        </View>
        <View style={styles.PaginationBox}>
          <PaginationDot
            curPage={curPage}
            maxPage={3}
            activeDotColor={'#FA5C00'}
            sizeRatio={2}
          />
        </View>
        <View style={styles.TextBox}>
          <Text style={styles.MainText}>{mainText}</Text>

          <Text style={styles.SubText}>{subText}</Text>
        </View>
        <View
          style={{
            flex: 2,
            alignItems: 'center',

            marginTop: 30,
          }}>
          <IconButton
            icon="arrow-right"
            style={{backgroundColor: '#333'}}
            color="#FFF"
            size={56}
            onPress={() => paginationHandler(curPage + 1)}
          />
        </View>
      </TouchableNoFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ImgBox: {
    flex: 5,
    paddingTop: 60,
  },
  mainImg: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  PaginationBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  TextBox: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainText: {
    fontFamily: 'GmarketSansTTFBold',
    color: '#000000',
    fontSize: 32,
    textAlign: 'center',
    paddingBottom: 15,
  },
  SubText: {
    fontFamily: 'GmarketSansTTFMedium',
    color: '#999',
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 30,
  },
  Button: {
    borderRadius: 100,
    width: 56,
    height: 56,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
