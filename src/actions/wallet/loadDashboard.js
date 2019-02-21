import price from './price';
import chart from './chart';
import block from './blocks';
import qrcode from './qrcode';
import balance from './balance';
import transactions from './transactions';

export default async ({ push }) => {
  try {
    await Promise.all([
      chart(),
      block(),
      price(),
      qrcode(),
      balance(),
      transactions(),
    ]);

    push('/dashboard');
  } catch (error) {
    console.log(error);
  }
};
