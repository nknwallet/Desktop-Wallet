import nknWallet from 'nkn-wallet';

import store from 'Root/store';
import types from 'Root/actions';

export default async ({ name, password }) => {
  const wallet = nknWallet.newWallet(password);

  store.dispatch({
    name,
    wallet,
    type: types.wallet.CREATE,
  });

  global.localStorage.setItem('name', name);
  global.localStorage.setItem('password', password);
  global.localStorage.setItem('privateKey', wallet.getPrivateKey());
};
