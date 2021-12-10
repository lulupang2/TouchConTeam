import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export const LongButton = ({text, tcStyle, txStyle}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#5F408F',
        width: '85%',
        // width: 327,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
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

// ===============================

// 지갑 부분 원형 버튼 컴포넌트

export const CircleButton = ({text, tcStyle, txStyle}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#000000',
        width: 70,
        height: 70,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        ...tcStyle,
      }}
      onPress={() => {
        alert('버튼작동');
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          fontWeight: 'bold',
          color: 'white',
          paddingTop: 10,
          ...txStyle,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

// ==========================

export const GoButton = ({onPress, tcStyle, txStyle}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#5F408F',
        width: 79,
        height: 35,
        borderRadius: 53,
        ...tcStyle,
      }}
      onPress={onPress}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#FFFFFF',
          justifyContent: 'center',
          alignSelf: 'center',
          paddingTop: 3,
          ...txStyle,
        }}>
        GO
      </Text>
    </TouchableOpacity>
  );
};
