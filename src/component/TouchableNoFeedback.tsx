import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
type IProps = {
  onPress?: undefined;
  style?: any;
  children: React.ReactNode;
};
const TouchableNoFeedback: React.FC<IProps> = ({children, onPress, style}) => {
  return (
    <TouchableWithoutFeedback style={{flex: 1}} onPress={onPress}>
      <View style={style}>{children}</View>
    </TouchableWithoutFeedback>
  );
};
export default TouchableNoFeedback;
