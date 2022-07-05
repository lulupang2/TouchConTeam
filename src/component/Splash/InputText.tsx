import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {TextInput} from 'react-native-paper';
import {heightPercentage, widthPercentage} from '../../util/ResponsiveSize';
import Icon from 'react-native-vector-icons/Ionicons';

type TextInputProps = {
  placeholder?: string;
  width: number;
  height?: number;
  auth?: boolean;
};
export function InputText({placeholder, width, height, auth}: TextInputProps) {
  function InputTextStyle(width: number, height?: number): ViewStyle {
    return {
      backgroundColor: '#00000000',
      marginRight: widthPercentage(10),
      width: widthPercentage(width),
      height: heightPercentage(height || 56),
    };
  }
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#CCC"
        activeUnderlineColor="#CCC"
        underlineColor="#CCC"
        style={InputTextStyle(width, height)}
      />
      {auth && (
        <Text style={{color: '#479E42'}}>
          <Icon name="md-checkmark-sharp" />
          인증되었습니다.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
  },
});
