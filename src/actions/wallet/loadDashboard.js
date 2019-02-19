import chart from './chart';
import qrcode from './qrcode';
import balance from './balance';

export default async ({ push }) => {
  Promise.all([chart, qrcode, balance]).then(() => {
    push('/dashboard');
  }).catch(() => {
  });
};
