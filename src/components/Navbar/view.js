import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  SafeAreaView,
  TouchableNativeFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import RowView from '../RowView';
import Touchable from '../Touchable';

const {width, height} = Dimensions.get('window');

const vw = width / 100;
const vh = height / 100;

export default function Navbar() {
  const navigation = useNavigation();
  return (
    <>
      {/*<SafeAreaView style={{width: width, height: height * 0.06}}>*/}
      {/* Navbar 바탕컬러 start */}
      <RowView
        style={{
          backgroundColor: '#FD7F36',
          justifyContent: 'space-between',
          paddingVertical: 11,
          paddingLeft: 15,
          paddingRight: 25,
          // width: width,
          // height: height * 0.06,
        }}
      >
        <Image
          source={require('../../assets/images/nav_logo.png')}
          style={{
            width: 162,
            height: 35,
            // width: width * 0.35,
            // height: height * 0.06,
            // resizeMode: 'contain',
            // marginLeft: width * 0.05,
          }}
        />
        <Touchable style={{padding: 4}} onPress={() => navigation.openDrawer()}>
          <Image
            source={require('../../assets/icons/nav_menu.png')}
            style={{
              width: 30,
              height: 22,
              // width: width * 0.15,
              // height: height * 0.03,
              // resizeMode: 'contain',
              // marginLeft: width * 0.43,
            }}
          />
        </Touchable>
      </RowView>
      {/* Navbar 바탕컬러 end */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
