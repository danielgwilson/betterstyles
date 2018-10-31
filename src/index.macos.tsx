// This is the macos specific entry point to the SDX. -- The code here should be minimal

import { AppRegistry } from 'react-native';
import { HelloWorld } from './HelloWorld';
import '@microsoft/office-api/office.runtime.reactnative';

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
