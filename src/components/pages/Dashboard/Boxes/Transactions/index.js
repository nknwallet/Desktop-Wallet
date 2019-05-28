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
      title={
        transactions.length
          ? language.lastTransactions[props.language]
          : 'No Transactions'
      }
    >
      {
        transactions.length
          ? (
            <div className={styles.labels}>
              <p className={styles.label1}>{language.height[props.language]}</p>
              <p className={styles.label2}>{language.hash[props.language]}</p>
              <p className={styles.label3}>{language.value[props.language]}</p>
              <p className={styles.label4}>{language.time[props.language]}</p>
            </div>
          )
          : ''
      }

      {
        !transactions.length
          ? (
            ''
          )
          : transactions.map(data => (
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
