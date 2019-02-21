import price from './price';
import block from './blocks';
import balance from './balance';
import transactions from './transactions';

export default async () => {
  setInterval(() => {
    price();
    block();
    balance();
    transactions();
  }, 5000);
};
