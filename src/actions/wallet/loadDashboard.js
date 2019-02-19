import chart from './chart';
import qrcode from './qrcode';
import balance from './balance';

export default async ({ push }) => {
  try {
    await chart();
    await qrcode();
    await balance();

    push('/dashboard');
  } catch (error) {
    console.log(error);
  }
};
