import React from 'react';
import {View} from 'react-native';
import SwitchToggle from 'react-native-switch-toggle';

export default function ToggleButton({isOpen, onPress}) {
  return (
    <View style={{}}>
      <SwitchToggle switchOn={isOpen} onPress={onPress} />
    </View>
  );
}
