import React from 'react';
import {StyleSheet, Text, TextStyle, ViewStyle} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../util/ResponsiveSize';
interface ButtonProps {
  name: string;
  onPress?: () => void;
  width: number;
  height: number;
  icon?: string;
  bgColor: string;
  textColor: string;
}
interface OutLineButtonProps {
  name: string;
  onPress?: () => void;
  color: string;
  width: number;
  height: number;
  icon?: string;
}
type StyleProps = {
  color: string;
  width: number;
  height: number;
};
//아웃라인 버튼
export function OutLineButton({
  name,
  onPress,
  color,
  width,
  height,
  icon,
}: OutLineButtonProps) {
  function OutLineButtonStyle(
    color: string,
    width: number,
    height: number,
  ): ViewStyle {
    return {
      borderWidth: widthPercentage(1),
      borderColor: color,
      borderRadius: widthPercentage(3),
      justifyContent: 'center',
      alignItems: 'center',
      height: heightPercentage(height || 56),
      width: widthPercentage(width || 0),
      flex: 1,
    };
  }
  function OutLineButtonTextStyle(color: string): TextStyle {
    return {
      fontFamily: 'GmarketSansTTFMedium',
      color: color,
      fontSize: fontPercentage(15),
    };
  }
  return (
    <Button style={OutLineButtonStyle(color, width, height)} onPress={onPress}>
      {icon && <Icon name={icon} color={color} size={fontPercentage(16)} />}
      <Text style={OutLineButtonTextStyle(color)}>{name}</Text>
    </Button>
  );
}
//기본 버튼
export function InLineButton({
  name,
  onPress,
  bgColor,
  textColor,
  width,
  height,
  icon,
}: ButtonProps) {
  function InLineButtonStyle(
    bgColor: string,
    width: number,
    height: number,
  ): ViewStyle {
    return {
      backgroundColor: bgColor,
      borderRadius: widthPercentage(3),
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      width: width ? widthPercentage(width) : '100%',
      height: height ? heightPercentage(height) : undefined,
    };
  }
  function InLineButtonTextStyle(textColor: string): TextStyle {
    return {
      fontFamily: 'GmarketSansTTFMedium',
      color: textColor,
      fontSize: fontPercentage(15),
      letterSpacing: -1,
      padding: 25,
    };
  }
  return (
    <Button style={InLineButtonStyle(bgColor, width, height)} onPress={onPress}>
      {icon && <Icon name={icon} color={textColor} size={fontPercentage(16)} />}
      <Text numberOfLines={1} style={InLineButtonTextStyle(textColor)}>
        {name}
      </Text>
    </Button>
  );
}
const styles = StyleSheet.create({
  OutLineButton: {},
});
