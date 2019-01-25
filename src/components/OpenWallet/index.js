import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'Root/components/Button';
import TextField from 'Root/components/TextField';
import Background from 'Root/components/Background';

import styles from './styles.less';

function OpenWallet() {
  return (
    <div style={{ display: 'flex' }}>
      <Background />

      <div className={styles.container}>
        <p className={styles.title}>OPEN WALLET</p>

        <p className={styles.label}>Wallet file to open</p>
        <TextField placeholder="Upload wallet file" type="text" />

        <p className={styles.label}>Password</p>
        <TextField placeholder="Password of the wallet to open" type="password" />

        <div className={styles.links}>
          <Link to="/restore-wallet">Restore from private key!</Link>
          <Link to="/create-wallet">Create wallet</Link>
        </div>

        <Button>
          OPEN
        </Button>
      </div>
    </div>
  );
}

export default OpenWallet;
