import block from './blocks';
import balance from './balance';
import transactions from './transactions';

export default async () => {
  setInterval(() => {
    block();
    balance();
    transactions();
  }, 10000);
};
