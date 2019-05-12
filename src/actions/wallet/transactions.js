import fetch from 'node-fetch';

import store from 'Root/store';
import types from 'Root/actions';

export default async () => new Promise(async (resolve, reject) => {
  const { wallet } = store.getState().wallet;

  const transactions = await fetch(`https://api2.nknx.org/addresses/${wallet.address}/transactions`).then(res => res.json())

// https://api2.nknx.org/transactions/163929/payload
    .then((data) => {
      store.dispatch({
        list: data.data,
        type: types.wallet.TRANSACTIONS,
      });

      resolve();
    })
    .catch((error) => {
      reject(error);
    });
});
