import React from 'react';
import shortid from 'shortid';
import { connect } from 'react-redux';

import Box from 'Root/components/tools/Box';
import language from 'Root/helpers/language';

import styles from './styles.less';
import Transaction from './Transaction';

function Transactions(props) {
  const transactions = props.transactions.slice(0, 4);

  return (
    <Box
      width={691}
      height={263}
      overflow="scroll"
      title={language.lastTransactions[props.language]}
    >
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
  language: state.language,
  transactions: state.wallet.transactions,
}))(Transactions);
