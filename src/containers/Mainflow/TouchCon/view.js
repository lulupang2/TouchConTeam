import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import WalletButton from '../../../components/WalletButton';
import WalletRectangle from '../../../components/WalletRectangle';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const view = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View style={{marginLeft: 15,}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <Image
              source={require('../../../assets/images/btn_back.png')}
              style={{
                resizeMode: 'contain',
                width: width * 0.1,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <Image
            source={require('../../../assets/images/tc_wallet_title.png')}
            style={{
              resizeMode: 'contain',
              width: width * 0.3,
              padding: height * 0.045
            }}
          />
        </View>
        <View style={{marginRight: 15,}}>
          <TouchableOpacity>
            <Image
              source={require('../../../assets/images/btn_close_thum.png')}
              style={{
                resizeMode: 'contain',
                width: width * 0.1,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* 상단 배경 start  */}
      <ScrollView>
        <View style={{flex: 1}}>
          <Image
            source={require('../../../assets/images/tc_btn_back.png')}
            style={{
              // resizeMode: 'contain',
              width: '100%',
              height: 235,
              // position: 'absolute',
              // top: height * -0.05,
              // backgroundColor: 'red',
            }}
          />
        </View>
        {/* 상단 배경 end */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center',
            marginTop: -100,
            width: vw * 88,
            marginLeft: vw * 6,
            marginRight: vw * 6,
            // backgroundColor: 'red',
          }}
        >
          {/* Touch 결제 start */}
          <WalletButton 
            onPress={() => console.log('터치결제 페이지로')}
            text={`Touch\n결제`}
          />
          {/* Touch 결제 end */}
          {/* 지갑생성 start*/}
          <WalletButton 
            onPress={() => navigation.navigate("Wallet")}
            text={`지갑\n생성`}
          />
          {/* 지갑생성 end */}
          {/* 터치콘 전환 start */}
          <WalletButton 
            onPress={() => navigation.navigate("TouchConCh")}
            text={`터치콘\n전환`}
          />
          {/* 터치콘 전환 end */}
          {/* 스캔보기 start */}
          <WalletButton 
            onPress={() => navigation.navigate("ScanHistory")}
            text={`스캔\n보기`}
          />
          {/* 스캔보기 end */}
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 30,
            // backgroundColor: 'red',
            width: '100%',
          }}
        >

          <View 
            style={{
              marginTop: 35,
              marginLeft: vw * 5
            }}
          >
            <Text 
              style={{
                fontSize: 16,
                fontWeight: '700',
              }}
            >
              터치콘 지갑
            </Text>
          </View>

          {/* 가운데 qr 이미지 start */}
          <View 
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
              // backgroundColor: 'red',
            }}
          >
            {/* QR코드 감싸는 View, 그라데이션 처리 해야됨 */}
            <View 
              style={{
                
              }}
            >
              {/* 가운데 qr 이미지 start */}
              <Image
                source={require('../../../assets/images/wallet_qr_code.png')}
                style={{
                  width: 185,
                  height: 185,
                }}
              />
            </View>
          </View>
        </View>

        <View 
          style={{
            marginTop: 42,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: 50,
            backgroundColor: 'rgba(14, 15, 15, 0.8)'
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: '#FFF',
              fontWeight: '700',
            }}
          >
            0x3215463e2184685415216ee4e4e56545656421ds121
          </Text>
        </View>

        <View
          style={{
            // position: 'absolute',
            // top: height * 0.83,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 36,
            marginBottom: 36,
          }}>
          {/* bottom 복사 버튼 start */}
          <WalletRectangle 
            onPress={() => console.log("복사버튼")}
            text="복사" 
            icon="copy1"
          />
          {/* bottom 복사 버튼 end */}
          <View style={{width: width * 0.06}}></View>
          {/* bottom 전달 버튼 start */}
          <WalletRectangle 
            onPress={() => console.log("전달버튼")}
            text="전달" 
            icon="export"
          />
          {/* bottom 전달 버튼 end */}
        </View>
      </ScrollView>
    </View>
  );
};

export default view;
