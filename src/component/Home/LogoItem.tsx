import React from 'react';
import {Image, View} from 'react-native';
interface IProps {
  data: {
    img: string;
    id: number;
  };
  width: number;
}
export default function LogoItem({data, width}: IProps) {
  return (
    <View
      style={{
        width,
        height: width,
        borderRadius: 98,
        borderWidth: 1,
        borderColor: '#F2F2F7',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
      }}>
      <Image
        //@ts-ignore
        source={{uri: data}}
        style={{height: '75%', width: '75%'}}
        resizeMode="center"
      />
    </View>
  );
}
