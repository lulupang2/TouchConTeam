import {createStackNavigator} from '@react-navigation/stack';
import Intro1 from '../Mainflow/Intro1/view';
import Intro2 from '../Mainflow/Intro2/view';
import Intro3 from '../Mainflow/Intro3/view';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TestButton from '../Mainflow/TestButton/view';
import TestThumbnail from '../Mainflow/TestThumbnail/view';
import {DrawerStack} from './DrawerStack';
import Wallet from '../Mainflow/Wallet/view';
import SignOut from '../Mainflow/SignOut/view';
import Pinlogin from '../Mainflow/Pinlogin/view';
import Splash from '../Application/Splash';
import Pinchg from '../Mainflow/Pinchg/view';
import Thumbnail2 from '../Mainflow/Thumbnail2/view';
import Thumbnail3 from '../Mainflow/Thumbnail3/view';
import TcConnMana from '../Mainflow/TcConnMana/view';
import MarketingInfo from '../Mainflow/MarketingInfo/view';
import Policy from '../Mainflow/Policy/view';
import TcStory from '../Mainflow/TcStory/view';
import SendMsg from '../Mainflow/SendMsg/view';
import QnA from '../Mainflow/QnA/view';
import Notice from '../Mainflow/Notice/view';
import MyInfo from '../Mainflow/MyInfo/view';
import Shopping from '../Mainflow/Shopping/view';
import Thumbnail1 from '../Mainflow/Thumbnail1/view';
import Thumbnail4 from '../Mainflow/Thumbnail4/view';
import Prepare from '../Mainflow/Prep/view';
import Signup from '../Mainflow/Signup/view';
import ScanResult from '../Mainflow/ScanResult/view';
import RandomSc from '../Mainflow/RandomSc/view';
import MyCoupon from '../Mainflow/MyCoupon/view';
import ScanHistory from '../Mainflow/ScanHistory/view';
import TouchCon from '../Mainflow/TouchCon/view';
import TouchConCh from '../Mainflow/TouchconCh/view';
import GfCaolion from '../Mainflow/GfCaolion/Caolion';
import GfMegaMall from '../Mainflow/GfMegaMall/MegaMall';
import GfGukBab from '../Mainflow/GfGukBab/GukBab';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const RootStack = () => (
  <Stack.Navigator
    // initialRouteName="TestButton"
    initialRouteName="Splash"
    screenOptions={{
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 20,
        lineHeight: 24,
        color: '#000',
        fontWeight: 'bold',
        // fontFamily: 'NotoSansKR-Regular',
      },
      headerStyle: {
        shadowOffset: {height: 0, width: 0},
        backgroundColor: '#fff',
      },
      headerBackImage: () => (
        <AntDesign
          name="left"
          size={24}
          color={'#000'}
          style={{padding: 4, alignSelf: 'center'}}
        />
      ),
      headerBackTitleVisible: false,
    }}
  >
    {/* 버튼 모음  start */}
    <Stack.Screen
      name="TestButton"
      component={TestButton}
      options={{headerShown: false}}
    />
    {/* 버튼 모음 end */}

    {/* 버튼 모음2  start */}
    {/*<Stack.Screen*/}
    {/*  name="TestThumbnail"*/}
    {/*  component={TestThumbnail}*/}
    {/*  options={{title: 'x 버튼 필요'}}*/}
    {/*/>*/}
    {/* 버튼 모음2 end */}

    {/* Intro 3 start*/}
    <Stack.Screen
      name="Intro3"
      component={Intro3}
      options={{headerShown: false}}
    />
    {/* Intro 3 end*/}

    {/* Intro 2 start*/}
    <Stack.Screen
      name="Intro2"
      component={Intro2}
      options={{headerShown: false}}
    />
    {/* Intro 2 end*/}

    {/* Intro 1 start*/}
    <Stack.Screen
      name="Intro1"
      component={Intro1}
      options={{headerShown: false}}
    />
    {/* Intro 2 end*/}

    {/* 메인화면 start */}
    <Stack.Screen
      name="Main"
      component={DrawerStack}
      options={{headerShown: false}}
    />
    {/* 메인화면 end */}

    {/* ------ 지갑생성 (터치콘 지갑) start */}
    <Stack.Screen
      name="Wallet"
      component={Wallet}
      options={{title: '터치콘 지갑'}}
    />
    {/* ------ 지갑생성 (터치콘 지갑) end */}
    {/* Sign Out start(회원탈퇴) */}
    <Stack.Screen
      name="SignOut"
      component={SignOut}
      options={{title: '계정탈퇴'}}
    />

    {/* Sign Out start(회워탈퇴) */}

    <Stack.Screen
      name="Pinlogin"
      component={Pinlogin}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Splash"
      component={Splash}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Pinchg"
      component={Pinchg}
      options={{headerShown: false}}
    />

    {/* 터치콘 연결관리 */}
    <Stack.Screen
      name="TcConnMana"
      component={TcConnMana}
      options={{title: '터치콘 연결관리'}}
    />
    {/* 마켓팅 정보 알림 */}
    <Stack.Screen
      name="MarketingInfo"
      component={MarketingInfo}
      options={{title: '마케팅 정보 알림'}}
    />
    {/* 약관 및 개인정보처리 방침*/}
    <Stack.Screen
      name="Policy"
      component={Policy}
      options={{title: '약관 및 개인정보처리방침'}}
    />

    <Stack.Screen
      name="TcStory"
      component={TcStory}
      options={{title: '터치콘이란'}}
    />
    {/* 1:1 문의하기 */}
    <Stack.Screen
      name="SendMsg"
      component={SendMsg}
      options={{title: '1:1 문의하기'}}
    />

    {/* 내 정보 > 자주묻는 질문 페이지  */}
    <Stack.Screen
      name="QnA"
      component={QnA}
      options={{title: 'Q&A 궁금증 해소하세요'}}
    />

    {/* 공지사항 */}
    <Stack.Screen
      name="Notice"
      component={Notice}
      options={{title: '공지사항'}}
    />

    <Stack.Screen
      name="MyInfo"
      component={MyInfo}
      options={{title: '내 정보'}}
    />

    <Stack.Screen
      name="Shopping"
      component={Shopping}
      options={{title: '터치 쇼핑몰 쇼핑하기'}}
    />
    <Stack.Screen
      name="Thumbnail1"
      component={Thumbnail1}
      options={{title: ''}}
    />
    <Stack.Screen
      name="Thumbnail2"
      component={Thumbnail2}
      options={{title: ''}}
    />

    <Stack.Screen
      name="Thumbnail3"
      component={Thumbnail3}
      options={{title: ''}}
    />
    <Stack.Screen
      name="Thumbnail4"
      component={Thumbnail4}
      options={{title: ''}}
    />

    <Stack.Screen
      name="Prep"
      component={Prepare}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Intro"
      component={MyTabs}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Signup"
      component={Signup}
      options={{headerShown: false}}
    />

    {/*------스캔 결과 start---------  */}
    <Stack.Screen
      name="ScanResult"
      component={ScanResult}
      options={{headerShown: false}}
    />
    {/*------스캔 결과 end---------  */}

    {/* ------- 스캔하기 start --------- */}
    <Stack.Screen
      name="RandomSc"
      component={RandomSc}
      options={{
        title: '스캔으로 랜덤 잭팟을!',
        headerStyle: {backgroundColor: '#FD7F36'},
        // headerTintColor: '#fff',
        headerTitleStyle: {
          color: '#fff',
        },
      }}
    />
    {/* ------- 스캔하기 end --------- */}

    {/* ------ 내 쿠폰 start */}
    <Stack.Screen
      name="MyCoupon"
      component={MyCoupon}
      options={{
        title: '내쿠폰',
        headerStyle: {backgroundColor: '#FD7F36'},
        headerTintColor: '#fff',
        headerTitleStyle: {
          color: '#fff',
        },
      }}
    />
    {/* ------ 내 쿠폰 end */}

    {/*---------스캔보기 start---------  */}
    <Stack.Screen
      name="ScanHistory"
      component={ScanHistory}
      options={{title: '스캔 히스토리'}}
    />

    {/*---------스캔보기 end ----------  */}

    {/* ----- 터치콘 start-------- */}
    <Stack.Screen
      name="TouchCon"
      component={TouchCon}
      options={{title: '터치콘 지갑'}}
    />
    {/*---- 터치콘  end---- */}
    {/* ----- 터치콘전환  start-------- */}
    <Stack.Screen
      name="TouchConCh"
      component={TouchConCh}
      options={{title: '터치콘 전환'}}
    />
    {/*---- 터치콘전환  end---- */}

    <Stack.Screen
      name="GfCaolion"
      component={GfCaolion}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="GfMegaMall"
      component={GfMegaMall}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="GfGukBab"
      component={GfGukBab}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Intro1"
      tabBar={() => null}
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen name="Intro1" component={Intro1} />
      <Tab.Screen name="Intro2" component={Intro2} />
      <Tab.Screen name="Intro3" component={Intro3} />
    </Tab.Navigator>
  );
}

// function MyTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Main"
//       tabBar={() => null}
//       screenOptions={{
//         tabBarShowLabel: false,
//       }}>
//       <Tab.Screen name="Main" component={Main} />
//       <Tab.Screen name="TouchCon" component={TouchCon} />
//     </Tab.Navigator>
//   );
// }

export default RootStack;
