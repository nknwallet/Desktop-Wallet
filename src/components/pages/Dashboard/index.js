import React from 'react';

import qrIcon from 'Root/images/qr.png';
import Box from 'Root/components/tools/Box';
import submitIcon from 'Root/images/submit.png';
import logoIcon from 'Root/images/logo-small.png';
import Button from 'Root/components/tools/Button';

import Nav from './Nav';
import styles from './styles.less';

function Dashboard() {
  return (
    <div className={styles.container}>
      <Nav />

      <div className={styles.info}>
        <div className={styles.column1}>
          <Box title="Sales" width={891} height={519} line />

          <Box title="Last Transaction" width={890} height={317} />
        </div>

        <div className={styles.column2}>
          <Box
            width={394}
            height={119}
          >
            <div className={styles.balance}>
              <div>
                <img src={logoIcon} alt="Logo" />
              </div>

              <div>
                <p className={styles.title}>Available Balance</p>
                <p className={styles.balanceNumber}>0.6573363 NKN</p>
              </div>
            </div>
          </Box>

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

          <Box title="Title" width={398} height={318} line>
            <div className={styles.desciption}>
              <p className={styles.textGrey}>Download Wallet from here</p>

              <button className={styles.button} type="button">Download</button>

              <p className={styles.textGrey2}>Showing your private key</p>

              <button className={styles.button} type="button">Show private key</button>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
