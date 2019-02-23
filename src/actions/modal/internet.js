import React from 'react';

import store from 'Root/store';
import types from 'Root/actions';
import loadDashboard from 'Root/actions/wallet/loadDashboard';
import InternetConnectionModal from 'Root/components/pages/Modals/InternetConnection';

export default async () => {
  if (!global.navigator.onLine) {
    store.dispatch({
      type: types.modal.OPEN,
      children: <InternetConnectionModal />,
    });

    return false;
  }

  const { wallet } = store.getState();

  if (wallet.name) {
    loadDashboard();
  }

  return true;
};
