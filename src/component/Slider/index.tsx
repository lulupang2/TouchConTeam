import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import themeStyle from '../../style/theme.style';
import {heightPercentage} from '../../util/ResponsiveSize';
import CardItem from './CardItem';

interface ICarousel {
  gap: number;
  offset: number;
  pages: any[];
  pageWidth: number;
}
export default function Slider({pages, pageWidth, gap, offset}: ICarousel) {
  const Item = ({item}: any) => {
    return (
      <CardItem
        item={item}
        style={{
          width: pageWidth,
          marginRight: gap,
        }}
      />
    );
  };
  const onScroll = (e: any) => {
    const newCard = Math.round(
      e.nativeEvent.contentOffset.x / (pageWidth + gap),
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{
          paddingHorizontal: offset + gap / 2,
        }}
        data={pages}
        decelerationRate="fast"
        horizontal
        pagingEnabled
        renderItem={Item}
        snapToInterval={pageWidth + gap}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    minHeight: heightPercentage(220),
    height: heightPercentage(324),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonBox: {
    marginTop: 30,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  moreButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    marginHorizontal: 40,
    height: heightPercentage(40),
  },
  moreButtonText: {
    color: '#666',
    fontFamily: themeStyle.FONT_REGULAR,
    fontSize: 15,
  },
});
