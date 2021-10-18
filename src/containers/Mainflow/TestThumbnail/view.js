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
  Button,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const view = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-between',
      }}>
      <Button
        title="Go Thumbnail1"
        onPress={() => navigation.navigate('Thumbnail1')}
      />
      <Button
        title="Go Thumbnail2"
        onPress={() => navigation.navigate('Thumbnail2')}
      />
      <Button
        title="Go Thumbnail3"
        onPress={() => navigation.navigate('Thumbnail3')}
      />

      <Button
        title="Go Thumbnail4"
        onPress={() => navigation.navigate('Thumbnail4')}
      />
    </View>
  );
};

export default view;
