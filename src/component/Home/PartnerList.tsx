import axios from 'axios';
import React, {useEffect} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import tmpData from '../../../mock/data.json';
import LogoItem from './LogoItem';
export default function PartnerList() {
  const [containerWidth, setContainerWidth] = React.useState(0);
  const MARGIN = 20;
  const numColumns = 3;

  return (
    <View style={{flex: 1, marginTop: 30}}>
      {/* {tmpData.logo.map(item => (
        <LogoItem key={item.id} data={item.img} />
      ))} */}
      <FlatList
        data={tmpData.logo.reverse()}
        columnWrapperStyle={{
          marginBottom: 30,
        }}
        onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
        renderItem={({item}: any) => (
          <LogoItem
            width={(containerWidth - MARGIN - 40) / numColumns}
            data={item.img}
          />
        )}
        //@ts-ignore
        keyExtractor={item => item.id}
        numColumns={numColumns}
      />
    </View>
  );
}
