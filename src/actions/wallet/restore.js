import nknWallet from 'nkn-wallet';

import store from 'Root/store';
import types from 'Root/actions';
import { rpcAddr } from 'Root/config.json';

nknWallet.configure({
  rpcAddr,
});

export default async ({
  push,
  name,
  password,
  privateKey,
}) => {
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

  global.sessionStorage.setItem('name', name);
  global.sessionStorage.setItem('password', password);
  global.sessionStorage.setItem('privateKey', wallet.getSeed());

  push('/loading');
};
