import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import configureStore from './configureStore';

require('styles'); // eslint-disable-line

const store = configureStore();
render(
  <Root store={store} />,
  document.getElementById('root')
);
