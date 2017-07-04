import 'babel-polyfill';
import 'styles';
import React from 'react';
import { render } from 'react-dom';
import LoginPage from './components/presentationalComponents/LoginPage';
import configureStore from './configureStore';

const store = configureStore();

render(
  <LoginPage store={store} />,
  document.getElementById('root')
);
