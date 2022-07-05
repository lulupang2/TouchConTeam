import React from 'react';
import {Pressable, StyleSheet, Text, ViewProps} from 'react-native';
import themeStyle from '../../style/theme.style';
interface IProps {
  title: string;
  color: string;
  fontColor?: string;
  onPress?: () => void;
  style?: ViewProps;
}
export const LargeButton = ({
  title,
  color,
  fontColor,
  onPress,
  style,
}: IProps) => {
  const fontcolor = fontColor ? fontColor : '#FFF';
  return (
    <Pressable onPress={onPress} style={[styles(color).LargeButton, style]}>
      <Text
        style={{
          color: fontcolor,
          fontFamily: themeStyle.FONT_REGULAR,
          fontSize: themeStyle.FONT_M,
        }}>
        {title}
      </Text>
    </Pressable>
  );
};

export const LargeOutLineButton = ({title, color, onPress, style}: IProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles(color).LargeOutLineButton, style]}>
      <Text
        style={{
          color: color,
          fontFamily: themeStyle.FONT_REGULAR,
          fontSize: themeStyle.FONT_M,
        }}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = (color: string) =>
  StyleSheet.create({
    // eslint-disable-next-line react-native/no-unused-styles
    LargeOutLineButton: {
      borderColor: color,
      borderWidth: 1,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    // eslint-disable-next-line react-native/no-unused-styles
    LargeButton: {
      backgroundColor: color,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
  });
