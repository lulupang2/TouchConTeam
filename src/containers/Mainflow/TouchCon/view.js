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
} from 'react-native';
import {CircleButton} from '../../../components/Botton';
import {HeaderWalletBottomLine} from '../../../components/HeaderBottomLine';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';

const view = () => {
  return (
    <WhiteSafeAreaView>
      <HeaderWalletBottomLine>
        <CircleButton />
      </HeaderWalletBottomLine>
      <CircleButton />
    </WhiteSafeAreaView>
  );
};

export default view;

const styles = StyleSheet.create({
  btn_circle: {},
});
