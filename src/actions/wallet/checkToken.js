import store from 'Root/store';
import types from 'Root/actions';

export default async () => new Promise((resolve) => {
  const token = global.localStorage.getItem('privateKy');

  if (token !== null) {
    store.dispatch({
      token,
      type: types.token.LOGIN,
    });

    return resolve();
  }

  return resolve();
});
