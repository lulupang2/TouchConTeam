import React, {version} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Touchable,
  ScrollView,
} from 'react-native';
import Navbar from '../../../components/Navbar/view';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';
import BottomButton from '../../../components/BottomButton';
import {NormalBoldLabel} from '../../../components/Label';
import RowView from '../../../components/RowView';

const view = ({navigation}) => {
  return (
    <WhiteSafeAreaView>
      <Navbar />
      <Image
        source={require('../../../assets/images/star_congra.png')}
        resizeMode="contain"
        style={{width: '100%', position: 'relative', top: -161}}
      />

      <View style={styles.upper_back}>
        <View style={styles.upper_point}>
          <View style={styles.wh_line}>
            <RowView style={styles.ro1}>
              <Text style={{color: '#ffffff', fontSize: 30, marginTop: 25}}>
                500
              </Text>
              <Image
                source={require('../../../assets/images/touch_blue_text.png')}
                resizeMode="contain"
                style={{
                  width: 64,
                  height: 19,
                  marginTop: 35,
                }}
              />
            </RowView>
          </View>
        </View>
        <Btnwhite text={'적립하기'} />
      </View>

      <ScrollView>
        <View
          style={{
            minHeight: 100,
            marginHorizontal: 52,
            backgroundColor: 'rgba(14, 15, 15, 0.8)',
            marginTop: 84,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{marginLeft: 20, fontSize: 15, color: '#fff'}}>
            현재 적립액
          </Text>
          <Text style={{fontSize: 20, color: '#fff'}}>2500</Text>
          <Image
            source={require('../../../assets/images/touch_blue_text.png')}
            resizeMode="contain"
            style={{
              width: 64,
              height: 19,
              marginRight: 9,
            }}
          />
        </View>
        <BottomButton text={'나의 지갑가기'} style={{marginTop: 104}} />
      </ScrollView>
    </WhiteSafeAreaView>
  );
};

export default view;

const styles = StyleSheet.create({
  ro1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 56,
    marginRight: 41,
  },
  wh_line: {
    borderColor: '#fff',
    borderWidth: 2,
    marginHorizontal: 11,
    marginVertical: 9,
    minHeight: 106,
    borderRadius: 10,
  },
  upper_back: {
    height: 276,
    width: '100%',
    backgroundColor: '#FD7F36',
    position: 'absolute',
    top: 130,
    zIndex: -1,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  upper_point: {
    minHeight: 123,
    marginHorizontal: 51,
    marginVertical: 39,
    backgroundColor: '#c4c4c4',
    borderRadius: 10,
  },
});

const Btnwhite = ({onPress, text, style}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 327,
        height: 50,
        paddingVertical: 15,
        borderRadius: 53,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 32,
        marginHorizontal: 24,
        ...style,
        // position: 'absolute', width: width-48, bottom: 32,
      }}>
      <NormalBoldLabel
        text={text}
        style={{fontSize: 20, lineHeight: 24, color: '#fd7f36'}}
      />
    </TouchableOpacity>
  );
};
