import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  View,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import TouchableNoFeedback from '../../../components/TouchableNoFeedback';

const {height} = Dimensions.get('window');

export default function Intro2({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor: '#123169', flex: 1}}>
      <TouchableNoFeedback
        onPress={() => navigation.navigate('Intro3')}
        style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Image
            source={require('../../../assets/images/intro3_h2.png')}
            style={styles.h2}
          />
          <View style={{flexDirection: 'row', paddingLeft: 30}}>
            <Text style={styles.content}>
              {
                '터치콘 RAP 파트너가 배부하는\n리워드콘을 획득하세요!\n\n최소 10 코인부터~\n최대 30만 코인까지~\n랜덤으로 잭팟 행운을 드립니다.\n100 코인이상 당첨 확률 무려 30%!!!\n\n리워드콘에 있는 QR코드를 확인하세요.\n그리고 터치콘 앱으로 스캔하세요.'
              }
            </Text>
          </View>
        </View>
        <Image
          source={require('../../../assets/images/intro3_bottom.png')}
          style={{
            resizeMode: 'stretch',
            width: '100%',
            height: height * 0.5,
          }}
        />
      </TouchableNoFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  h2: {
    resizeMode: 'contain',
    width: '80%',
    alignSelf: 'center',
    position: 'relative',
  },

  content: {
    flex: 1,
    flexWrap: 'wrap',
    color: '#FFFFFF',
    // fontSize: 14,
    // fontWeight: 'bold',
    // alignSelf: 'center',
    // width: '85%',
    marginBottom: 40,
  },
});
