import React from 'react';

import store from 'Root/store';
import types from 'Root/actions';
import ShowTransferModal from 'Root/components/pages/Modals/Transfer';

export default async () => {
  store.dispatch({
    height: 610,
    type: types.modal.OPEN,
    children: <ShowTransferModal />,
  });
};
