import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import 'Root/styles/main.less';

import store from './store';
import App from './components';
import history from './history';
import 'rc-dropdown/assets/index.css';
import checkToken from './actions/wallet/checkToken';
import checkInternet from './actions/other/checkInternet';

(async () => {
  const onLine = await checkInternet();

  if (onLine) {
    await checkToken();
  }

  render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    global.document.getElementById('react'),
  );
})();
