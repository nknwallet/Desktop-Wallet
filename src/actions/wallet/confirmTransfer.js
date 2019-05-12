import React from 'react';

import store from 'Root/store';
import types from 'Root/actions';
import LoadingTransfer from 'Root/components/pages/Modals/LoadingTransfer';
import SuccessfulTransfer from 'Root/components/pages/Modals/SuccessfulTransfer';

export default async ({ to, amount }) => {
  store.dispatch({
    children: <LoadingTransfer />,
    type: types.modal.CHANGE_MODAL_CONTENT,
  });

  const { wallet } = store.getState();

  wallet.wallet.transferTo(to, amount).then((data) => {
    store.dispatch({
      type: types.modal.CHANGE_MODAL_CONTENT,
      children: <SuccessfulTransfer hash={data} />,
    });
  }).catch(() => {
    store.dispatch({
      type: types.modal.CHANGE_MODAL_CONTENT,
      children: <SuccessfulTransfer failure />,
    });
  });
};
