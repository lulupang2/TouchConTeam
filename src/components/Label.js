import React from 'react';
import {Text} from 'react-native';

export const NormalLabel = ({text, style}) => {
  return (
    <Text style={{fontSize: 15, lineHeight: 19, color: '#000', ...style}}>
      {text}
    </Text>
  );
};

export const NormalBoldLabel = ({text, style}) => {
  return (
    <Text
      style={{
        fontSize: 15,
        lineHeight: 19,
        color: '#000',
        fontWeight: 'bold',
        ...style,
      }}
    >
      {text}
    </Text>
  );
};
