import React from 'react';

import store from 'Root/store';
import types from 'Root/actions';
import QrCodeModal from 'Root/components/pages/Modals/QrCode';

export default async () => {
  const { qrCode } = store.getState().wallet;

  store.dispatch({
    type: types.modal.OPEN,
    children: <QrCodeModal text="SCAN QRCODE" image={qrCode} />,
  });
};
