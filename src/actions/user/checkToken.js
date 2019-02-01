import store from 'Root/store';
import types from 'Root/actions';

export default async () => new Promise((resolve) => {
  const token = global.localStorage.getItem('token');

  if (token !== null) {
    store.dispatch({
      token,
      type: types.user.LOGIN,
    });

    return resolve();
  }

  return resolve();
});
