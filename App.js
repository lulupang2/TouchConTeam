import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import RootStack from './src/containers/Navigations/RootStack';
import store, {persistor} from './src/redux/store';
// import {withAuthenticator} from 'aws-amplify-react-native';
// import Amplify from 'aws-amplify';
// import config from './src/aws-exports';
//
// Amplify.configure(config);

function App() {
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
