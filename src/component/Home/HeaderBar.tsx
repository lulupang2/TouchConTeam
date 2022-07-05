import React from 'react';
import {
  Animated,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import themeStyle from '../../style/theme.style';
import headerIcons from './HeaderIcons';
interface IProps {
  height?: any;
  background?: any;
  border?: any;
  color?: any;
  money?: string;
  position?: ViewStyle;
  dark?: boolean;
}
export default function HeaderBar({
  height,
  background,
  border,
  color,
  money,
  dark,
  position,
}: IProps) {
  return (
    <Animated.View
      style={[
        styles.HeaderStyle,
        position && position,
        {
          height: height,
          backgroundColor: background,
          borderBottomWidth: border,
        },
      ]}>
      <View style={styles.topBar}>
        <View>
          <Animated.Text style={[styles.title, {color: color}]}>
            {'1,925'}P {'>'}
          </Animated.Text>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={styles.iconBox}>
            {!dark ? (
              <Animated.Image
                source={headerIcons.cartDark}
                resizeMode="contain"
                style={{height: '100%'}}
              />
            ) : (
              <Animated.Image
                source={headerIcons.cartLight}
                resizeMode="contain"
                style={{height: '100%'}}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            {!dark ? (
              <Animated.Image
                source={headerIcons.bellDark}
                resizeMode="contain"
                style={{height: '100%'}}
              />
            ) : (
              <Animated.Image
                source={headerIcons.bellLight}
                resizeMode="contain"
                style={{height: '100%'}}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  HeaderStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    left: 0,
    right: 0,
    top: Platform.OS == 'ios' ? 20 : 0,
    borderColor: '#E5E5EA',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    flex: 1,
  },
  title: {
    color: '#000',
    fontSize: themeStyle.FONT_M,
    fontFamily: themeStyle.FONT_BOLD,
  },
  topBar: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  iconBox: {
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7,
  },
});
