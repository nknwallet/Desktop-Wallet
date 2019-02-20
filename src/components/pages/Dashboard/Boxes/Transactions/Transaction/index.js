import React from 'react';
import moment from 'moment';

import styles from './styles.less';

function Transaction(props) {
  return (
    <div className={styles.container}>
      <p className={styles.height}>
        {props.data.Height}
      </p>

      <p className={styles.hash}>
        {props.data.Hash}
      </p>

      <p className={styles.value}>
        {props.data.Value}
      </p>

      <p className={styles.time}>
        {moment(props.data.Timestamp).fromNow()}
      </p>
    </div>
  );
}


export default Transaction;
