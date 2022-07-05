import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import themeStyle from '../../style/theme.style';
import {PinKeyBoard} from '../Auth/PinKeyboard';
import HeaderTitle from '../HeaderTitle';
import {LargeButton} from '../UI/button';
import InputPrice from './InputPrice';
const {width} = Dimensions.get('window');
export default function PointSwap() {
  const navigation = useNavigation();

  const [coinCat, setCoinCat] = React.useState('TOP');
  const [inputState, setInputState] = React.useState('');
  const onPress = (e: any) => {
    setInputState(inputState + e);
    console.log(inputState);
  };
  const onDelete = () => {
    setInputState(inputState.slice(0, -1));
  };
  const onSelected = (data: any): void => {
    setCoinCat(data);
  };
  const onClose = () => {
    //@ts-ignore
    navigation.navigate('Wallet');
  };
  return (
    <>
      <HeaderTitle
        prevButton={false}
        title="TOC 보내기"
        borderColor="#E5E5EA"
        containerStyle={styles.bg}
        onPress={onClose}
      />
      <View style={styles.flex}>
        <View style={styles.container}>
          <InputPrice
            data={inputState}
            selected={onSelected}
            category={coinCat}
          />
        </View>
        <PinKeyBoard onPress={onPress} onDelete={onDelete} dot />
        <View style={styles.buttonBox}>
          <LargeButton
            fontColor="#FFF"
            color={themeStyle.Primary}
            title="전환하기"
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    width,
    marginBottom: 30,
    backgroundColor: '#FFF',
  },
  buttonBox: {
    height: 60,
    margin: 20,
  },
  bg: {
    backgroundColor: '#FFF',
  },
});
