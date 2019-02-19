import store from 'Root/store';
import types from 'Root/actions';

export default async () => new Promise((resolve) => {
  const { wallet } = store.getState();

  wallet.queryAssetBalance()
    .then((value) => {
      store.dispatch({
        value,
        type: types.wallet.BALANCE,
      });

      resolve();
    });
});
