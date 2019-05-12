import React from 'react';
import { connect } from 'react-redux';

import Box from 'Root/components/tools/Box';
import logoIcon from 'Root/images/small-logo-grey.png';

import styles from './styles.less';

function Balance(props) {
  const price = Number.parseFloat(props.wallet.price, 10);
  const balance = Number.parseFloat(props.wallet.balance, 10);

  return (
    <Box
      width={306}
      height={92}
    >
      <div className={styles.container}>
        <div className={styles.nkn}>
          <div className={styles.logoContainer}>
            <img src={logoIcon} alt="Logo" />
            <p>&nbsp; NKN</p>
          </div>

          <p>{props.wallet.balance}</p>
        </div>

        <div className={styles.line} />

        <div className={styles.total}>
          <p className={styles.price}>Total (USD)</p>

          <p className={styles.amount}>
            <span>$</span>
            {(balance * price).toFixed(2)}
          </p>
        </div>
      </div>
    </Box>
  );
}

export default connect(state => ({
  wallet: state.wallet,
  language: state.language,
}))(Balance);
