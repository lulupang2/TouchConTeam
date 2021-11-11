import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NormalBoldLabelBl} from './Label';

export const ConnMitem = ({onPress, text, viStyle, tcStyle, txStyle}) => {
  return (
    <View
      style={{
        width: '100%',
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#c4c4c4',
        borderBottomWidth: 1,
        ...viStyle,
      }}
    >
      <NormalBoldLabelBl text={text} />

      <TouchableOpacity
        style={{
          backgroundColor: '#FD7F36',
          width: 79,
          height: 35,
          borderRadius: 53,
          ...tcStyle,
        }}
        onPress={() => {
          alert('연결됨');
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#FFFFFF',
            marginLeft: 20,
            marginTop: 3,
            ...txStyle,
          }}
        >
          연결
        </Text>
      </TouchableOpacity>
    </View>
  );
};
