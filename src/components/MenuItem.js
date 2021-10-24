import React from 'react';
import Touchable from './Touchable';
import {NormalBoldLabel} from './Label';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const MenuItem = ({onPress, title, style}) => {
  return (
    <Touchable
      onPress={onPress}
      style={{
        paddingVertical: 14,
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#c4c4c4',
        ...style,
      }}
    >
      <NormalBoldLabel text={title} />
      <AntDesign name={'right'} size={24} color={'#000'} />
    </Touchable>
  );
};
