import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {WALLET_DUMMY} from '../../../mock/dummy';
import themeStyle from '../../style/theme.style';
import {LargeButton} from '../UI/button';
interface IProps {
  hideModal: () => void;
}
export default function QRWallet({hideModal}: IProps) {
  const navigation = useNavigation();
  const onNavigate = () => {
    //@ts-ignore
    navigation.navigate('SendToc');
  };
  return (
    <View
      style={{justifyContent: 'space-between', alignItems: 'center', flex: 1}}>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        <View
          style={{
            borderWidth: 3,
            borderColor: '#EBEBEB',
            borderRadius: 24,
            width: 200,
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 54,
            marginBottom: 15,
          }}>
          <Image
            source={require('../../../assets/images/tempqr.png')}
            style={{width: '100%'}}
            resizeMode="contain"
          />
        </View>
        <View style={{marginHorizontal: 64, marginVertical: 15}}>
          <Text
            style={{
              color: themeStyle.Black,
              fontFamily: themeStyle.FONT_BOLD,
              fontSize: 20,
            }}>
            {WALLET_DUMMY[0].currentPoint
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
            P
          </Text>
        </View>
        <View style={{marginHorizontal: 64, marginVertical: 15}}>
          <Text
            style={{
              color: '#B2B2B2',
              fontFamily: themeStyle.FONT_REGULAR,
              fontSize: 15,
            }}>
            {WALLET_DUMMY[0].contractAddr}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: '#E5E5EA',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            paddingVertical: 10,
            paddingHorizontal: 20,

            flexDirection: 'row',
          }}>
          <Icon name="content-copy" size={16} color={'#666'} />
          <Text
            style={{
              color: '#666',
              fontFamily: themeStyle.FONT_REGULAR,
            }}>
            주소복사
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 60,
          width: 335,
          marginVertical: 32,
          marginHorizontal: 20,
        }}>
        <LargeButton
          fontColor="#FFF"
          color={themeStyle.Primary}
          title="TOC 보내기"
          onPress={() => {
            hideModal();
            onNavigate();
          }}
        />
      </View>
    </View>
  );
}
