// This is the win32 specific entry point to the SDX. -- The code here should be minimal

/* tslint:disable:no-unused-variable */
import React = require('react');
/* tslint:enable:no-unused-variable */
import { AppRegistry } from 'react-native';
import { HelloWorld } from './HelloWorld';
import '@microsoft/office-api/office.runtime.reactnative';

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
