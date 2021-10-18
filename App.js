import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './src/containers/Application/Splash';
import Intro1 from './src/containers/Mainflow/Intro1/view';
import Intro2 from './src/containers/Mainflow/Intro2/view';
import Intro3 from './src/containers/Mainflow/Intro3/view';
import Signup from './src/containers/Mainflow/Signup/view';
import Pinlogin from './src/containers/Mainflow/Pinlogin/view';
import Pinchg from './src/containers/Mainflow/Pinchg/view';
import Pinsign from './src/containers/Mainflow/Pinsign/view';
import Main from './src/containers/Mainflow/Main/view';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import GfGukBab from './src/containers/Mainflow/GfGukBab/GukBab';
import GfMegaMall from './src/containers/Mainflow/GfMegaMall/MegaMall';
import GfCaolion from './src/containers/Mainflow/GfCaolion/Caolion';
import Thumbnail1 from './src/containers/Mainflow/Thumbnail1/view';
import Thumbnail2 from './src/containers/Mainflow/Thumbnail2/view';
import Thumbnail3 from './src/containers/Mainflow/Thumbnail3/view';
import Thumbnail4 from './src/containers/Mainflow/Thumbnail4/view';
import Prepare from './src/containers/Mainflow/Prep/view';
import Shopping from './src/containers/Mainflow/Shopping/view';
import MyInfo from './src/containers/Mainflow/MyInfo/view';
import Notice from './src/containers/Mainflow/Notice/view';
import QnA from './src/containers/Mainflow/QnA/view';
import SendMsg from './src/containers/Mainflow/SendMsg/view';
import TcStory from './src/containers/Mainflow/TcStory/view';
import Policy from './src/containers/Mainflow/Policy/view';
import MarketingInfo from './src/containers/Mainflow/MarketingInfo/view';
import TcConnMana from './src/containers/Mainflow/TcConnMana/view';
import TouchCon from './src/containers/Mainflow/TouchCon/view';
import Wallet from './src/containers/Mainflow/Wallet/view';
import TouchConCh from './src/containers/Mainflow/TouchconCh/view';
import ScanHistory from './src/containers/Mainflow/ScanHistory/view';
import MyCoupon from './src/containers/Mainflow/MyCoupon/view';
import RandomSc from './src/containers/Mainflow/RandomSc/view';
import ScanResult from './src/containers/Mainflow/ScanResult/view';
import TestButton from './src/containers/Mainflow/TestButton/view';
import SignOut from './src/containers/Mainflow/SignOut/view';
import TestThumbnail from './src/containers/Mainflow/TestThumbnail/view';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TestButton">
        {/* 버튼 모음  start */}
        <Stack.Screen
          name="TestButton"
          component={TestButton}
          options={{headerShown: false}}
        />
        {/* 버튼 모음 end */}

        {/* 버튼 모음2  start */}
        <Stack.Screen
          name="TestThumbnail"
          component={TestThumbnail}
          options={{headerShown: false}}
        />
        {/* 버튼 모음2 end */}

        {/* Intro 3 start*/}
        <Stack.Screen
          name="Intro3"
          component={Intro3}
          options={{headerShown: false}}
        />
        {/* Intro 3 end*/}

        {/* 메인화면 start */}
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        {/* 메인화면 end */}

        {/* ------ 지갑생성 (터치콘 지갑) start */}
        <Stack.Screen
          name="Wallet"
          component={Wallet}
          options={{headerShown: false}}
        />
        {/* ------ 지갑생성 (터치콘 지갑) end */}
        {/* Sign Out start(회워탈퇴) */}
        <Stack.Screen
          name="SignOut"
          component={SignOut}
          options={{headerShown: false}}
        />

        {/* Sign Out start(회워탈퇴) */}

        <Stack.Screen
          name="Pinlogin"
          component={Pinlogin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Pinsign"
          component={Pinsign}
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
        <Stack.Screen
          name="GfGukBab"
          component={GfGukBab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GfMegaMall"
          component={GfMegaMall}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Thumbnail2"
          component={Thumbnail2}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Thumbnail3"
          component={Thumbnail3}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="TcConnMana"
          component={TcConnMana}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="MarketingInfo"
          component={MarketingInfo}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Policy"
          component={Policy}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="TcStory"
          component={TcStory}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SendMsg"
          component={SendMsg}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="QnA"
          component={QnA}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Notice"
          component={Notice}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="MyInfo"
          component={MyInfo}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Shopping"
          component={Shopping}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Thumbnail1"
          component={Thumbnail1}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Thumbnail4"
          component={Thumbnail4}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Prep"
          component={Prepare}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="GfCaolion"
          component={GfCaolion}
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
          options={{headerShown: false}}
        />
        {/* ------- 스캔하기 end --------- */}

        {/* ------ 내 쿠폰 start */}
        <Stack.Screen
          name="MyCoupon"
          component={MyCoupon}
          options={{headerShown: false}}
        />
        {/* ------ 내 쿠폰 end */}

        {/*---------스캔보기 start---------  */}
        <Stack.Screen
          name="ScanHistory"
          component={ScanHistory}
          options={{headerShown: false}}
        />

        {/*---------스캔보기 end ----------  */}

        {/* ----- 터치콘 start-------- */}
        <Stack.Screen
          name="TouchCon"
          component={TouchCon}
          options={{headerShown: false}}
        />
        {/*---- 터치콘  end---- */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Intro1"
      tabBar={() => null}
      screenOptions={{
        tabBarShowLabel: false,
      }}>
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

export default App;
