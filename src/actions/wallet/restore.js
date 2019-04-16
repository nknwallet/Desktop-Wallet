import nknWallet from 'nkn-wallet';

import store from 'Root/store';
import types from 'Root/actions';

nknWallet.configure({
  rpcAddr: 'https://devnet-seed.nkn.org',
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

  global.localStorage.setItem('name', name);
  global.localStorage.setItem('password', password);
  global.localStorage.setItem('privateKey', wallet.getSeed());

  push('/loading');
};
