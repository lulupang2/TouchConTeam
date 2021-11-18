import React, {useState} from 'react';
import Touchable from './Touchable';
import {NormalBoldLabel} from './Label';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SwitchToggle from 'react-native-switch-toggle';

export const MenuItem = ({onPress, title, style, id}) => {
  const [on, setOn] = useState(true);

  const off = () => {
    setOn(!on);
  };

  const [select, setSelect] = useState(101);

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

      {select === id ? (
        <SwitchToggle
          switchOn={on}
          onPress={() => off()}
          circleColorOff="#FFFFFF"
          circleColorOn="#FFFFFF"
          backgroundColorOn="#FD7F36"
          backgroundColorOff="#C4C4C4"
          containerStyle={{
            marginTop: 8,
            width: 37,
            height: 20,
            borderRadius: 25,
            padding: 5,
          }}
          circleStyle={{
            width: 14,
            height: 14,
            borderRadius: 20,
          }}
        />
      ) : (
        <AntDesign name={'right'} size={24} color={'#000'} />
      )}
    </Touchable>
  );
};
