import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'Root/components/Button';
import TextField from 'Root/components/TextField';
import Background from 'Root/components/Background';

import styles from './styles.less';

function CreateWallet() {
  return (
    <div style={{ display: 'flex' }}>
      <Background />

      <div className={styles.container}>
        <p className={styles.title}>CREATE NEW WALLET</p>
        <p className={styles.label}>Wallet name</p>
        <TextField placeholder="8-20 characters, default to MyWallet" type="text" />

        <p className={styles.label}>Password</p>
        <TextField placeholder="8-20 characters" type="password" />

        <p className={styles.label}>Confirm Password</p>
        <TextField placeholder="8-20 characters" type="password" />

        <div className={styles.links}>
          <Link to="/restore-wallet">Restore from private key!</Link>
          <Link to="/open-wallet">Open wallet</Link>
        </div>

        <Button>
          CREATE
        </Button>
      </div>
    </div>
  );
}

export default CreateWallet;
