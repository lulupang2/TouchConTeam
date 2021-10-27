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
import HeaderBottomLine from '../../../components/HeaderBottomLine';
import RowView from '../../../components/RowView';
import TitleInput, {ContentInput} from '../../../components/TextInput';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const view = ({navigation}) => {
  return (
    <WhiteSafeAreaView>
      <HeaderBottomLine />

      <RowView
        style={{
          paddingTop: 22,
          paddingHorizontal: 24,
          paddingBottom: 18,
        }}
      >
        <View
          style={{
            backgroundColor: '#fd7f36',
            height: 45,
            width: 7,
            borderRadius: 6,
            marginLeft: -5,
          }}
        ></View>
        <Text style={styles.text}>제목</Text>
        <TitleInput />
      </RowView>
      <ContentInput />

      <LongButton
        text={'등록'}
        tcStyle={{
          position: 'relative',
          top: 70,
          left: 50,
          paddingTop: 10,
        }}
      />
    </WhiteSafeAreaView>
  );
};

export default view;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 16,
  },
});
