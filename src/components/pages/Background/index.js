import React from 'react';

import newLogo from 'Root/images/newLogo.png';

import styles from './styles.less';

function Background() {
  return (
    <div className={styles.background}>
      <p className={styles.nknName}>NKN</p>
      <p className={styles.walletName}>Wallet</p>
      <div className={styles.details}>
        Open Source
        <div className={styles.circle} />
        Fast
        <div className={styles.circle} />
        Safe
      </div>

      <div className={styles.logo} />

      <img src={newLogo} alt="Logo" className={styles.logoWithName} />
    </div>
  );
}

export default Background;
