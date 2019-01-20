import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'Root/styles/main.less';
import 'Root/styles/fonts.less';

import store from './store';
import App from './components';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  global.document.getElementById('react'),
);
