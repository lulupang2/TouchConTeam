import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  StatusBar,
  ImageBackground,
  Text,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {resetAuth} from '../../redux/authSlice';
import {DeviceEventEmitter} from 'react-native';

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
    <ImageBackground
      source={require('../../assets/images/start_back.png')}
      resizeMode="cover"
      style={{width: '100%', height: '100%'}}>
      <Text style={styles.uptext}>글로벌 최초 디지털 자산 랜덤 리워드</Text>
      <View style={styles.midback}>
        <Text style={styles.midbtn}>RAMDOM</Text>
      </View>
      <Image
        source={require('../../assets/images/start_title.png')}
        style={{
          zIndex: 3,
          height: '80%',
          width: '80%',
          resizeMode: 'contain',
          alignSelf: 'center',
          position: 'relative',
          top: -210,
        }}
      />
      <Image
        source={require('../../assets/images/start_contents.png')}
        style={{
          zIndex: 4,
          height: '60%',
          width: '60%',
          resizeMode: 'contain',
          alignSelf: 'center',
          position: 'absolute',
          top: 190,
        }}
      />
      <Text style={styles.samllText}>
        DIGITAL ASSET REWORD SYSTEM @ TOUCHCON
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  uptext: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 125,
    marginBottom: 22,
  },
  midbtn: {
    color: '#FFFFFF',
    fontSize: 12,
    alignSelf: 'center',
    paddingTop: 5,
  },
  midback: {
    backgroundColor: '#F08F35',
    width: 79,
    height: 30,
    alignSelf: 'center',
    borderRadius: 20,
  },
  samllText: {
    fontSize: 7,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 60,
    // left: 120,
    alignSelf: 'center',
    // bottom: '-5%'
  },
});
