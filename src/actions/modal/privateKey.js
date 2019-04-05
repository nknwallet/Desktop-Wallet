import React from 'react';

import store from 'Root/store';
import types from 'Root/actions';
import currentWindow from 'Root/helpers/currentWindow';
import ShowPrivateKeyModal from 'Root/components/pages/Modals/PrivateKey';

export default async () => {
  store.dispatch({
    width: currentWindow().width > 500 ? 461 : 250,
    height: 270,
    type: types.modal.OPEN,
    children: <ShowPrivateKeyModal />,
  });
};
