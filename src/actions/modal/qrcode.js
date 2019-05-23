import React from 'react';

import store from 'Root/store';
import types from 'Root/actions';
import currentWindow from 'Root/helpers/currentWindow';
import QrCodeModal from 'Root/components/pages/Modals/QrCode';

export default async () => {
  store.dispatch({
    type: types.modal.OPEN,
    showCloseButton: false,
    children: <QrCodeModal />,
    width: currentWindow().width > 500 ? 460 : 250,
    height: currentWindow().width > 500 ? 305 : 340,
  });
};
