import nknWallet from 'nkn-wallet';

import store from 'Root/store';
import types from 'Root/actions';

export default async ({ name, password, privateKey }) => {
  const wallet = nknWallet.restoreWalletByPrivateKey(privateKey, password);

  // and it goes ...
};
