import React, {useEffect} from 'react';
import {
  StyleSheet,
  Dimensions,
  ImageBackground,
  View,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';

const {height, width} = Dimensions.get('window');
import {useIsFocused} from '@react-navigation/native';
export default function Splash({navigation}) {
  const isFocused = useIsFocused();
  const auth = useSelector(state => state.auth);
  const {loginSuccess} = auth;
  console.log(auth.email);
  useEffect(() => {
    setTimeout(() => {
      if (auth.email !== null) {
        navigation.navigate('Pinlogin');
      } else {
        navigation.navigate('Intro');
      }
    }, 1500);
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../../assets/images/splash.png')}
        resizeMode="center"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  img: {
    flexGrow: 1,
  },
});
