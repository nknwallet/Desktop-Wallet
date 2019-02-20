import React from 'react';
import { connect } from 'react-redux';

import Box from 'Root/components/tools/Box';

import styles from './styles.less';
import Transaction from './Transaction';

function Transactions(props) {
  return (
    <Box title="Last Transactions" width={890} height={317}>
      <div className={styles.labels}>
        <p className={styles.label1}>Height</p>
        <p className={styles.label2}>Txid</p>
        <p className={styles.label3}>Value</p>
        <p className={styles.label4}>Time</p>
      </div>

      {props.transactions && props.transactions.map(data => <Transaction data={data} />)}
    </Box>
  );
}

export default connect(state => ({
  transactions: state.wallet.transactions,
}))(Transactions);
