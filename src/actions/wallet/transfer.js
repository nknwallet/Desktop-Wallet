import React from 'react';

import store from 'Root/store';
import types from 'Root/actions';
import language from 'Root/helpers/language';
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
        width: 461,
        height: 262,
        type: types.modal.OPEN,
        children: <SuccessfulTransfer hash={data} />,
      });
    }, 500);
  }).catch(() => {
    setTimeout(() => {
      store.dispatch({
        width: 461,
        height: 262,
        type: types.modal.OPEN,
        children: <SuccessfulTransfer failure />,
      });
    }, 500);
  });
};
