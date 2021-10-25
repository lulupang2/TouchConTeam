import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import RootStack from './src/containers/Navigations/RootStack';

function App() {
  return (
    // <Provider>
    //   <StatusBar barStyle="light-content" />
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
    // </Provider>
  );
}

export default App;
