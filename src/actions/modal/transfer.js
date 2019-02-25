import React from 'react';

import store from 'Root/store';
import types from 'Root/actions';
import ShowTransferModal from 'Root/components/pages/Modals/Transfer';

export default async () => {
  store.dispatch({
    width: 461,
    height: 453,
    type: types.modal.OPEN,
    children: <ShowTransferModal />,
  });
};
