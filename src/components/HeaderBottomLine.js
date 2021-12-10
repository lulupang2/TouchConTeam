import React from 'react';
import {View} from 'react-native';

const HeaderBottomLine = ({style}) => (
  <View style={{height: 2, backgroundColor: '#5F408F', ...style}} />
);

export default HeaderBottomLine;

export const HeaderThickBottomLine = ({style}) => {
  return <View style={{height: 19, backgroundColor: '#5F408F', ...style}} />;
};

export const HeaderWalletBottomLine = ({style, props}) => {
  return (
    <View
      style={{
        width: 390,
        height: 230,
        backgroundColor: '#5F408F',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        ...style,
      }}>
      {props}
    </View>
  );
};
