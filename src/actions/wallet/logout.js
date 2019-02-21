import store from 'Root/store';
import types from 'Root/actions';

export default async ({ push }) => {
  store.dispatch({
    type: types.token.LOGOUT,
  });

  store.dispatch({
    type: types.wallet.LOGOUT,
  });

  global.localStorage.removeItem('name');
  global.localStorage.removeItem('password');
  global.localStorage.removeItem('privateKey');

  push('/open-wallet');
};
