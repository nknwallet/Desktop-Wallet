import React from 'react';

import store from 'Root/store';
import types from 'Root/actions';
import currentWindow from 'Root/helpers/currentWindow';
import ImportWalletModal from 'Root/components/pages/Modals/ImportWallet';

export default async () => {
  store.dispatch({
    type: types.modal.OPEN,
    children: <ImportWalletModal />,
    width: currentWindow().width > 500 ? 460 : 250,
    height: currentWindow().width > 500 ? 407 : 380,
  });
};
