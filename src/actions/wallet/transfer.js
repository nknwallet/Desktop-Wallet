import React from 'react';

import store from 'Root/store';
import types from 'Root/actions';
import language from 'Root/helpers/language';
import currentWindow from 'Root/helpers/currentWindow';
import SuccessfulTransfer from 'Root/components/pages/Modals/SuccessfulTransfer';

export default async ({
  amount,
  address,
  password,
  setState,
}) => {
  const realPass = global.localStorage.getItem('password');
  const currentLanguage = store.getState().language;

  if (realPass !== password) {
    setState({
      errors: {
        password: language.passwordIsIncorrect[currentLanguage],
      },
    });

    return;
  }

  const { wallet } = store.getState();

  const balance = Number.parseFloat(wallet.balance, 10);

  if (Number.parseFloat(amount) > balance) {
    setState({
      errors: {
        amount: language.notEnoughBalance[currentLanguage],
      },
    });

    return;
  }

  store.dispatch({
    type: types.modal.CLOSE,
  });

  wallet.wallet.transferTo(address, amount, password).then((data) => {
    setTimeout(() => {
      store.dispatch({
        type: types.modal.OPEN,
        children: <SuccessfulTransfer hash={data} />,
        width: currentWindow().width > 500 ? 461 : 250,
        height: currentWindow().width > 500 ? 262 : 320,
      });
    }, 500);
  }).catch(() => {
    setTimeout(() => {
      store.dispatch({
        type: types.modal.OPEN,
        children: <SuccessfulTransfer failure />,
        width: currentWindow().width > 500 ? 461 : 250,
        height: currentWindow().width > 500 ? 262 : 320,
      });
    }, 500);
  });
};
