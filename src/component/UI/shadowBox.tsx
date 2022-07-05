import React, {ReactNode} from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import TouchableNoFeedback from '../TouchableNoFeedback';
type boxProps = {
  children?: ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
};
export default function ShadowBox({children, style, onPress}: boxProps) {
  return (
    //@ts-ignore
    <TouchableNoFeedback onPress={onPress} style={[styles.shadowBox, style]}>
      {children}
    </TouchableNoFeedback>
  );
}
const styles = StyleSheet.create({
  shadowBox: {
    backgroundColor: '#FFF',
    width: '100%',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 16,
    elevation: 5,
  },
});
