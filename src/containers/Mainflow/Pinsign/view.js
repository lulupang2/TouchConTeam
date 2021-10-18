import React, {useState} from 'react';
import {StyleSheet, Text, Dimensions, View} from 'react-native';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = height / 100;

export default function Pinsign() {
  const [pwd, onChangePwd] = React.useState('');

  return (
    <View style={styles.pinsign_container}>
      <View>
        <Text>Pin</Text>
      </View>
      <View>
        <Text>'핀번호 등록' touchable opacity</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pinsign_container: {
    width: width,
    height: height,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
