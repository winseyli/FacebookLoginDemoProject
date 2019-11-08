/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FacebookLoginScreen from './FacebookLoginScreen';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => FacebookLoginScreen);
