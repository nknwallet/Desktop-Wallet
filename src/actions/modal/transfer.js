import React from 'react';

import store from 'Root/store';
import types from 'Root/actions';
import currentWindow from 'Root/helpers/currentWindow';
import ShowTransferModal from 'Root/components/pages/Modals/Transfer';

export default async () => {
  store.dispatch({
    height: 375,
    type: types.modal.OPEN,
    children: <ShowTransferModal />,
    animation: 'slideLeft',
    width: currentWindow().width > 500 ? 461 : 250,
  });
};
