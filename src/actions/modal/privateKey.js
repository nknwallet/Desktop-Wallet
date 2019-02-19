import React from 'react';

import store from 'Root/store';
import types from 'Root/actions';
import ShowPrivateKeyModal from 'Root/components/pages/Modals/PrivateKey';

export default async () => {
  store.dispatch({
    type: types.modal.OPEN,
    children: <ShowPrivateKeyModal />,
  });
};
