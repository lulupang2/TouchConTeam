import React from 'react';
import {Button} from 'react-native';

export const LongButtion = ({style, btnName}) => {
  return (
    <Button style={{background: '#FD7F36', borderRadius: '10', ...style}}>
      {btnName}
    </Button>
  );
};

export const NormalLabel = ({text, style}) => {
  return (
    <Text style={{fontSize: 15, lineHeight: 19, color: '#000', ...style}}>
      {text}
    </Text>
  );
};
