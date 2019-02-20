import React from 'react';

import store from 'Root/store';
import types from 'Root/actions';
import SuccessfulTransfer from 'Root/components/pages/Modals/SuccessfulTransfer';

export default async ({
  amount,
  address,
  password,
  setState,
}) => {
  const realPass = global.localStorage.getItem('password');

  if (realPass !== password) {
    setState({
      errors: {
        password: 'Password is incorrect.',
      },
    });

    return;
  }

  const { wallet } = store.getState();

  const balance = Number.parseFloat(wallet.balance, 10);

  if (Number.parseFloat(amount) > balance) {
    setState({
      errors: {
        amount: 'Not enough balance.',
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
      });
    }, 500);
  }).catch(() => {
    setTimeout(() => {
      store.dispatch({
        type: types.modal.OPEN,
        children: <SuccessfulTransfer failure />,
      });
    }, 500);
  });
};
