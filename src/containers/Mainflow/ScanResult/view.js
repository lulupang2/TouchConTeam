import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TouchableNativeFeedback,
  ScrollViewBase,
  ScrollView,
} from 'react-native';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';
import {LongButton} from '../../../components/Botton';

const view = ({navigation}) => {
  return (
    <WhiteSafeAreaView>
      <View style={styles.back}>
        <View style={{flex: 1}}>
          <View style={styles.upperBack}>
            <Text style={styles.h1}>축하합니다.</Text>
          </View>

          <View style={styles.point}>
            <View style={styles.inner_point}>
              <Text style={{alignSelf: 'center'}}>Input 기능 필요</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.tach}
            onPress={() => {
              alert('버튼작동');
            }}>
            <Text style={styles.btn_text}>적립하기</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={{flex: 1}}>
        <View style={styles.charge}></View>
        <LongButton style={styles.go_wallet} text={'나의 지갑가기'} />
      </ScrollView>
    </WhiteSafeAreaView>
  );
};

export default view;

const styles = StyleSheet.create({
  upperBack: {
    minHeight: 71,
    backgroundColor: 'rgba(14, 15, 15, 0.8)',
  },
  h1: {
    fontSize: 30,
    color: '#ffffff',
    alignSelf: 'center',
    marginVertical: 25,
  },
  point: {
    minHeight: 123,
    marginHorizontal: 51,
    marginVertical: 39,
    borderRadius: 10,
    backgroundColor: '#c4c4c4',
  },
  inner_point: {
    borderWidth: 2,
    borderRadius: 10,
    minHeight: 106,
    marginHorizontal: 11,
    marginVertical: 8,
    borderColor: '#ffffff',
  },
  charge: {
    height: 100,
    backgroundColor: 'black',
    marginHorizontal: 38,
    marginVertical: 108,
  },
  back: {
    width: 390,
    height: 350,
    backgroundColor: '#FD7F36',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  tach: {
    backgroundColor: '#FFFFFF',
    width: '85%',
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    alignSelf: 'center',
  },
  go_wallet: {
    marginBottom: 32,
  },
  btn_text: {fontSize: 20, fontWeight: 'bold', color: '#FD7F36', padding: 10},
});
