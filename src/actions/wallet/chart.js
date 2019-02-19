import store from 'Root/store';
import types from 'Root/actions';
import chart from 'Root/helpers/chart';

export default async () => new Promise(async (resolve) => {
  const { wallet } = store.getState().wallet;

  const prices = await chart(wallet.address);

  store.dispatch({
    priceUsd: prices.price_usd,
    type: types.wallet.PRICE_USD,
  });

  resolve();
});
