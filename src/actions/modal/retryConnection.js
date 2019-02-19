import store from 'Root/store';
import types from 'Root/actions';

import internet from './internet';

export default async () => {
  store.dispatch({
    type: types.modal.CLOSE,
  });

  setTimeout(internet, 1000);
};
