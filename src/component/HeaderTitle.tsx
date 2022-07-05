import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, Text, View, ViewStyle} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import themeStyle from '../style/theme.style';

interface IProps {
  title: string;
  borderColor?: string;
  prevButton?: boolean;
  onPress?: () => void;
  onPrev?: () => void;
  icon?: boolean;
  titleColor?: string;
  titleSize?: number;
  closeDark?: boolean;
  containerStyle?: ViewStyle;
  noClose?: boolean;
}
export default function HeaderTitle({
  title,
  borderColor,
  onPress,
  prevButton,
  icon,
  titleColor,
  titleSize,
  containerStyle,
  noClose,
}: IProps) {
  const navigation = useNavigation();
  const onPrev = () => {
    navigation.goBack();
  };
  return (
    <View
      style={[
        styles.Header,
        // eslint-disable-next-line react-native/no-inline-styles
        borderColor ? {borderColor} : {borderColor: '#CCC'},
        containerStyle,
      ]}>
      <View style={styles.PrevBox}>
        {prevButton && (
          <Pressable onPress={onPrev} hitSlop={15}>
            <Octicons
              name="arrow-left"
              color={'#000'}
              size={24}
              style={styles.prevButton}
            />
          </Pressable>
        )}
      </View>
      <View style={styles.TitleBox}>
        <Text
          style={[
            styles.TitleText,
            titleColor && {color: titleColor},
            titleSize && {fontSize: titleSize},
          ]}>
          {title}
        </Text>
      </View>
      {!noClose ? (
        <View style={styles.CloseBox}>
          {!icon ? (
            <Pressable onPress={onPress} hitSlop={15}>
              <Fontisto name="close-a" color={titleColor || '#000'} size={16} />
            </Pressable>
          ) : (
            <Pressable onPress={onPress} hitSlop={15}>
              <AntDesign
                onPress={onPress}
                name="closecircle"
                color={'#CCC'}
                size={24}
              />
            </Pressable>
          )}
        </View>
      ) : (
        <View style={styles.CloseBox} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#FFF',
    zIndex: 100,
  },
  PrevBox: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
  },
  prevButton: {
    backgroundColor: '#FFF',
  },
  TitleBox: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  TitleText: {
    color: themeStyle.Black,
    fontFamily: themeStyle.FONT_BOLD,
    fontSize: themeStyle.FONT_L,
    flexWrap: 'nowrap',
  },
  CloseBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
