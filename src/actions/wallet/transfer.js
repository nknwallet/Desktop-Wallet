import React from 'react';

import store from 'Root/store';
import types from 'Root/actions';
import language from 'Root/helpers/language';
import ConfirmTransfer from 'Root/components/pages/Modals/ConfirmTransfer';

export default async ({
  amount,
  address,
  setState,
}) => {
  const currentLanguage = store.getState().language;

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
    type: types.modal.CHANGE_MODAL_CONTENT,
    children: <ConfirmTransfer amount={amount} to={address} />,
  });
};
