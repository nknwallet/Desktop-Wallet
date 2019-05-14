import nknWallet from 'nkn-wallet';

import store from 'Root/store';
import types from 'Root/actions';
import { rpcAddr } from 'Root/config.json';

nknWallet.configure({
  rpcAddr,
});

export default async () => new Promise((resolve) => {
  const privateKey = global.sessionStorage.getItem('privateKey');

  if (!privateKey) {
    return resolve();
  }

  store.dispatch({
    token: privateKey,
    type: types.token.LOGIN,
  });

  const name = global.sessionStorage.getItem('name');
  const password = global.sessionStorage.getItem('password');

  const wallet = nknWallet.restoreWalletBySeed(privateKey, password);

  store.dispatch({
    name,
    wallet,
    type: types.wallet.CREATE,
  });

  store.dispatch({
    type: types.token.LOGIN,
    token: wallet.getPrivateKey(),
  });

  return resolve();
});
