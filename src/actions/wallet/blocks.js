import fetch from 'node-fetch';

import store from 'Root/store';
import types from 'Root/actions';

export default async () => new Promise((resolve, reject) => {
  fetch('https://api.nknx.org/blocks')
    .then(res => res.json())
    .then((res) => {
      const { data } = res;

      store.dispatch({
        block: data[0].height,
        type: types.wallet.BLOCK,
      });

      resolve();
    })
    .catch((error) => {
      reject(error);
    });
});
