import store from 'Root/store';
import types from 'Root/actions';

export default async ({ push }) => {
  store.dispatch({
    type: types.token.LOGOUT,
  });

  store.dispatch({
    type: types.wallet.LOGOUT,
  });

  global.sessionStorage.removeItem('name');
  global.sessionStorage.removeItem('password');
  global.sessionStorage.removeItem('privateKey');

  push('/login');
};
