import React from 'react';
import { connect } from 'react-redux';

import styles from './styles.less';

function Show(props) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Private key</p>

      <p className={styles.privateKey}>{props.wallet.wallet.getPrivateKey()}</p>
    </div>
  );
}

export default connect(state => ({
  wallet: state.wallet,
}))(Show);
