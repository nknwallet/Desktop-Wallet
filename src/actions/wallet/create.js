import nknWallet from 'nkn-wallet';

import store from 'Root/store';
import types from 'Root/actions';
import { rpcAddr } from 'Root/config.json';

nknWallet.configure({
  rpcAddr,
});

export default async ({ push, name, password }) => {
  const wallet = nknWallet.newWallet(password);

  wallet.registerName(name)
    .then((data) => {
      console.log(`Done ${data}`);
    })
    .catch((error) => {
      console.log(error);
    });

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

  push('/download');
};
