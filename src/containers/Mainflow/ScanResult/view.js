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
} from 'react-native';
import {LongButton} from '../../../components/Botton';

const view = ({navigation}) => {
  return (
    <View style={styles.back}>
      <View>
        <Text>축하합니다.</Text>

        <TouchableOpacity
          style={{
            backgroundColor: '#FFFFFF',
            width: 327,
            height: 50,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}
          onPress={() => {
            alert('버튼작동');
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              color: '#FD7F36',
            }}>
            적립하기
          </Text>
          <View>
            {' '}
            <LongButton />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default view;

const styles = StyleSheet.create({
  back: {
    width: 390,
    height: 350,
    backgroundColor: '#FD7F36',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
});
