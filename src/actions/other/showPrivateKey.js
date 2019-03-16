import React from 'react';

import store from 'Root/store';
import types from 'Root/actions';
import language from 'Root/helpers/language';
import ShowPrivateKeyModal from 'Root/components/pages/Modals/PrivateKey/Show';

export default async ({ password, setState }) => {
  const realPass = global.localStorage.getItem('password');
  const currentLanguage = store.getState().language;

  if (realPass !== password) {
    setState({
      error: language.passwordIsIncorrect[currentLanguage],
    });

    return;
  }

  store.dispatch({
    type: types.modal.CLOSE,
  });

  setTimeout(() => {
    store.dispatch({
      width: 461,
      height: 262,
      type: types.modal.OPEN,
      children: <ShowPrivateKeyModal />,
    });
  }, 500);
};
