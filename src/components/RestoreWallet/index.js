import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'Root/components/Button';
import TextField from 'Root/components/TextField';

import styles from './styles.less';

function RestoreWallet() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>RESTORE WALLET</p>
      <p className={styles.details}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      </p>
      <p className={styles.label}>Wallet name</p>
      <TextField placeholder="8-20 characters, default to MyWallet" />

      <p className={styles.label}>Private Key</p>
      <TextField placeholder="Your private key" />

      <p className={styles.label}>Password</p>
      <TextField placeholder="8-20 characters" invisible />

      <p className={styles.label}>Confirm Password</p>
      <TextField placeholder="8-20 characters" invisible />

      <div className={styles.links}>
        <Link to="/restore-private">Restore from private key!</Link>
        <Link to="/create-wallet">Create Wallet</Link>
      </div>

      <Button>
        RESTORE
      </Button>
    </div>
  );
}

export default RestoreWallet;
