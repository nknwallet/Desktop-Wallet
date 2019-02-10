import nknWallet from 'nkn-wallet';

import store from 'Root/store';
import types from 'Root/actions';

export default async ({ name, password }) => {
  const wallet = nknWallet.newWallet(password);

  wallet.registerName(name, password)
    .then(() => {
      store.dispatch({
        name,
        wallet,
        type: types.wallet.CREATE,
      });

      wallet.queryAssetBalance().then(function(value) {
        console.log('asset balance for this wallet is: ', value.toString());
      }).catch(function(error) {
        console.log('query balance fail: ', error);
      })

      global.localStorage.setItem('password', wallet.password);
      global.localStorage.setItem('privateKey', wallet.getPrivateKey());
    })
    .catch((e) => {
      console.log(e);
      store.dispatch({
        type: types.modal.OPEN,
        children: 'Something went wrong',
      });
    });
};
