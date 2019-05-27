import price from './price';
import chart from './chart';
import block from './blocks';
import balance from './balance';
import transactions from './transactions';

export default async ({ push }) => {
  push('/loading');

  try {
    await Promise.all([
      chart(),
      block(),
      price(),
      balance(),
      transactions(),
    ]);

    push('/dashboard');
  } catch (error) {
    console.log('Error', error);
  }
};
