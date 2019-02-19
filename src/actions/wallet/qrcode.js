import store from 'Root/store';
import types from 'Root/actions';
import qrCode from 'Root/helpers/qrcode';

export default async () => new Promise(async (resolve) => {
  const { wallet } = store.getState().wallet;

  const image = await qrCode(wallet.address);

  store.dispatch({
    qrCode: image,
    type: types.wallet.QRCODE,
  });

  resolve();
});
