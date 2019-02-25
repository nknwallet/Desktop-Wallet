import React from 'react';

import store from 'Root/store';
import types from 'Root/actions';
import ShowPrivateKeyModal from 'Root/components/pages/Modals/PrivateKey';

export default async () => {
  store.dispatch({
    width: 461,
    height: 270,
    type: types.modal.OPEN,
    children: <ShowPrivateKeyModal />,
  });
};
