import React from 'react';
import {View} from 'react-native';
import {IconButton} from 'react-native-paper';
interface IProps {
  name: string;
  color: string;
}
export default function TabBarIcons({name, color}: IProps) {
  return (
    <IconButton
      icon={name}
      color={color}
      size={24}
      style={{
        borderWidth: 1,
        alignSelf: 'center',
        alignContent: 'center',
      }}
    />
  );
}
