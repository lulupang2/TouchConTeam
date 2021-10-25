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
      }}
    >
      <Button title="Go Main" onPress={() => navigation.push('Main')} />
      <Button title="Go TouchCon" onPress={() => navigation.push('TouchCon')} />
      <Button title="Go Wallet" onPress={() => navigation.push('Wallet')} />
      <Button
        title="Go ScanHistory"
        onPress={() => navigation.push('ScanHistory')}
      />
      <Button title="Go Intro3" onPress={() => navigation.push('Intro3')} />
      <Button title="Go Intro2" onPress={() => navigation.push('Intro2')} />
      <Button title="Go Intro1" onPress={() => navigation.push('Intro1')} />
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
      <Button
        title="Go TestButton2"
        onPress={() => navigation.push('TestButton2')}
      />
      <Button
        title="Go TouchconCh"
        onPress={() => navigation.push('TouchConCh')}
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

      <Button title="Go Pinchg" onPress={() => navigation.push('Pinchg')} />
      <Button title="Go Pinlogin" onPress={() => navigation.push('Pinlogin')} />
      <Button title="Go Pinsign" onPress={() => navigation.push('Pinsign')} />

      <Button
        title="Go MarketingInfo"
        onPress={() => navigation.push('MarketingInfo')}
      />
      <Button
        title="Go TcConnMana"
        onPress={() => navigation.push('TcConnMana')}
      />
    </View>
  );
};

export default view;
