import nknWallet from 'nkn-wallet';

import store from 'Root/store';
import types from 'Root/actions';
import language from 'Root/helpers/language';

nknWallet.configure({
  rpcAddr: 'https://devnet-seed.nkn.org',
});

export default async ({
  push,
  file,
  password,
  setState,
  name = 'MyWallet',
}) => {
  const wallet = nknWallet.loadJsonWallet(JSON.stringify(file), password);
  const currentLanguage = store.getState().language;

  if (wallet.code === 3) {
    setState({
      errors: {
        password: language.passwordIsIncorrect[currentLanguage],
      },
    });

    return;
  }

  if (wallet.code === 4) {
    setState({
      errors: {
        file: language.invalidFileFormat[currentLanguage],
      },
    });

    return;
  }

  if (wallet.code) {
    setState({
      errors: {
        file: language.error[currentLanguage],
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
  global.localStorage.setItem('privateKey', wallet.getSeed());

  push('/loading');
};
