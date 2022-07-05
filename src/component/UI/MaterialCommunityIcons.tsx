import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
type props = {
  name: string;
  onPress?: () => void;
};
export const MCIcon = ({name, onPress}: props) => {
  return <Icon name={name} onPress={onPress} />;
};
