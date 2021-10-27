import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export const LongButton = ({text, tcStyle, txStyle}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#FD7F36',
        width: '70%',
        height: '7%',
        borderRadius: 30,
        ...tcStyle,
      }}
      onPress={() => {
        alert('버튼작동');
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
          ...txStyle,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
