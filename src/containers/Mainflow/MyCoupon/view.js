import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import BottomButton from '../../../components/BottomButton';
import Touchable from '../../../components/Touchable';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NormalLabel} from '../../../components/Label';
// import {LongButton} from '../../../components/Botton';

const view = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Touchable onPress={() => navigation.navigate('Main')} style={{}}>
          <AntDesign
            name="left"
            size={24}
            color={'#000'}
            style={{
              padding: 4,
              alignSelf: 'center',
              color: '#c4c4c4',
              paddingLeft: 16,
            }}
          />
        </Touchable>
      ),
      headerRight: () => (
        <Touchable onPress={() => navigation.navigate('Main')} style={{}}>
          <AntDesign
            name="close"
            size={26}
            color={'#000'}
            style={{
              padding: 4,
              alignSelf: 'center',
              color: '#fff',
              paddingRight: 16,
            }}
          />
        </Touchable>
      ),
    });
  }, []);

  return (
    <View>
      {/*------ < 내 쿠폰 X 끝---- */}
      <View style={{display: 'flex', alignSelf: 'center'}}>
        <Image
          source={require('../../../assets/images/myCouponContent.png')}
          style={{
            resizeMode: 'contain',
            width: 300,
            height: 300,
          }}
        />
      </View>

      <BottomButton
        text={'지금 스캔하기'}
        onPress={() => navigation.navigate('RandomSc')}
      />
      {/*<NormalLabel*/}
      {/*  text={'발행된 쿠폰은 스캔하여 사용 하실 수 있습니다.'}*/}
      {/*  style={{alignSelf: 'center'}}*/}
      {/*/>*/}
    </View>
  );
};

export default view;
