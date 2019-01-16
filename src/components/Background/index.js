import React from 'react';

import styles from './styles.less';

function Background() {
  return (
    <div className={styles.background}>
      <p className={styles.nknName}>NKN</p>
      <p className={styles.walletName}>Wallet</p>
    </div>
  );
}

export default Background;
