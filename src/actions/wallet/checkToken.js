import store from 'Root/store';
import types from 'Root/actions';
import nknWallet from 'nkn-wallet';

export default async () => new Promise((resolve) => {
  const privateKey = global.localStorage.getItem('privateKey');

  if (!privateKey) {
    return resolve();
  }

  store.dispatch({
    token: privateKey,
    type: types.token.LOGIN,
  });

  const name = global.localStorage.getItem('name');
  const password = global.localStorage.getItem('password');

  const wallet = nknWallet.restoreWalletByPrivateKey(privateKey, password);

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
