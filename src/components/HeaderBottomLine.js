import React from 'react';
import {View} from 'react-native';

const HeaderBottomLine = ({style}) => (
  <View style={{height: 2, backgroundColor: '#FD7F36', ...style}} />
);

export default HeaderBottomLine;

export const HeaderThickBottomLine = ({style}) => {
  return <View style={{height: 19, backgroundColor: '#FD7F36', ...style}} />;
};
