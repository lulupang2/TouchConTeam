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

const view = () => {
  return (
    <View>
      <Image
        source={require('../../../assets/images/preparing_view.png')}
        style={{resizeMode: 'contain'}}
      />
    </View>
  );
};

export default view;
