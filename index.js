/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import Amplify from 'aws-amplify';
// import config from './src/aws-exports';
// Amplify.configure(config);

AppRegistry.registerComponent(appName, () => App);
