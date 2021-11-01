import React, {version} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Touchable,
  ScrollView,
} from 'react-native';
import Navbar from '../../../components/Navbar/view';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';

const view = ({navigation}) => {
  return (
    <WhiteSafeAreaView>
      <Navbar />
      <Image
        source={require('../../../assets/images/star_congra.png')}
        resizeMode="contain"
        style={{width: '100%', position: 'relative', top: -161}}
      />
      <ScrollView
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'red',
          position: 'absolute',
          top: 130,
          zIndex: -1,
        }}>
        <View>
          <View style={styles.upper_back}></View>
        </View>
      </ScrollView>
    </WhiteSafeAreaView>
  );
};

export default view;

const styles = StyleSheet.create({
  upper_back: {width: '100%', minHeight: '276'},
});
