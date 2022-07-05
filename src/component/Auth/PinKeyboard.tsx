import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
interface IProps {
  onPress?: (e: any) => void;
  onDelete?: () => void;
  dot?: boolean;
}
const {width} = Dimensions.get('window');

export function PinKeyBoard({onPress, onDelete, dot}: IProps) {
  const onPressEvent = (data: any): void => {
    return onPress!(data);
  };
  const keyLists = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0'];
  if (dot) {
    keyLists[9] = '.';
  }
  const keyList = keyLists.map(el => (
    <TouchableOpacity key={el} onPress={() => onPressEvent(el)}>
      <PinKey label={el} />
    </TouchableOpacity>
  ));

  return (
    <View style={styles.pinKeyboard}>
      {keyList}
      <TouchableOpacity onPress={onDelete} style={styles.bgCenter}>
        <PinKey label={<Icon name="arrow-back" size={18} />} />
      </TouchableOpacity>
    </View>
  );
}
function PinKey({label}: any) {
  return (
    <View style={[styles.pinKey, label.length === 0 && styles.pinKeyEmpty]}>
      <Text style={styles.pinKeyText}>{label}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  pinKeyboard: {
    flex: -1,
    flexShrink: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  bgCenter: {
    backgroundColor: '#FFF',
  },
  pinKey: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: width / 3 - 20,
    paddingTop: 8,
  },
  pinKeyEmpty: {
    backgroundColor: 'rgb(255, 255, 255)',
  },
  pinKeyText: {fontSize: 26, color: '#000', alignItems: 'center'},
});
