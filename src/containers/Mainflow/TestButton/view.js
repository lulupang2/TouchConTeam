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
  ScrollView,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const view = ({navigation}) => {
  return (
    <ScrollView
      contentContainerStyle={{alignItems: 'center'}}
      style={{flex: 1}}
    >
      <Button title="Go Main" onPress={() => navigation.navigate('Main')} />
      <Button
        title="Go TouchCon"
        onPress={() => navigation.navigate('TouchCon')}
      />
      <Button title="Go Wallet" onPress={() => navigation.navigate('Wallet')} />
      <Button
        title="Go ScanHistory"
        onPress={() => navigation.navigate('ScanHistory')}
      />
      <Button title="Go Intro3" onPress={() => navigation.navigate('Intro3')} />
      <Button title="Go Intro2" onPress={() => navigation.navigate('Intro2')} />
      <Button title="Go Intro1" onPress={() => navigation.navigate('Intro1')} />
      <Button
        title="Go MyCoupon"
        onPress={() => navigation.navigate('MyCoupon')}
      />
      <Button
        title="Go ScanResult"
        onPress={() => navigation.navigate('ScanResult')}
      />
      <Button title="Go MyInfo" onPress={() => navigation.navigate('MyInfo')} />
      <Button title="Go QnA" onPress={() => navigation.navigate('QnA')} />
      <Button
        title="Go TcStory"
        onPress={() => navigation.navigate('TcStory')}
      />
      <Button title="Go Policy" onPress={() => navigation.navigate('Policy')} />
      <Button
        title="Go GfCaolion"
        onPress={() => navigation.navigate('GfCaolion')}
      />

      <Button
        title="Go TouchconCh"
        onPress={() => navigation.navigate('TouchConCh')}
      />
      <Button
        title="Go GfGukBab"
        onPress={() => navigation.navigate('GfGukBab')}
      />
      <Button
        title="Go GfMegaMall"
        onPress={() => navigation.navigate('GfMegaMall')}
      />
      <Button
        title="Go TestThumbnail"
        onPress={() => navigation.navigate('TestThumbnail')}
      />

      <Button title="Go Pinchg" onPress={() => navigation.navigate('Pinchg')} />
      <Button
        title="Go Pinlogin"
        onPress={() => navigation.navigate('Pinlogin')}
      />
      <Button
        title="Go Pinsign"
        onPress={() => navigation.navigate('Pinsign')}
      />

      <Button
        title="Go MarketingInfo"
        onPress={() => navigation.navigate('MarketingInfo')}
      />
      <Button
        title="Go TcConnMana"
        onPress={() => navigation.navigate('TcConnMana')}
      />
      <Button title="Go Notice" onPress={() => navigation.navigate('Notice')} />
      <Button
        title="Go SignOut"
        onPress={() => navigation.navigate('SignOut')}
      />
      <Button
        title="Go 1:1문의"
        onPress={() => navigation.navigate('SendMsg')}
      />

      <Button
        title="Go 스캔하기"
        onPress={() => navigation.navigate('RandomSc')}
      />
    </ScrollView>
  );
};

export default view;
