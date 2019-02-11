import React from 'react';

import Box from 'Root/components/tools/Box';

import styles from './styles.less';

function Title() {
  return (
    <Box title="Title" width={398} height={318} line>
      <div className={styles.desciption}>
        <p className={styles.textGrey}>Download Wallet from here</p>

        <button className={styles.button} type="button">Download</button>

        <p className={styles.textGrey2}>Showing your private key</p>

        <button className={styles.button} type="button">Show private key</button>
      </div>
    </Box>
  );
}

export default Title;
