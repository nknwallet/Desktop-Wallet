import React from 'react';

import store from 'Root/store';
import types from 'Root/actions';
import ShowPrivateKeyModal from 'Root/components/pages/Modals/PrivateKey/Show';

export default async ({ password, setState }) => {
  const realPass = global.localStorage.getItem('password');

  if (realPass !== password) {
    setState({
      error: 'Password is incorrect.',
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
    });
  }, 500);
};
