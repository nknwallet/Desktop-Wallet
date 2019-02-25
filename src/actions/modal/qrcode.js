import React from 'react';

import store from 'Root/store';
import types from 'Root/actions';
import QrCodeModal from 'Root/components/pages/Modals/QrCode';

export default async () => {
  store.dispatch({
    width: 231,
    height: 313,
    showCloseButton: false,
    type: types.modal.OPEN,
    children: <QrCodeModal />,
  });
};
