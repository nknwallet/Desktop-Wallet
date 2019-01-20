import React from 'react';

import logo from 'Root/images/logo.png';
import logoWithName from 'Root/images/LogoWithName.png';

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

      <div src={logo} alt="Logo" className={styles.logo} />

      <img src={logoWithName} alt="Logo" className={styles.logoWithName} />
    </div>
  );
}

export default Background;
