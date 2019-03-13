import React from 'react';
import { connect } from 'react-redux';

import Box from 'Root/components/tools/Box';
import Chart from 'Root/components/tools/Chart';

import styles from './styles.less';

function Price(props) {
  return (
    <Box title="Price" width={692} height={408} line>
      <div className={styles.container}>
        <div className={styles.dollarSign}>
          <p>$</p>
        </div>

        <p className={styles.price}>
          $
          {Number.parseFloat(props.wallet.price, 10).toFixed(4)}
        </p>
      </div>
      <Chart />
    </Box>
  );
}

export default connect(state => ({
  wallet: state.wallet,
}))(Price);
