import React from 'react';

import store from 'Root/store';
import types from 'Root/actions';
import language from 'Root/helpers/language';
import currentWindow from 'Root/helpers/currentWindow';
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
      type: types.modal.OPEN,
      children: <ShowPrivateKeyModal />,
      width: currentWindow().width > 500 ? 461 : 250,
      height: currentWindow().width > 500 ? 270 : 330,
    });
  }, 500);
};
