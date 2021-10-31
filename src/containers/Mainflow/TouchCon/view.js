import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  ScrollView,
  Clipboard,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CircleButton} from '../../../components/Botton';
import {HeaderWalletBottomLine} from '../../../components/HeaderBottomLine';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';
import RowView from '../../../components/RowView';
import {NormalBoldLabel, NormalLabel} from '../../../components/Label';
import Touchable from '../../../components/Touchable';

const MENU = [
  {name: 'Touch\n결제', path: ''},
  {name: '지갑\n생성', path: 'Wallet'},
  {name: '터치콘\n전환', path: ''},
  {name: '스캔\n보기', path: 'ScanHistory'},
];

const view = ({navigation}) => {
  const [hasWallet, setHasWallet] = useState(true);

  return (
    <WhiteSafeAreaView>
      <ScrollView contentContainerStyle={{paddingBottom: 50}}>
        <View style={styles.topContainer}>
          <WhiteLine />
          <RowView
            style={{paddingVertical: 8, justifyContent: 'space-between'}}
          >
            <Image
              source={require('../../../assets/icons/coin_icon.png')}
              style={{width: 80, height: 79}}
            />
            <NormalBoldLabel
              text={'10000.11'}
              style={{fontSize: 30, lineHeight: 34}}
            />
            <Image
              source={require('../../../assets/images/logo_wallet.png')}
              style={{
                width: 91,
                height: 28,
                marginRight: 5,
              }}
            />
          </RowView>
          <WhiteLine />

          <RowView style={{marginTop: 15, justifyContent: 'space-between'}}>
            {MENU.map((menu, i) => (
              <MenuBtn key={i} menu={menu} />
            ))}
          </RowView>
        </View>

        <NormalBoldLabel
          text={'터치콘 지갑'}
          style={{fontSize: 16, lineHeight: 20, marginTop: 36, marginLeft: 23}}
        />
        {hasWallet ? (
          <View>
            <View
              style={{
                borderWidth: 11,
                borderColor: '#fd7f36',
                alignSelf: 'center',
                marginTop: 30,
              }}
            >
              <Image
                source={require('../../../assets/images/qr_code.png')}
                style={{width: 153, height: 150}}
              />
            </View>
            <NormalBoldLabel
              text={'0x3215463e2184685415216ee4e4e56545656421ds121'}
              style={styles.walletAddress}
            />

            <RowView style={{justifyContent: 'center', marginTop: 36}}>
              <BottomBtn
                text={'복사'}
                uri={require('../../../assets/icons/copy.png')}
                style={{marginRight: 20}}
              />
              <BottomBtn
                text={'전달'}
                uri={require('../../../assets/icons/pass.png')}
              />
            </RowView>
          </View>
        ) : (
          <View
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}
          >
            <NormalBoldLabel
              text={'*지갑 생성을 누르면 자동으로\n지갑이 생성됩니다.'}
              style={{color: '#c4c4c4', textAlign: 'center'}}
            />
          </View>
        )}
      </ScrollView>
    </WhiteSafeAreaView>
  );
};

export default view;

const MenuBtn = ({menu}) => {
  const navigation = useNavigation();

  return (
    <Touchable
      style={styles.menuBtn}
      onPress={() => {
        if (menu.path) {
          navigation.navigate(menu.path);
        }
      }}
    >
      <NormalBoldLabel text={menu.name} style={styles.menuText} />
    </Touchable>
  );
};

const BottomBtn = ({text, uri, style}) => {
  return (
    <Touchable style={{...styles.blueBorder, ...style}}>
      <NormalBoldLabel text={text} style={styles.bottomBtnText} />
      <Image source={uri} style={{width: 32, height: 32}} />
    </Touchable>
  );
};

const WhiteLine = () => (
  <View style={{height: 1, backgroundColor: '#fff', marginHorizontal: 6}} />
);

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: '#fd7f36',
    padding: 19,
    paddingBottom: 29,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  menuBtn: {
    borderWidth: 1.5,
    borderColor: '#fff',
    width: 70,
    height: 70,
    borderRadius: 35,
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 16,
    lineHeight: 20,
    color: '#fff',
    textAlign: 'center',
  },
  walletAddress: {
    fontSize: 12,
    lineHeight: 16,
    paddingVertical: 18.5,
    backgroundColor: 'rgba(14,15,15,0.8)',
    color: '#fff',
    textAlign: 'center',
    marginTop: 42,
  },
  blueBorder: {
    borderWidth: 3,
    borderColor: '#0068D9',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 9,
  },
  bottomBtnText: {
    fontSize: 16,
    lineHeight: 20,
    marginRight: 5,
  },
});
