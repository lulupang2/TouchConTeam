import React from 'react';
import {StyleSheet, View} from 'react-native';
import {heightPercentage} from '../../util/ResponsiveSize';
import ToggleButton from '../ToggleButton';
interface IProps {
  check: any;
  onToggle?: () => void;
  children?: React.ReactNode;
}
export default function SwitchBox({check, onToggle, children}: IProps) {
  return (
    <View style={styles.itemBox}>
      {children}
      <ToggleButton isOpen={check} onPress={onToggle} />
    </View>
  );
}
const styles = StyleSheet.create({
  itemBox: {
    flexDirection: 'row',
    height: heightPercentage(72),
    marginVertical: 10,
  },
});
