import React from 'react';
import shortid from 'shortid';
import { connect } from 'react-redux';

import Box from 'Root/components/tools/Box';

import styles from './styles.less';
import Transaction from './Transaction';

function Transactions(props) {
  const transactions = props.transactions.slice(0, 4);

  return (
    <Box title="Last Transactions" width={691} height={246}>
      <div className={styles.labels}>
        <p className={styles.label1}>Height</p>
        <p className={styles.label2}>Txid</p>
        <p className={styles.label3}>Value</p>
        <p className={styles.label4}>Time</p>
      </div>

      {
        transactions.map(data => (
          <Transaction
            data={data}
            key={shortid.generate()}
          />
        ))
      }
    </Box>
  );
}

export default connect(state => ({
  transactions: state.wallet.transactions,
}))(Transactions);
