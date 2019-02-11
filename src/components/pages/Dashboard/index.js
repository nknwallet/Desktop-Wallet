import React from 'react';

import Nav from './Nav';
import Title from './Boxes/Title';
import Sales from './Boxes/Sales';
import styles from './styles.less';
import Balance from './Boxes/Balance';
import Account from './Boxes/Account';
import Transactions from './Boxes/Transactions';

function Dashboard() {
  return (
    <div className={styles.container}>
      <Nav />

      <div className={styles.info}>
        <div className={styles.column1}>
          <Sales />

          <Transactions />
        </div>

        <div className={styles.column2}>
          <Balance />

          <Account />

          <Title />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
