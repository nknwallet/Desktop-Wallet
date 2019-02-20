import fetch from 'node-fetch';

import store from 'Root/store';
import types from 'Root/actions';

export default async () => new Promise((resolve, reject) => {
  const { wallet } = store.getState().wallet;

  fetch(`https://testnet.nkn.org/api/v1/transfer/address/${wallet.address}/0`)
    .then(res => res.json())
    .then((data) => {
      const { Data } = data;

      store.dispatch({
        list: Data.list,
        type: types.wallet.TRANSACTIONS,
      });

      resolve();
    })
    .catch((error) => {
      reject(error);
    });
});
