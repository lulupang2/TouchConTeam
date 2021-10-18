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
      <Button title="Go Main" onPress={() => navigation.push('Main')} />
      <Button title="Go TouchCon" onPress={() => navigation.push('TouchCon')} />
      <Button title="Go Wallet" onPress={() => navigation.push('Wallet')} />
      <Button
        title="Go ScanHistory"
        onPress={() => navigation.push('ScanHistory')}
      />
      <Button title="Go Intro3" onPress={() => navigation.push('Intro3')} />
      <Button title="Go MyCoupon" onPress={() => navigation.push('MyCoupon')} />
      <Button
        title="Go ScanResult"
        onPress={() => navigation.push('ScanResult')}
      />
      <Button title="Go MyInfo" onPress={() => navigation.push('MyInfo')} />
      <Button title="Go QnA" onPress={() => navigation.push('QnA')} />
      <Button title="Go TcStory" onPress={() => navigation.push('TcStory')} />
      <Button title="Go Policy" onPress={() => navigation.push('Policy')} />
      <Button
        title="Go GfCaolion"
        onPress={() => navigation.push('GfCaolion')}
      />
      <Button title="Go GfGukBab" onPress={() => navigation.push('GfGukBab')} />
      <Button
        title="Go GfMegaMall"
        onPress={() => navigation.push('GfMegaMall')}
      />
      <Button
        title="Go TestThumbnail"
        onPress={() => navigation.push('TestThumbnail')}
      />
    </View>
  );
};

export default view;
