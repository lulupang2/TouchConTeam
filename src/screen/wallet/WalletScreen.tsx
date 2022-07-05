import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {WALLET_DUMMY} from '../../../mock/dummy';
import ModalContainer from '../../component/Modal/Modal';
import TouchableNoFeedback from '../../component/TouchableNoFeedback';
import {MCIcon} from '../../component/UI/MaterialCommunityIcons';
import ShadowBox from '../../component/UI/shadowBox';
import PointSwap from '../../component/Wallet/PointSwap';
import QRWallet from '../../component/Wallet/QRWallet';
import themeStyle from '../../style/theme.style';
import {widthPercentage} from '../../util/ResponsiveSize';
export default function WalletScreen() {
  const navigation = useNavigation();
  const [isQRModal, setQRModal] = useState(false);
  const [isSwapModal, setSwapModal] = useState(false);
  const toggleQRModal = useCallback(() => {
    setQRModal(!isQRModal);
  }, [isQRModal]);
  const toggleSwapModal = useCallback(() => {
    setSwapModal(!isSwapModal);
  }, [isSwapModal]);
  const onNavigate = () => {
    //@ts-ignore
    navigation.navigate('SendToc');
  };
  const onNav = (path: any) => {
    //@ts-ignore
    navigation.navigate(path);
  };
  const onClose = () => {
    //@ts-ignore
    navigation.navigate('Wallet');
  };
  return (
    <TouchableNoFeedback style={styles.container}>
      <View style={styles.HeaderStyle}>
        <View style={styles.topBar}>
          <View style={styles.topBarBox}>
            <TouchableOpacity style={styles.topBarIcon}>
              <Image
                source={require('../../../assets/icons/cartIconLight.png')}
                resizeMode="contain"
                style={styles.fullimg}
              />
            </TouchableOpacity>
            {/* eslint-disable-next-line react-native/no-inline-styles */}
            <TouchableOpacity style={[styles.topBarIcon, {marginLeft: 10}]}>
              <Image
                source={require('../../../assets/icons/bellIconLight.png')}
                resizeMode="contain"
                style={styles.fullimg}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.walletInfoBox}>
        <View style={styles.walletDetails}>
          <Text style={styles.price}>
            {WALLET_DUMMY[0].currentPoint
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            <Text style={styles.KRW}>{'\u{20A9}'}</Text>
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="middle"
            style={styles.contractAddr}>
            {WALLET_DUMMY[0].contractAddr}
          </Text>
        </View>
        <ShadowBox style={styles.QRBox}>
          <TouchableOpacity onPress={toggleQRModal} style={styles.QRButton}>
            <Image
              source={require('../../../assets/images/tempqr.png')}
              style={styles.fullimg}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </ShadowBox>
      </View>
      <View style={styles.myAccountBox}>
        <ShadowBox style={styles.myAccountInfo}>
          <ImageBackground
            source={require('../../../assets/images/wallet/walletPattern.png')}
            resizeMode="cover"
            style={styles.image}>
            <Text style={styles.accountText}>My Account</Text>
            <Text style={styles.myAccountTotal}>
              {WALLET_DUMMY[0].currentPoint
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              <Text style={{fontFamily: themeStyle.FONT_REGULAR}}> TOC</Text>
            </Text>
          </ImageBackground>
        </ShadowBox>
        <View style={styles.myAccountAddBox}>
          <Icon name="plus" color={'#B2B2B2'} size={18} />
        </View>
      </View>
      <ShadowBox style={styles.marketValue}>
        <View style={styles.rowCenter}>
          <Image
            source={require('../../../assets/icons/touchconIcon.png')}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{width: 40}}
            resizeMode="contain"
          />

          <View
            //eslint-disable-next-line react-native/no-inline-styles
            style={{marginLeft: 10}}>
            <Text style={styles.marketMainText}>TouchCon</Text>
            <Text style={styles.marketSubText}>TOC</Text>
          </View>
        </View>
        <View style={{width: widthPercentage(50)}}>
          <Image
            source={require('../../../assets/images/tempGraph.png')}
            style={styles.fullimg}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.marketPriceText}>{'\u{20A9}'}1935.15</Text>
          <Text
            style={{
              color: themeStyle.Primary,
              fontFamily: themeStyle.FONT_REGULAR,
            }}>
            <MCIcon name="arrow-bottom-right" />
            7.38%
          </Text>
        </View>
      </ShadowBox>
      <View style={styles.SwapStakingBox}>
        <ShadowBox
          onPress={() => {
            navigation.navigate('PointSwap');
          }}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{flex: 1, marginRight: 20}}>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={[styles.roundButton1, {backgroundColor: '#FFBC01'}]}>
            <Icon name="swap" size={30} color={'#FFF'} />
          </View>
          <Text style={styles.pointSwapText}>포인트 전환</Text>
        </ShadowBox>
        <ShadowBox
          style={{flex: 1}}
          onPress={() => {
            navigation.navigate('Stacking');
          }}>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={[styles.roundButton1, {backgroundColor: '#FF90A5'}]}>
            <Icon name="bank" size={30} color={'#FFF'} />
          </View>
          <Text style={styles.stackingText}>터치 스테이킹</Text>
        </ShadowBox>
      </View>
      <ModalContainer
        hideModal={toggleQRModal}
        visible={isQRModal}
        borderColor="#FFF">
        <QRWallet hideModal={toggleQRModal} />
      </ModalContainer>
      <ModalContainer
        title="포인트 전환하기"
        hideModal={toggleSwapModal}
        visible={isSwapModal}>
        <PointSwap />
      </ModalContainer>
    </TouchableNoFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingBottom: 40,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  HeaderStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 56,
    // eslint-disable-next-line eqeqeq
    top: Platform.OS == 'ios' ? 20 : 0,
    borderColor: '#E5E5EA',
  },
  topBar: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topBarBox: {
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'flex-end',
  },
  topBarIcon: {
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  walletDetails: {
    flex: 65,
    marginRight: 20,
  },
  contractAddr: {color: '#999', fontSize: 15},
  QRBox: {
    flex: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  QRButton: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 17,
  },
  price: {
    fontSize: themeStyle.FONT_XL,
    color: '#000',
    fontFamily: themeStyle.FONT_BOLD,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 25,
  },
  KRW: {
    fontSize: 20,
    color: '#000',
    fontFamily: themeStyle.FONT_BOLD,
  },
  marketValue: {
    flex: 2,
    marginVertical: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  marketMainText: {color: '#333', fontFamily: themeStyle.FONT_REGULAR},
  marketSubText: {color: '#999', fontFamily: themeStyle.FONT_REGULAR},
  marketPriceText: {color: '#000', fontFamily: themeStyle.FONT_REGULAR},
  walletInfoBox: {
    flex: 2,
    marginVertical: 20,
    flexDirection: 'row',
  },
  myAccountBox: {
    flex: 4,
    flexDirection: 'row',
    marginVertical: 10,
  },
  myAccountInfo: {
    flex: 70,
    marginRight: 20,
    borderRadius: 32,
    backgroundColor: '#000',
    overflow: 'hidden',
    elevation: 10,
  },
  myAccountTotal: {
    fontSize: 17,
    fontFamily: themeStyle.FONT_BOLD,
    color: '#FFF',
    marginTop: 6,
  },
  myAccountAddBox: {
    flex: 14,
    borderWidth: 2,
    borderColor: '#CCC',
    borderStyle: 'dotted',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  accountText: {fontSize: 12},
  SwapStakingBox: {
    flex: 3,
    marginVertical: 10,
    flexDirection: 'row',
  },
  pointSwapText: {
    color: '#000',
    marginBottom: 20,
    marginLeft: 20,
    fontFamily: themeStyle.FONT_REGULAR,
  },
  stackingText: {
    color: '#000',
    marginBottom: 20,
    marginLeft: 20,
    fontFamily: themeStyle.FONT_REGULAR,
  },
  shadowBox: {
    flex: 1,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.95,
    shadowRadius: 16,
    elevation: 5,
  },
  roundButton1: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 100,
  },
  fullimg: {
    width: '100%',
    height: '100%',
  },
  rowCenter: {flexDirection: 'row', alignItems: 'center'},
});
