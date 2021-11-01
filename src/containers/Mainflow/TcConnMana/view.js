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

const Title = [
  {id: 1, title: 'CAOLION', path: ''},
  {id: 2, title: 'MEGAM'},
  {id: 3, title: '안동국밥'},
];

const view = ({navigation}) => {
  return (
    <SafeAreaView>
      <HeaderBottomLine />

      {Title.map((text, i) => (
        <BtnConn text={text} key={i} />
      ))}
    </SafeAreaView>
  );
};

export default view;

const BtnConn = ({text}) => {
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
          backgroundColor: '#FD7F36',
          width: 79,
          height: 35,
          borderRadius: 53,
        }}
        onPress={() => {
          alert('연결됨');
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'blod',
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
