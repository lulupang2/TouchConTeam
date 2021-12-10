import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  SafeAreaView,
} from 'react-native';

import HeaderBottomLine from '../../../components/HeaderBottomLine';
import RowView from '../../../components/RowView';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';

const Title = [
  {id: 1, title: 'CAOLION', path: 'GfCaolion'},
  {id: 2, title: 'MEGAM', path: 'GfMegaMall'},
  {id: 3, title: '안동국밥', path: 'GfGukBab'},
];

const view = ({navigation}) => {
  return (
    <WhiteSafeAreaView>
      <HeaderBottomLine />

      {Title.map((text, i) => (
        <BtnConn
          text={text}
          key={i}
          onPress={() => navigation.navigate(text.path)}
        />
      ))}
    </WhiteSafeAreaView>
  );
};

export default view;

const BtnConn = ({text, onPress}) => {
  return (
    <RowView style={styles.rv}>
      <Text
        style={{
          color: '#000000',
          fontWeight: 'bold',
          fontSize: 15,
          marginVertical: 18,
        }}>
        {text.title}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#5F408F',
          width: 79,
          height: 35,
          borderRadius: 53,
        }}
        onPress={onPress}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#FFFFFF',
            marginLeft: 20,
            marginTop: 3,
          }}>
          연결
        </Text>
      </TouchableOpacity>
    </RowView>
  );
};

const styles = StyleSheet.create({
  rv: {
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderColor: '#c4c4c4',
  },
});
