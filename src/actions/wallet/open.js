import nknWallet from 'nkn-wallet';

import store from 'Root/store';
import types from 'Root/actions';
import { rpcAddr } from 'Root/config.json';
import language from 'Root/helpers/language';

nknWallet.configure({
  rpcAddr,
});

export default async ({
  push,
  file,
  password,
  setState,
  name = 'mywallet',
}) => {
  const currentLanguage = store.getState().language;

  let wallet;

  try {
    wallet = nknWallet.loadJsonWallet(JSON.stringify(file), password);
  } catch (e) {
    if (e === 'Wrong password') {
      setState({
        errors: {
          password: language.passwordIsIncorrect[currentLanguage],
        },
      });

      return;
    }

    if (e === 'Invalid wallet format') {
      setState({
        errors: {
          file: language.invalidFileFormat[currentLanguage],
        },
      });

      return;
    }

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

  global.sessionStorage.setItem('name', name);
  global.sessionStorage.setItem('password', password);
  global.sessionStorage.setItem('privateKey', wallet.getSeed());

  push('/loading');
};
