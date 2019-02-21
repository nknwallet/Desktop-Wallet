import store from 'Root/store';
import types from 'Root/actions';
import price from 'Root/helpers/price';

export default async () => new Promise(async (resolve) => {
  const p = await price();

  store.dispatch({
    price: p[0].price_usd,
    type: types.wallet.PRICE,
  });

  resolve();
});
