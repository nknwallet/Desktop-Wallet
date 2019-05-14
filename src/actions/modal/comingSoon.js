import React from 'react';

import store from 'Root/store';
import types from 'Root/actions';

import ComingSoonModal from 'Root/components/pages/Modals/ComingSoon';

export default () => {
  store.dispatch({
    width: 250,
    height: 300,
    type: types.modal.OPEN,
    children: <ComingSoonModal />,
  });
};
