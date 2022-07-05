import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Intro from '../component/Intro/Intro';
import Splash from '../component/Splash/Splash';
import PointSwap from '../component/Wallet/PointSwap';
import SendToc from '../component/Wallet/SendToc';
import SendTocCount from '../component/Wallet/SendTocCount';
import {SignUp} from '../container/Auth';
import AuthPage from '../container/Auth/AuthPage';
import BioAuthManage from '../screen/mypage/BioAuthManage';
import LinkManage from '../screen/mypage/LinkManage';
import MarketManage from '../screen/mypage/MarketManage';
import PinManage from '../screen/mypage/PinManage';
import MarketingInfoTerms from '../screen/mypage/terms/MarketingInfoTerms';
import PersonalInfoTerms from '../screen/mypage/terms/PersonalInfoTerms';
import TermsService from '../screen/mypage/terms/TermsService';
import TermsManage from '../screen/mypage/TermsManage';
import QRCamera from '../screen/QRScan/QRCamera';
import StackingRegist from '../screen/stacking/StackingRegist';
import StackingScreen from '../screen/stacking/StackingScreen';
import StackingStatus from '../screen/stacking/StackingStatus';
import Home from './TabNavigation';
export type StackParamList = {
  Splash: undefined;
  Intro: undefined;
  Auth: undefined;
  SignUp: undefined;
  Home: undefined;
  SendToc: undefined;
  SendTocCount: undefined;
  PointSwap: undefined;
  Stacking: undefined;
  StackingRegist: undefined;
  StackingStaus: undefined;
  QRCamera: undefined;
  LinkManage: undefined;
  PinManage: undefined;
  BioAuthManage: undefined;
  MarketManage: undefined;
  TermsManage: undefined;
  TermsService: undefined;
  PersonalInfoTerms: undefined;
  MarketingInfoTerms: undefined;
};

const RootStack = () => {
  const Stack = createNativeStackNavigator<StackParamList>();
  return (
    <>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Intro"
          component={Intro}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Auth"
          component={AuthPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        {/* Home -> TabNavigaion */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        {/* Wallet Stack */}
        <Stack.Screen
          name="SendToc"
          component={SendToc}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SendTocCount"
          component={SendTocCount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PointSwap"
          component={PointSwap}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Stacking"
          component={StackingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StackingRegist"
          component={StackingRegist}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StackingStaus"
          component={StackingStatus}
          options={{headerShown: false}}
        />
        {/* QRScan  */}

        <Stack.Screen
          name="QRCamera"
          component={QRCamera}
          options={{headerShown: false}}
        />
        {/* MyPage */}
        <Stack.Screen
          name="LinkManage"
          component={LinkManage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PinManage"
          component={PinManage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BioAuthManage"
          component={BioAuthManage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MarketManage"
          component={MarketManage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TermsManage"
          component={TermsManage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TermsService"
          component={TermsService}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MarketingInfoTerms"
          component={MarketingInfoTerms}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PersonalInfoTerms"
          component={PersonalInfoTerms}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default RootStack;
