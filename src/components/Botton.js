import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export const LongButton = ({text, tcStyle}) => {
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
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          paddingTop: 13,
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
