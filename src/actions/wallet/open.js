import nknWallet from 'nkn-wallet';

import store from 'Root/store';
import types from 'Root/actions';

export default async ({ file, password }) => {
  const wallet = nknWallet.loadJsonWallet(JSON.stringify(file), password);

  if (wallet.code === 4) {
    // error

    return;
  }
};
