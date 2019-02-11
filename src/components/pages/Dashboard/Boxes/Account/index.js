import React from 'react';

import qrIcon from 'Root/images/qr.png';
import Box from 'Root/components/tools/Box';
import submitIcon from 'Root/images/submit.png';
import Button from 'Root/components/tools/Button';

import styles from './styles.less';

function Account() {
  return (
    <Box title="Account" width={395} height={383} line>
      <div className={styles.accountBox}>
        <p className={styles.accoutTitle}>Name:</p>
        <p className={styles.accoutData}>j783788732fdv832638739r3</p>

        <p className={styles.accoutTitle}>Address:</p>

        <div className={styles.qrBox}>
          <p className={styles.accoutData2}>NTBoWouUgEwfaZ3ExNrFsWEpFUJWE5NftD</p>

          <img src={qrIcon} alt="QR Code" className={styles.qrCode} />
        </div>

        <Button padding="11px 33px">
          <div className={styles.submitButton}>
            <img src={submitIcon} alt="Submit" className={styles.submitIcon} />
            <p>SEND</p>
          </div>
        </Button>
      </div>
    </Box>
  );
}

export default Account;
