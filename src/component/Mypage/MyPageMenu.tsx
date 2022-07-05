import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import themeStyle from '../../style/theme.style';
interface IProps {
  title?: string;
  menus: {
    menu: string;
    link: string;
  }[];
}
export default function MyPageMenu({title, menus}: IProps) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.menuContainer}>
        {menus.map((item, index) => (
          <View key={index} style={styles.menuBox}>
            {/* @ts-ignore */}
            <TouchableOpacity onPress={() => navigation.navigate(item.link)}>
              <Text style={styles.menuText}>{item.menu}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {paddingTop: 30},
  titleBox: {paddingVertical: 20},
  titleText: {
    fontFamily: themeStyle.FONT_BOLD,
    color: themeStyle.Black,
    fontSize: 20,
  },
  menuContainer: {},
  menuBox: {
    borderBottomColor: '#F2F2F7',
    borderBottomWidth: 1,
    paddingVertical: 15,
  },
  menuText: {
    fontFamily: themeStyle.FONT_REGULAR,
    color: '#666',
    fontSize: 15,
  },
});
