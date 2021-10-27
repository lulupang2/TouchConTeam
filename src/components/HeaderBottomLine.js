import React from 'react';
import {View} from 'react-native';

const HeaderBottomLine = ({style}) => (
  <View style={{height: 2, backgroundColor: '#FD7F36', ...style}} />
);

export default HeaderBottomLine;

export const HeaderThickBottomLine = ({style}) => {
  return <View style={{height: 19, backgroundColor: '#FD7F36', ...style}} />;
};

export const HeaderWalletBottomLine = ({style, props}) => {
  return (
    <View
      style={{
        width: 390,
        height: 230,
        backgroundColor: '#FD7F36',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        ...style,
      }}>
      {props}
    </View>
  );
};
