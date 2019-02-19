import nknWallet from 'nkn-wallet';

import store from 'Root/store';
import types from 'Root/actions';

export default async ({
  push,
  file,
  password,
  setState,
  name = 'MyWallet',
}) => {
  const wallet = nknWallet.loadJsonWallet(JSON.stringify(file), password);

  if (wallet.code === 3) {
    setState({
      errors: {
        password: 'Password is incorrect.',
      },
    });

    return;
  }

  if (wallet.code === 4) {
    setState({
      errors: {
        file: 'Invalid file format.',
      },
    });

    return;
  }

  if (wallet.code) {
    setState({
      errors: {
        file: 'Error.',
      },
    });
  }

  store.dispatch({
    wallet,
    name,
    type: types.wallet.CREATE,
  });

  store.dispatch({
    type: types.token.LOGIN,
    token: wallet.getPrivateKey(),
  });

  global.localStorage.setItem('name', name);
  global.localStorage.setItem('password', password);
  global.localStorage.setItem('privateKey', wallet.getPrivateKey());

  push('/loading');
};
