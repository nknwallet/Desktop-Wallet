import classnames from 'classnames';
import React, { Component } from 'react';

import refreshInterval from 'Root/actions/wallet/refreshInterval';

import Nav from './Nav';
import Price from './Boxes/Price';
import styles from './styles.less';
import Backup from './Boxes/Backup';
import Balance from './Boxes/Balance';
import Account from './Boxes/Account';
import Transactions from './Boxes/Transactions';

class Dashboard extends Component {
  componentDidMount() {
    refreshInterval();
  }

  render() {
    return (
      <div className={styles.container}>
        <Nav />

        <div className={styles.info}>
          <div className={classnames(styles.column, styles.column1)}>
            <Price />

            <Transactions />
          </div>

          <div className={styles.column}>
            <Balance />

            <Account />

            <Backup />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
