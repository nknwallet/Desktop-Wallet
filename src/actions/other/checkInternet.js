import store from 'Root/store';
import types from 'Root/actions';

export default async () => {
  if (!global.navigator.onLine) {
    store.dispatch({
      type: types.internet.OFFLINE,
    });

    return false;
  }

  store.dispatch({
    type: types.internet.ONLINE,
  });

  return true;
};
