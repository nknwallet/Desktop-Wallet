import history from 'Root/history';

import price from './price';
import block from './blocks';
import balance from './balance';
import transactions from './transactions';

export default async () => {
  setInterval(() => {
    if (history.location.pathname !== '/dashboard') {
      return;
    }

    price();
    block();
    balance();
    transactions();
  }, 5000);
};
