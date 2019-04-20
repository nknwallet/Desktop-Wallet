import fetch from 'node-fetch';

import store from 'Root/store';
import types from 'Root/actions';
import { rpcAddr } from 'Root/config.json';

export default async () => new Promise((resolve, reject) => {
  fetch(rpcAddr, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: 1,
      params: {},
      jsonrp: '2.0',
      method: 'getlatestblockheight',
    }),
  })
    .then(res => res.json())
    .then((res) => {
      store.dispatch({
        block: res.result,
        type: types.wallet.BLOCK,
      });

      resolve();
    })
    .catch((error) => {
      reject(error);
    });
});
