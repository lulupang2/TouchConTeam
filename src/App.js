import React from 'react';
import Splash from './src/containers/Application/Splash';
import Intro1 from './src/containers/Mainflow/Intro1/view';
import Intro2 from './src/containers/Mainflow/Intro2/view';
import Intro3 from './src/containers/Mainflow/Intro3/view';
import Signup from './src/containers/Mainflow/Signup/view';
import Pinlogin from './src/containers/Mainflow/Pinlogin/view';
import Pinchg from './src/containers/Mainflow/Pinchg/view';
import Pinsign from './src/containers/Mainflow/Pinsign/view';
import Main from './src/containers/Mainflow/Main/view';
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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createAppContainer } from 'react-navigation';

const Stack = createStackNavigator();


const App = createNativeStackNavigator({
    TestButton: {
        screen : TestButton ,
    },
    Intro: {
        screen: Intro1,
    },
    Intro2: {
        screen : Intro2,
    },
    Intro2: {
        screen : Intro3,
    },
    Signup: {
        screen: Signup,
    },

    Pinlogin: {
        screen: Pinlogin,
    },
    Pinchg: {
        screen : Pinchg,
    },
    Pinsign: {
        screen : Pinsign,
    },
    Main: {
        screen:Main,
    },
    GfGukBab: {
        screen : GfGukBab,
    },
    GfMegaMall: {
        screen : GfMegaMall,
    },
    GfCaolion: {
        screen : GfCaolion,
    },
    Thumbnail1: {
        screen : Thumbnail1,
    },
    Thumbnail2: {
        screen : Thumbnail2,
    },
    Thumbnail3: {
        screen : Thumbnail3,
    },
    Thumbnail4: {
        screen : Thumbnail4,
    },
    Prepare: {
        screen : Prepare,
    },
    Shopping: {
        screen : Shopping,
    },
    MyInfo: {
        screen : MyInfo,
    },
    Notice: {
        screen : Notice,
    },
    QnA: {
        screen: QnA,
    },
    SendMsg: {
        screen :SendMsg,
    },
    TcStory: {
        screen : TcStory,
    },
    Policy: {
        screen : Policy,
    },
    MarketingInfo: {
        screen : MarketingInfo,
    },
    TcConnMana: {
        screen : TcConnMana,
    },
    TouchCon: {
        screen : TouchCon,
    },
    Wallet: {
        screen : Wallet,
    },
    TouchConCh: {
        screen : TouchConCh,
    },
    ScanHistory: {
        screen : ScanHistory,
    },
    MyCoupon: {
        screen : MyCoupon,
    },
    RandomSc: {
        screen : RandomSc,
    },
    SignOut: {
        screen : SignOut,
    },
    TestThumbnail: {
        screen : TestThumbnail,
    },

},
    {
initalRouteName : 'TestButton',
headerMode: 'none',
defaultNavigationOptions: {
    cardStyle: {
        backgroundColor : "#FFFFFF"
    }
}

},
);

//export default App;
//export default createAppContainer(App);

const AppContainer = createAppContainer(App);