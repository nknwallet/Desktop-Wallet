import React from 'react';
import { connect } from 'react-redux';

import Box from 'Root/components/tools/Box';
import logoIcon from 'Root/images/logo-small.png';

import styles from './styles.less';

function Balance(props) {
  return (
    <Box
      width={306}
      height={92}
    >
      <div className={styles.balance}>
        <div>
          <img src={logoIcon} alt="Logo" />
        </div>

        <div>
          <p className={styles.title}>Available Balance</p>
          <p className={styles.balanceNumber}>
            {props.wallet.balance}
            &nbsp;
            NKN
          </p>
        </div>
      </div>
    </Box>
  );
}

export default connect(state => ({
  wallet: state.wallet,
}))(Balance);
