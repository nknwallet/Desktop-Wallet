import store from 'Root/store';
import types from 'Root/actions';

export default async () => new Promise((resolve, reject) => {
  const { wallet } = store.getState().wallet;

  wallet.queryAssetBalance()
    .then((value) => {
      store.dispatch({
        balance: value.toString(),
        type: types.wallet.BALANCE,
      });

      resolve();
    })
    .catch((error) => {
      reject(error);
    });
});
