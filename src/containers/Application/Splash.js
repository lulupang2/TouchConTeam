import React, {useEffect} from 'react';
import {StyleSheet, View, Dimensions, Image, StatusBar} from 'react-native';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

export default function Splash(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Intro');
    }, 1500);
  });

  return (
    <View style={styles.splash_container}>
      <StatusBar backgroundColor="#FD7F36" barStyle="dark-content" />
      <Image
        source={require('../../assets/images/group79.png')}
        style={{
          zIndex: 1,
          marginTop: height * 0.25,
          height: height * 0.3,
          width: width * 0.5,
          resizeMode: 'contain',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  splash_container: {
    width: width,
    height: height * 1.2,
    alignItems: 'center',
    backgroundColor: '#FD7F36',
  },
});
