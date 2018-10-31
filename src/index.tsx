/* This is the web specific entry point to the SDX. -- The code here should be minimal

  Eventually this should be something like

  import { HelloWorld } from './HelloWorld';
  import { AppRegistry } from '@office-iss/sdx';

  AppRegistry.RegisterComponent('HelloWorld', () => HelloWorld);

*/

/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */
import * as ReactDOM from 'react-dom';
import { HelloWorld } from './HelloWorld';

let rootElement;

function _onLoad() {
  rootElement = rootElement || document.getElementById('content');

  ReactDOM.render(<HelloWorld />, rootElement);
}

function _onUnload() {
  if (rootElement) {
    ReactDOM.unmountComponentAtNode(rootElement);
  }
}

const isReady = document.readyState === 'interactive' || document.readyState === 'complete';

if (isReady) {
  _onLoad();
} else {
  window.onload = _onLoad;
}

window.onunload = _onUnload;
