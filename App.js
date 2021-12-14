import React, {useEffect} from 'react';
import {Alert, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import RootStack from './src/containers/Navigations/RootStack';
import store, {persistor} from './src/redux/store';
import BackHandler from 'react-native/Libraries/Utilities/BackHandler';
// import {withAuthenticator} from 'aws-amplify-react-native';
// import Amplify from 'aws-amplify';
// import config from './src/aws-exports';
//
// Amplify.configure(config);

function App() {
  useEffect(() => {
    const backAction = () => {
      Alert.alert('알림', '어플리케이션을 종료하시겠습니까?', [
        {
          text: '취소',
          onPress: () => null,
        },
        {text: '종료', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {/*<StatusBar barStyle="light-content" />*/}
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
// export default withAuthenticator(App, {
//   includeGreetings: true,
// });
