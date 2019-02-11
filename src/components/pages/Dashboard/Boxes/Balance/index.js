import React from 'react';

import Box from 'Root/components/tools/Box';
import logoIcon from 'Root/images/logo-small.png';

import styles from './styles.less';

function Balance() {
  return (
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
  );
}

export default Balance;
