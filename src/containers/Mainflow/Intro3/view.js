import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

export default function Intro3({navigation}) {
  return (
    <View style={styles.third_container}>
      <Image
        source={require('../../../assets/images/pic3_4.png')}
        style={{
          marginTop: height * 0.1,
          height: height * 0.03,
          width: width * 0.24,
          resizeMode: 'contain',
        }}
      />
      <Image
        source={require('../../../assets/images/pic3_2.png')}
        style={{
          marginTop: height * 0.05,
          height: height * 0.1,
          width: width * 0.7,
          resizeMode: 'contain',
        }}
      />
      <Image
        source={require('../../../assets/images/pic3_3.png')}
        style={{
          marginTop: height * 0.15,
          height: height * 0.03,
          width: width * 0.7,
          resizeMode: 'contain',
        }}
      />
      <Image
        source={require('../../../assets/images/pic3_5.png')}
        style={{
          height: height * 0.03,
          width: width * 0.7,
          resizeMode: 'contain',
        }}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Image
          source={require('../../../assets/images/pic3_6.png')}
          style={{
            marginTop: height * 0.25,
            height: height * 0.3,
            width: width * 0.7,
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  third_container: {
    width: width,
    height: height,
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
