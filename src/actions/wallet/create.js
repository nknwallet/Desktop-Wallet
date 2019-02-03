import nknWallet from 'nkn-wallet';

import store from 'Root/store';
import types from 'Root/actions';

export default async ({ name, password }) => {
  const wallet = nknWallet.newWallet(password);

  wallet.registerName(name, password)
    .then((data) => {
      store.dispatch({
        name,
        password,
        type: types.wallet.CREATE,
      });
    })
    .catch((error) => {
      store.dispatch({
        type: types.modal.OPEN,
        message: 'Something went wrong',
      });
    });
};
